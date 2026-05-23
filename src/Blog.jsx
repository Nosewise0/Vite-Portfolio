import "./Styles/Blog.css";

const POSTS = [
  {
    date: "2026-05-10",
    title: "Why Brutalism Is the Future of Web Design",
    excerpt:
      "In a world of cookie-cutter templates, brutalist design cuts through the noise with raw authenticity and unapologetic boldness.",
  },
  {
    date: "2026-04-22",
    title: "Building Performant React Apps From Scratch",
    excerpt:
      "A deep dive into code splitting, lazy loading, memoization, and the patterns that make React apps fly.",
  },
  {
    date: "2026-03-15",
    title: "The Terminal Is Your Best Friend",
    excerpt:
      "How mastering the command line transformed my workflow and made me twice as productive as a developer.",
  },
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Blog</h2>
        </div>
        <div className="blog-list">
          {POSTS.map((post, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-date">{post.date}</div>
              <div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
              <a href="#" className="blog-read-link">
                Read →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
