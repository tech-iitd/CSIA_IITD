function VireshwerProfile() {
  return (
    <main className="faculty-profile-page">

      <div className="faculty-img">

        <img
          src="/assets/vireshwer.jpg"
          alt="Prof. Vireshwer Kumar"
        />

        <div className="faculty-intro">

          <h2>Prof. Vireshwar Kumar</h2>

          <p className="designation">
            Assistant Professor
          </p>

          <p className="research">
            Security and Privacy in Cyber-Physical Systems,
            Applied Cryptography, Adversarial Machine Learning
          </p>

          <p className="email">
            <a href="mailto:viresh@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> viresh@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1228
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> SIT 214
          </p>

          <p className="website">
            <a
              href="http://www.cse.iitd.ernet.in/~viresh"
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

export default VireshwerProfile;