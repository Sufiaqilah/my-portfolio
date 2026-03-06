export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pt-32 pb-24">
      <article className="max-w-3xl mx-auto prose prose-invert prose-neutral">
        {children}
      </article>
    </main>
  );
}