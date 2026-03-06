import Link from "next/link";

const posts = [
  {
    slug: "my-it-journey",
    title: "The Journey of How I Decided I Want to Be an IT Person",
    date: "March 6, 2026",
    description: "From CRT monitors and netkad $10 to HND in Information Systems — this is my story.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Writing</p>
        <h1 className="text-4xl font-bold text-white mb-12">Blog</h1>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-white font-semibold mb-1 group-hover:text-neutral-200">{post.title}</h2>
                  <p className="text-neutral-400 text-sm">{post.description}</p>
                </div>
                <span className="text-neutral-500 text-sm whitespace-nowrap">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}