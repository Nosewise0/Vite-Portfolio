import "./Styles/Hero.css";

const MARQUEE_ITEMS = [
  "React Developer",
  "Game Developer",
  "Open Source",
  "Problem Solver",
];

const STATS = [
  { value: "12+", label: "Projects" },
  { value: "1+", label: "Year Exp" },
  { value: "∞", label: "Coffee" },
  { value: "100%", label: "Passion" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-label">
          <span>&gt; software_developer</span>
          <span className="cursor" />
        </div>

        <h1 className="hero-title glitch" data-text="NOSEWISE">
          NOSE<span className="accent">WISE</span>
        </h1>

        <p className="hero-subtitle">
          I build exceptional digital experiences — clean code, bold design,
          and relentless attention to detail. Currently crafting interfaces
          that make people stop scrolling.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn--accent">View Work →</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>

        <div className="hero-stats">
          {STATS.map(({ value, label }) => (
            <div className="hero-stat" key={label}>
              <span className="stat-value">{value}</span> {label}
            </div>
          ))}
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-inner">
          {/* Duplicate items for seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className="marquee-text" key={i}>
              <span className="highlight">★</span> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}