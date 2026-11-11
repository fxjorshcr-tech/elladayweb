// Re-mounts on every navigation, giving each page a soft fade-in.
// Opacity only: a transform here would trap fixed-position children
// (lightbox, sticky bars) inside this wrapper.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
