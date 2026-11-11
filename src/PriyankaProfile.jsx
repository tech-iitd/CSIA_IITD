function PriyankaProfile() {
  return (
    <main className="faculty-profile-page">
        <div className="faculty-img">
          <img
            src="/assets/Priyanka.jpeg"
            alt="Dr. Priyanka Golia"
          />

        <div className="faculty-intro">
          <h2>Dr. Priyanka Golia</h2>

         <p className="designation">
         Assistant Professor
        </p>
          

          <p className="research">
            Formal Methods and Artificial Intelligence
          </p>

          <p className="email">
        
            <a href="mailto:pgolia@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> pgolia@cse.iitd.ac.in
            </a>
            </p>

            <p className="phone">
              +91 (11) 2659 1288
          </p>

              <p className="office">
             <i className="fa-solid fa-location-dot" aria-hidden="true" /> Bharti 415
          </p>

          <p className="website">
            <a
              href="https://priyanka-golia.github.io/"
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

export default PriyankaProfile;