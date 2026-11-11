function KolinProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/kolin.webp"
          alt="Kolin Paul"
        />

        <div className="faculty-intro">
          <h2>Prof. Kolin Paul</h2>

          <p className="designation">
            Professor
          </p>

          <p className="research">
            Embedded Systems
          </p>

          <p className="email">
            <a href="mailto:kolin@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> kolin@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 6033
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Khosla 102
          </p>

          <p className="website">
            <a
              href="https://kolinpaul.github.io/"
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

export default KolinProfile;