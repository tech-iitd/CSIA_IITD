function RajendraProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/Rajendra.jpg"
          alt="Dr. Rajendra Kumar"
        />

        <div className="faculty-intro">
          <h2>Dr. Rajendra Kumar</h2>

          <p className="designation">
           Assistant Professor
          </p>

          <p className="research">
           Quantum Computing, 
           Fine-grained Complexity and Cryptography
          </p>

          <p className="email">
            <a href="mailto:r_kumar@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> r_kumar@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-6026
          </p>
          
              <p className="office">
             <i className="fa-solid fa-location-dot" aria-hidden="true" /> Bharti 410
          </p>

          <p className="website">
            <a
              href="https://k-rajendra.github.io/"
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

export default RajendraProfile;