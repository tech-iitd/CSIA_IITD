function SaifProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/saif.jpg" 
          alt="Dr. Saif K Mohammed"
          />
      <div className="faculty-intro">
          <h2>Dr. Saif K Mohammed</h2>

         <p className="designation">Professor</p>

          <p className="research">
           Wireless Communication (Large MIMO Systems/Massive MIMO Systems), 
           Communication Theory and Systems, 
           Information Theory, Statistical Signal Processing.
          </p>
       

          <p className="email">
            <a href="mailto:saifkm@ee.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> saifkm@ee.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1067
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Electrical Engineering
          </p>

          <p className="website">
            <a
              href="https://ee.iitd.ac.in/faculty-profile/30"
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

export default SaifProfile;