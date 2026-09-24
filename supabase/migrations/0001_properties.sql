-- EllaDay Homes · listings table + photo bucket
-- Run once in Supabase → SQL Editor. Safe to re-run.

create extension if not exists pgcrypto;

create table if not exists public.properties (
  id                uuid primary key default gen_random_uuid(),
  slug              text not null unique,
  type              text not null check (type in ('house', 'lot', 'farm')),
  agent             text not null check (agent in ('dayana', 'ella')),
  published         boolean not null default false,

  price             numeric(14, 2) not null default 0,
  currency          text not null default 'CRC' check (currency in ('USD', 'CRC')),
  negotiable        boolean not null default false,
  price_on_request  boolean not null default false,
  sold              boolean not null default false,
  is_new            boolean not null default false,
  previous_price    numeric(14, 2),

  bedrooms          integer,
  bathrooms         numeric(4, 1),
  built_area        numeric(12, 2),
  lot_size          numeric(14, 2),
  lot_unit          text check (lot_unit in ('m2', 'ha')),

  -- Multilingual fields: {"es": "...", "en": "...", "fr": "...", "de": "..."}
  location          jsonb not null,
  map_query         text not null default '',
  title             jsonb not null,
  short_description jsonb not null,
  -- Arrays of paragraphs / bullet points per language.
  description       jsonb not null default '{"es": [], "en": []}'::jsonb,
  highlights        jsonb not null default '{"es": [], "en": []}'::jsonb,
  -- [{"src": "https://...", "alt": "...", "path": "bucket/object.jpg"}]
  images            jsonb not null default '[]'::jsonb,

  sort_order        integer not null default 0,
  created_by        text check (created_by in ('dayana', 'ella')),
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists properties_published_idx
  on public.properties (published, sort_order, created_at desc);

-- Keep updated_at fresh on every edit.
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists properties_set_updated_at on public.properties;
create trigger properties_set_updated_at
  before update on public.properties
  for each row execute function public.set_updated_at();

-- Row Level Security: the public site (anon key) can only read published
-- listings. All writes happen through the admin panel with the service role
-- key, which bypasses RLS.
alter table public.properties enable row level security;

drop policy if exists "Public can read published properties" on public.properties;
create policy "Public can read published properties"
  on public.properties for select
  to anon, authenticated
  using (published = true);

-- Photo bucket. Public so the site can render images with plain URLs.
-- Uploads use short-lived signed URLs minted by the admin server, so no
-- write policy is needed for anon users.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'properties',
  'properties',
  true,
  10485760, -- 10 MB per file (photos are compressed in the browser first)
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;
