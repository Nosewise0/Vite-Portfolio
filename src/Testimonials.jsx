import "./Styles/Testimonials.css";
import { useState } from "react";

const TESTIMONIALS = [
  {
    text: "N/A",
    name: "N/A",
    role: "N/A",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const t = TESTIMONIALS[current];

  return (
    <section className="section" id="testimonials">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">05.</span>
          <h2 className="section-title">Testimonials</h2>
        </div>
        <div className="testimonials-wrapper">
          <div className="testimonial-card">
            <div className="testimonial-quote-mark">&ldquo;</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div>
                <div className="testimonial-author-name">{t.name}</div>
                <div className="testimonial-author-role">{t.role}</div>
              </div>
            </div>
          </div>
          <div className="testimonial-nav">
            <button onClick={prev} aria-label="Previous testimonial">
              ← Prev
            </button>
            <button onClick={next} aria-label="Next testimonial">
              Next →
            </button>
            <div className="testimonial-counter">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
