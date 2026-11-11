function AshokProfile() {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img
          src="/assets/ashok.gif"
          alt="Prof. Ashok K Bhateja"
        />

        <div className="faculty-intro">
          <h2>Prof. Ashok K Bhateja</h2>

           <p className="designation">
                Professor
            </p>
          <p className="office">
           <i className="fa-solid fa-location-dot" aria-hidden="true" /> Amarnath and Shashi Khosla School Of Information Technology, IIT Delhi
          </p>

          <p className="email">
            <a href="mailto:akbhateja@cse.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> akbhateja@cse.iitd.ac.in
            </a>
          </p>

          <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659-6028
          </p>
        </div>
      </div>
    </main>
  );
}

export default AshokProfile;