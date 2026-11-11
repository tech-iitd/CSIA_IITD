function NiladriProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/niladri.png" 
        alt="Prof. Niladri Chatterjee" />

        <div className="faculty-intro">
          <h2>Prof. Niladri Chatterjee</h2>

          <p className="designation">Professor</p>

          <p className="research">
           Machine Translation, Artificial Intelligence, 
           Reasoning, Statistical Modelling and Semantic Web.
          </p>


          <p className="email">
            <a href="mailto:niladri@math.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> niladri@math.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> 01126591490
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Room: MZ-199, Department of Mathematics
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~niladri/"
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

export default NiladriProfile;