import "./Styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              A passionate developer crafting beautiful and functional web experiences. Let's build something amazing together.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Nosewise0" className="footer-social-link" aria-label="GitHub">
                <span>→</span>
              </a>
              <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter">
                <span>𝕏</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#about" className="footer-link">
                <span>→</span> About
              </a>
              <a href="#skills" className="footer-link">
                <span>→</span> Skills
              </a>
              <a href="#projects" className="footer-link">
                <span>→</span> Projects
              </a>
              <a href="#contact" className="footer-link">
                <span>→</span> Contact
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <div className="footer-links">
              <a href="mailto:nonsaker021@gmail.com" className="footer-link">
                <span>✉</span> Email Me
              </a>
              <a href="#contact" className="footer-link">
                <span>☎</span> Call Me
              </a>
              <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} All rights reserved. Made with <span style={{ color: "var(--accent)" }}>❤</span>
          </div>
          <div className="footer-credits">
            Designed & Built by <a href="#home">Nosewise</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
