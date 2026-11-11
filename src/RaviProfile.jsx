function RaviProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/ravi.jpg"
          alt="Prof. Ravi Shankar"
        />

        <div className="faculty-intro">
            <h2>Prof. Ravi Shankar</h2>

            <p className="designation">
                Professor
            </p>

        <p className="research">
      
Areas of interest: Operations and Supply Chain Management,
 Decision Sciences, Business Analytics & Big Data, 
 Project Management, Total Quality Management & Six Sigma, 
 Sustainable Freight Transportation,
 Strategic Technology Management, etc.
        </p>

       
          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Department of Management Studies, IIT Delhi
          </p>

          <p className="website">
            <a
              href="https://web.iitd.ac.in/~ravi1//"
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

export default RaviProfile;