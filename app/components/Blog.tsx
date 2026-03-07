const posts = [
  {
    title: "The Journey of How I Decided I Want to Be an IT Person",
    date: "March 6, 2026",
    description: "From CRT monitors and netkad $10 to HND in Information Systems — this is my story.",
    slug: "/blog/my-it-journey",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Writing</p>
        <h2 className="text-3xl font-bold text-white mb-12">Blog</h2>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <a key={post.title} href={post.slug} className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors gap-4">
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-neutral-200">{post.title}</h3>
                <p className="text-neutral-400 text-sm">{post.description}</p>
              </div>
              <span className="text-neutral-500 text-sm whitespace-nowrap">{post.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}