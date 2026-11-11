function SuriProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/suri.jpg" 
          alt="Dr. Manan Suri"
        />
      <div className="faculty-intro">
          <h2>Dr. Manan Suri</h2>

         <p className="designation">Professor</p>

          <p className="research">
            Non-Volatile Memory Technology, AI Hardware and Applications,
            Neuromorphic and AI Hardware, Semiconductor Hardware Security,
            Circuit-Device Interaction
          </p>
       

          <p className="email">
            <a href="mailto:manansuri@ee.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> manansuri@ee.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1146
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Block II/ Room - 115
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~manansuri/"
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

export default SuriProfile;