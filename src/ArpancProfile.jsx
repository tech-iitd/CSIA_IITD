function ArpancProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/arpanc.png"
          alt="Dr. Arpan Chattopadhyay"
        />

        <div className="faculty-intro">
            <h2>Dr. Arpan Chattopadhyay</h2>

            <p className="designation">
               Associate Professor
            </p>

        <p className="research">
       wireless communication, signal processing and theoretical machine learning.
        </p>

          <p className="email">
            <a href="mailto:arpanc@ee.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> arpanc@ee.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-1137
          </p>

          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" />   Room III/B-3, 

                 Block-III, 
          </p>

          <p className="website">
            <a
              href="https://sites.google.com/site/arpanchattop/"
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

export default ArpancProfile;