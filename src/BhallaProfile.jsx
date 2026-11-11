function BhallaProfile()
 {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/bhalla.jpg" 
        alt="Prof. Suresh Bhalla" />
      
      <div className="faculty-intro">
          <h2>Prof. Suresh Bhalla</h2>

          <p className="designation">Professor</p>

          <p className="research">
           Smart Material and Structures, Structural Health Monitoring,
            Non-Destructive Evaluation, 
           Bio-Mechanics, Engineered Bamboo Structures
          </p>
          <p className="email">
            <a href="mailto: sbhalla@civil.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> sbhalla@civil.iitd.ac.in
            </a>
          </p>
            <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1040
            </p>
            <p className="office">
              Block IV, Room No. 213
              Department of Civil Engineering
            </p>
            <p className="website">
              <a
                href="https://web.iitd.ac.in/~sbhalla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Faculty Website
              </a>
            </p>
          </div>
        </div>
        </main>
      );
    }
export default BhallaProfile;