function SPSinghProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/SP Singh.png"
          alt="Prof. S.P. Singh"
        />

        <div className="faculty-intro">
          <h2> Prof. S.P. Singh</h2>

          <p className="designation">
             Professor
          </p>

          <p className="research">
         Dynamics of Rotating Machinery, Composite Materials, Machine Design, 
         Active Vibration Control and Nano-Mechanics
          </p>

          <p className="email">
            <a href="mailto:singhsp@mech.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> singhsp@mech.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1136 
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Mechanical Engineering,
                  IIT Delhi
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~singhsp/"
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

export default SPSinghProfile;