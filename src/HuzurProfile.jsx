function HuzurProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/huzur.jpg"
          alt="Prof. Huzur Saran"
        />

        <div className="faculty-intro">
          <h2>Prof. Huzur Saran</h2>

          <p className="designation">
            Emeritus Professor
          </p>

          <p className="research">
            High Speed Networks, Graph Theory, Algorithms
          </p>

          <p className="email">
            <a href="mailto:saran@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> saran@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1290
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Bharti 430
          </p>

          <p className="website">
            <a
              href="http://www.cse.iitd.ernet.in/~saran"
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

export default HuzurProfile;