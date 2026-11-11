function SarojProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/saroj.jpg"
          alt="Prof. Saroj Kaushik"
        />

        <div className="faculty-intro">
          <h2> Prof. Saroj Kaushik</h2>

          <p className="designation">
             Honorary Professor
          </p>

          <p className="research">
        Artificial Intelligence, Location Based Services
          </p>

          <p className="email">
            <a href="mailto:saroj.kaushik@snu.edu.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> saroj.kaushik@snu.edu.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> 91-0120-7170100
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> 322H Block-C, Shiv Nadar University Greater Noida Uttar Pradesh India
          </p>

          <p className="website">
            <a
              href="http://www.cse.iitd.ac.in/~saroj/"
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

export default SarojProfile;