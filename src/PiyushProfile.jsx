function PiyushProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">

        <img
          src="/assets/piyush.jpg"
          alt="Dr. Piyush Kumar Sharma"
        />

        <div className="faculty-intro">

          <h2>Dr. Piyush Kumar Sharma</h2>

          <p className="designation">
            Assistant Professor
          </p>

          <p className="research">
            Network Security, Privacy and Computer Systems
          </p>

          <p className="email">
            <a href="mailto:piyush@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> piyush@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1287
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Bharti 421
          </p>

          <p className="website">
            <a
              href="https://www.piyushs.in/"
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

export default PiyushProfile;