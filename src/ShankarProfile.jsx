function ShankarProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/shankar.jpg" 
          alt="Prof. Shankar Prakriya"
        />
      <div className="faculty-intro">
          <h2>Prof. Shankar Prakriya</h2>

         <p className="designation">Professor</p>

          <p className="research">
           Signal Processing for Communications, Communication Systems,
            Equalization, Multiuser and Multicarrier Communication,
            Space-Time Processing, Parameter Estimation
          </p>
       

          <p className="email">
            <a href="mailto:shankar@ee.iitd.ernet.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> shankar@ee.iitd.ernet.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1050
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Electrical Engineering,
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~shankar.prakriya/"
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

export default ShankarProfile;