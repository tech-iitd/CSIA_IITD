function AnupamProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/anupam.jpg"
          alt="Dr. Anupam Joshi"
        />

        <div className="faculty-intro">
          <h2>Dr. Anupam Joshi</h2>

          <p className="designation">
            Visiting Staff
          </p>

          <p className="research">
            Department of Computer Science & Electrical Engineering,
           <br/>
            University of Maryland, Baltimore County
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Baltimore, MD 21250
          </p>

          <p className="email">
            <a href="mailto:joshi@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> joshi@cse.iitd.ac.in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default AnupamProfile;