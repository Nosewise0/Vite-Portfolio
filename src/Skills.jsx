import "./Styles/Skills.css";
import { useState } from "react";

const SKILLS = [
  { name: "React", category: "Frontend", level: 45 },
  { name: "JavaScript", category: "Frontend", level: 60 },
  { name: "CSS", category: "Frontend", level: 60 },
  { name: "HTML", category: "Frontend", level: 95 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express", category: "Backend", level: 75 },
  { name: "MongoDB", category: "Backend", level: 70 },
  { name: "MySQL", category: "Backend", level: 65 },
  { name: "Git", category: "Tools", level: 65 },
  { name: "Vite", category: "Tools", level: 20 },
  { name: "Figma", category: "Design", level: 0 },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Tools", "Design"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`skills-category-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map(({ name, category, level }) => (
            <div className="skill-card" key={name}>
              <div className="skill-name">{name}</div>
              <div className="skill-category">{category}</div>
              <div className="skill-level">
                <div
                  className="skill-level-fill"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
