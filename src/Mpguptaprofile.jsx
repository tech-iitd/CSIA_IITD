function MpguptaProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/mpgupta.png"
          alt="Prof. M.P. Gupta"
        />

        <div className="faculty-intro">
          <h2>Prof. M.P. Gupta</h2>

          <p className="designation">
            Modi Foundation Chair Professor
          </p>

          <p className="research">
           Cloud information Systems and 
           Information system management and E-Commerce and E-governance.
          </p>

          <p className="email">
            <a href="mailto:mpgupta@iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> mpgupta@iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-1173
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Management Studies, IIT Delhi
          </p>

          <p className="website">
            <a
              href="https://dms.iitd.ac.in/faculity_type/prof-m-p-gupta/"
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

export default MpguptaProfile;