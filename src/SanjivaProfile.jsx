function SanjivaProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/sanjiva.jpg"
          alt="Prof. Sanjiva Prasad"
        />

        <div className="faculty-intro">
          <h2> Prof. Sanjiva Prasad</h2>

          <p className="designation">
             Professor
          </p>

          <p className="research">
        Semantics and Verification, Programming Languages, Concurrent Systems
          </p>

          <p className="email">
            <a href="mailto:sanjiva@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> sanjiva@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1294
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Khosla 204
          </p>

          <p className="website">
            <a
              href=" http://www.cse.iitd.ernet.in/~sanjiva"
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

export default SanjivaProfile;