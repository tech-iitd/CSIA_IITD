function VenkataProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/venkata.jpg"
          alt="Venkata Vivek Kumar Koppula"
        />

        <div className="faculty-intro">
          <h2>Venkata Vivek Kumar Koppula</h2>

          <p className="designation">
            Assistant Professor
          </p>

          <p className="research">
            Theoretical Cryptography, Quantum Computing
          </p>

          <p className="email">
            <a href="mailto:kvenkata@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> kvenkata@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2654 8522
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Bharti 413
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~kvenkata/"
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

export default VenkataProfile;