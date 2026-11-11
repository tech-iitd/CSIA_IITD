import { Link } from "react-router-dom";

function Cards() {
  return (
    <section className="cards" aria-label="Explore CSIA">
      <Link to="/people" className="card home-feature-card" id="people">
        <div className="card-icon"><i className="fa-solid fa-users" aria-hidden="true" /></div>
        <h3>People</h3>
        <p>Explore faculty members, researchers, students and other members associated with the Centre of Excellence.</p>
        <span className="card-action">Meet the team <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
      </Link>

      <Link to="/collaborators" className="card home-feature-card" id="collaborators">
        <div className="card-icon"><i className="fa-solid fa-handshake" aria-hidden="true" /></div>
        <h3>Collaborators</h3>
        <p>The centre works with academic, research and industry partners in cybersecurity and related areas.</p>
        
      </Link>

      <Link to="/events" className="card home-feature-card" id="activities">
        <div className="card-icon"><i className="fa-solid fa-calendar-days" aria-hidden="true" /></div>
        <h3>Activities &amp; Events</h3>
        <p>Find workshops, seminars, conferences, training programmes and other centre activities.</p>
        <span className="card-action">Explore events <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
      </Link>

      <Link to="/security-hygiene" className="card home-feature-card" id="security-hygiene">
        <div className="card-icon"><i className="fa-solid fa-shield-halved" aria-hidden="true" /></div>
        <h3>Security Hygiene</h3>
        <p>Stay informed, browse safely, and protect your information online.</p>
        <span className="card-action">Explore security guidance <i className="fa-solid fa-arrow-right" aria-hidden="true" /></span>
      </Link>
    </section>
  );
}

export default Cards;
