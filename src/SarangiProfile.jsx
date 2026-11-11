function SarangiProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/ranjan sarangi.jpg"
          alt="Smruti Ranjan Sarangi"
        />

        <div className="faculty-intro">
          <h2>Smruti Ranjan Sarangi</h2>

          <p className="designation">
            Professor
          </p>

          <p className="research">
            Intelligent Systems, ML- and LLM-based System Design,
            AR/VR, Cyber-Security
          </p>

          <p className="email">
            <a href="mailto:srsarangi@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> srsarangi@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 7065
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Khosla 215
          </p>

          <p className="website">
            <a
              href="https://srsarangi.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Faculty Website
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SarangiProfile;