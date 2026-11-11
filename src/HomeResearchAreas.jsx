import { Link } from "react-router-dom";

const researchAreas = [
  {
    icon: "fa-solid fa-wifi",
    title: "Network & Wireless Security",
    description: "Security across wireless networks, communication systems and networked devices.",
  },
  {
    icon: "fa-solid fa-key",
    title: "Cryptography & Protocols",
    description: "Cryptographic methods, security protocols and formal approaches to trust.",
  },
  {
    icon: "fa-solid fa-microchip",
    title: "Cyber-Physical Systems",
    description: "Protection of connected systems that link computing with the physical world.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "Machine Learning & Security",
    description: "Applying learning-based methods to security analysis and threat detection.",
  },
];

function HomeResearchAreas() {
  return (
    <section className="content-section home-research-section" aria-labelledby="home-research-title">
      <div className="home-feature-heading">
        <div>
          <div className="section-label">Research at CSIA</div>
          <h2 className="section-title" id="home-research-title">Research areas</h2>
          <p>Interdisciplinary expertise addressing security challenges across connected systems.</p>
        </div>
        <Link to="/research" className="home-section-link">
          Explore faculty research <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>

      <div className="home-research-grid">
        {researchAreas.map((area) => (
          <article className="home-research-card" key={area.title}>
            <span className="home-research-icon"><i className={area.icon} aria-hidden="true" /></span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeResearchAreas;
