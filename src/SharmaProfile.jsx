function SharmaProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/sharma.jpg"
          alt="Dr. Subodh Sharma"
        />

        <div className="faculty-intro">
          <h2> Dr. Subodh Sharma</h2>

          <p className="designation">
            Associate Professor
          </p>

          <p className="research">
          Formal Methods, Program Analysis, Concurrent Systems, System Security
          </p>

          <p className="email">
            <a href="mailto:svs@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> svs@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 7639
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> 419 Bharti Building
          </p>

          <p className="website">
            <a
              href="https://subodhvsharma.github.io/"
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

export default SharmaProfile;