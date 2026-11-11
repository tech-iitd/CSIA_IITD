function ArpanProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/arpan.jpg"
          alt="Prof. Arpan Kumar Kar"
        />

        <div className="faculty-intro">
            <h2>Prof. Arpan Kumar Kar</h2>

            <p className="designation">
                Professor
            </p>

        <p className="research">
       Area: Information Systems
        </p>

          <p className="email">
            <a href="mailto:arpankar@iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> arpankar@iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-7320
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Management Studies, IIT Delhi
          </p>

          <p className="website">
            <a
              href="https://arpankar.com/"
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

export default ArpanProfile;