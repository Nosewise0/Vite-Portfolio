import "./Styles/Projects.css";

const PROJECTS = [
  {
    number: "001",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart management, payment processing, and an admin dashboard. Built with a focus on performance and accessibility.",
    tags: ["JavaScript", "Node.js", "Express"],
    live: "#",
    code: "https://github.com/Nosewise0/Full-Stak-Ecommerce-Websiite",
    status: "In Development",
  },
  {
    number: "002",
    title: "AI Project Management App",
    description:
      "Collaborative AI-powered project management platform with real-time updates, smart task automation, AI-generated insights, drag-and-drop Kanban boards, and team workspaces designed for remote teams.",
    tags: ["Node.js", "JavaScript", "MySQL", "AI Integration"],
    live: "#",
    code: "https://github.com/Nosewise0/Aurora-Task-Management-App",
    status: "In Development",
  },
  {
    number: "003",
    title: "YelpCamp",
    description:
      "Full-stack campground review platform where users can explore, create, and review campgrounds with interactive maps, authentication, image uploads, and location-based features.",
    tags: ["Node.js", "Express", "MongoDB", "Maptiler", "Cloudinary", "JavaScript"],
    live: "https://yelpcamp-flame.vercel.app/",
    code: "https://github.com/Nosewise0/Yelpcamp-Clone",
    status: "Deployed",
  },
  {
    number: "004",
    title: "Todo List App",
    description:
      "A simple yet effective todo list application with a clean UI, local storage persistence, and basic task management features.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    live: "https://todolemon.vercel.app/",
    code: "https://github.com/Nosewise0/TodoList-Vite",
    status: "Deployed",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(
            ({ number, title, description, tags, live, code, status }) => (
              <div className="project-card" key={number}>
                <div className="project-number">{number}</div>

                <div className="project-info">
                  <h3>
                    {title}
                    <span style={{ marginLeft: '10px', marginBottom: '10px' }} className="tag" key={status}>
                      {status}
                    </span>
                  </h3>

                  <p>{description}</p>
                  <div className="project-tags">
                    {tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={live}>Live ↗</a>
                    <a href={code}>Code ↗</a>
                  </div>                
                </div>

                <div className="project-image">[ PREVIEW ]</div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
