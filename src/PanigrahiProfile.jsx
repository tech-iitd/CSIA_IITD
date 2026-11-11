function PanigrahiProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/panigrahi.jpg"
          alt="Prof. B.K. Panigrahi"
        />

        <div className="faculty-intro">
            <h2>Prof. B.K. Panigrahi</h2>

            <p className="designation">
                Professor
            </p>

        <p className="research">
      
Power Quality,FACTS Devices,Power System Protection
Machine Learning, AI Application to Power Systems
        </p>
<p className="email">
            <a href="mailto:bkpanigrahi@ee.iitd.ac.in">
                <i className="fa-solid fa-envelope" aria-hidden="true" /> bkpanigrahi@ee.iitd.ac.in
            </a>
</p>
       <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-1078
       </p>
          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Electrical Engineering, IIT Delhi
          </p>

          <p className="website">
            <a
              href="https://ctech.iitd.ac.in/bkpanigrahi.html"
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

export default PanigrahiProfile;