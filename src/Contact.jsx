import "./Styles/Contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">06.</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          <div>
            <h3 className="contact-heading">
              LET&apos;S WORK
              <br />
              TOGETHER<span style={{ color: "var(--accent)" }}>_</span>
            </h3>
            <p className="contact-subtext">
              Have a project in mind? Want to collaborate? Or just want to say
              hello? Drop me a message and I&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="contact-social">
              <a href="https://github.com/Nosewise0" className="contact-social-link">
                <span>GitHub</span>
                <span>↗</span>
              </a>
              <a href="https://www.linkedin.com/in/nosewise0" className="contact-social-link">
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
              <a href="https://twitter.com/nosewise0" className="contact-social-link">
                <span>Twitter / X</span>
                <span>↗</span>
              </a>
              <a href="mailto:hello@nonsaker021@gmail.com" className="contact-social-link">
                <span>Email</span>
                <span>↗</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn--accent" style={{ width: "100%" }}>
                {submitted ? "// MESSAGE SENT ✓" : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
