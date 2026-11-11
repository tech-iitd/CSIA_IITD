function HarshanProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/harshan.png"
         alt="Dr. Harshan Jagadeesh" />

        <div className="faculty-intro">
          <h2>Dr. Harshan Jagadeesh</h2>

          <p className="designation">Co-Coordinator</p>

          <p className="research">
            Wireless Networks, Coding Theory, Security,
            Distributed Storage, Information Theory,
            Communication Theory
          </p>


          <p className="email">
            <a href="mailto:jharshan@ee.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> jharshan@ee.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> 01126597362
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Room No. 403, Block II
          </p>

          <p className="website">
            <a
              href="https://sites.google.com/site/jharshan/"
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

export default HarshanProfile;