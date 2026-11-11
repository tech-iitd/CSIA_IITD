function VaishnaviProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">

        <img
          src="/assets/vaishnavi.jpg"
          alt="Dr. Vaishnavi Sundararajan"
        />

        <div className="faculty-intro">

          <h2>Dr. Vaishnavi Sundararajan</h2>

          <p className="designation">
            Assistant Professor
          </p>

          <p className="research">
            Formal methods, Verification and Security
          </p>

          <p className="email">
            <a href="mailto:vaishnavi@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> vaishnavi@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1292
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Bharti 412
          </p>

          <p className="website">
            <a
              href="https://vaishs.github.io/"
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

export default VaishnaviProfile;