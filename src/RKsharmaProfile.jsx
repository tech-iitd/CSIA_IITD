function RKsharmaProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/rksharma.jpg"
          alt="Prof. R. K. Sharma"
        />

        <div className="faculty-intro">
          <h2>Prof. R. K. Sharma</h2>

          <p className="designation">
            Professor
          </p>

          <p className="research">
            Algebra, Cryptography
          </p>

          <p className="email">
            <a href="mailto:rksharma@maths.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> rksharma@maths.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1480
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Mathematics
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~rksharma/index.html"
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

export default RKsharmaProfile;