function HParsadProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/HParsad.jpg"
          alt="Dr. Hariprasad Kodamana"
        />

        <div className="faculty-intro">
          <h2>Dr. Hariprasad Kodamana</h2>

          <p className="designation">
           Associate Professor
          </p>

          <p className="research">
           Department of Chemical Engineering and Yardi School of Artificial Intelligence
          </p>

          <p className="email">
            <a href="mailto:kodamana@iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> kodamana@iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-1024
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Room 286, Block II
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~kodamana/HariprasadKodamana.html"
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

export default HParsadProfile;