function SoravProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/sorav.jpg"
          alt="Prof. Sorav Bansal"
        />

        <div className="faculty-intro">
          <h2>Prof. Sorav Bansal</h2>

          <p className="designation">
            Professor
          </p>

          <p className="research">
            Operating Systems, Compilers
          </p>

          <p className="email">
            <a href="mailto:sbansal@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> sbansal@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 6020
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Khosla 413
          </p>

          <p className="website">
            <a
              href="http://www.cse.iitd.ernet.in/~sbansal"
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

export default SoravProfile;