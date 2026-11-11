function JaiswalProfile() 
{
  return (
    <div className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/jaiswal.png"
          alt="Dr. Ragesh Jaiswal"
        />
        <div className="faculty-intro">
          <h2>Dr. Ragesh Jaiswal</h2>
          <p className="designation">
             Professor
          </p>
          <p className="research">
          Algorithms, Complexity, Theoretical Cryptography and Machine Learning.
          </p>
          <p className="email">
            <a href="mailto:rjaiswal@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> rjaiswal@cse.iitd.ac.in
            </a>
          </p>
          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 6016
          </p>
          <p className="office">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> Room 403, SIT Building,
          </p>
          <p className="website">
            <a
              href="https://www.cse.iitd.ac.in/~rjaiswal/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Faculty Website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JaiswalProfile;