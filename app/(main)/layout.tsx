/**
 * The layout of main app (`/*`)
 */
export default function MainAppLayout({
  children,
}: {
  /**
   * The page component
   */
  children: React.ReactNode;
}) {
  return <main className="px-8 py-4">{children}</main>;
}
