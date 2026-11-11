import { Link } from "react-router-dom";

function Academic() {
  return (
    <section className="content-section home-programme-section" id="academic">
      <span className="home-section-icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true" /></span>
      <div className="section-label">Academic</div>
      <h2 className="section-title">Academic Programme</h2>
      <p>
        The interdisciplinary postgraduate programme provides students with
        knowledge and practical exposure in cybersecurity, cyber systems and
        information assurance.
      </p>
      <Link to="/mtech-admissions" className="home-section-link">
        Explore M.Tech admissions <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </Link>
    </section>
  );
}

export default Academic;
