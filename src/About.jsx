import "./Styles/About.css";

const INFO_ITEMS = [
  { label: "Name", value: "Nosewise/John Paul Enriquez" },
  { label: "Location", value: "Philippines" },
  { label: "Focus", value: "Frontend / Full-Stack" },
  { label: "Education", value: "Self-Taught + Continuous Learning" },
  { label: "Languages", value: "JavaScript, Python, HTML/CSS, Lua" },
];

const TAGS = ["React", "Node.js", "UI/UX", "Open Source", "MongoDB", "Express", "Vite"];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m <span className="highlight">Nosewise</span>, a software
              developer who believes code should be as expressive as art. I
              specialize in building {" "}
              <span className="highlight">modern web applications</span> with
              React, JavaScript, and a keen eye for design.
            </p>
            <p>
              My approach is simple: write{" "}
              <span className="highlight">clean, maintainable code</span> that
              solves real problems. I&apos;m passionate about creating interfaces
              that feel intuitive and look stunning — because users deserve both.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or drinking an
              unreasonable amount of coffee.
            </p>

            <div className="about-status">
              <div className="about-status-label">// Currently Working On</div>
              <p className="about-status-text">
                Building full-stack applications and exploring the intersection
                of design and engineering.
              </p>
            </div>
          </div>

          <div className="about-decoration">
            <div className="about-info-grid">
              {INFO_ITEMS.map(({ label, value }) => (
                <div className="about-info-item" key={label}>
                  <div className="about-info-label">{label}</div>
                  <div className="about-info-value">{value}</div>
                </div>
              ))}
            </div>

            <div className="about-tags">
              {TAGS.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
