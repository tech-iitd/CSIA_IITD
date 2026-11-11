function RanjanProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/ranjan bose.jpg"
          alt="Prof. Ranjan Bose"
        />

        <div className="faculty-intro">
          <h2>Prof. Ranjan Bose</h2>

          <p className="designation">
            Professor
          </p>

          <p className="research">
            Secure Communications, Coding Theory,
            Ultra-Wideband (UWB) Communications,
            Broadband Wireless Access and Wireless Security.
          </p>

          <p className="email">
            <a href="mailto:rbose@ee.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> rbose@ee.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-1048
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Electrical Engineering, IIT Delhi
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~rbose/"
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

export default RanjanProfile;