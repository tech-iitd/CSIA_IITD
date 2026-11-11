
function BhimProfile()
 {
  return (
    <main className="faculty-profile-page">
      <div className="faculty-img">
        <img src="/assets/bhim.jpg" 
        alt="Prof. Bhim Singh" />
      
      <div className="faculty-intro">
          <h2>Prof. Bhim Singh</h2>

          <p className="designation">Honorary Professor</p>

          <p className="research">
          Power Electronics, Electrical Machines and Drives, HVDC,
           FACTS, Power Quality, Renewable Energy, DSP Based Control of Power Converter and Drive.
          </p>
          <p className="email">
            <a href="mailto: bsingh@ee.iitd.ac.in">
              <i className="fa-solid fa-envelope" aria-hidden="true" /> bsingh@ee.iitd.ac.in
            </a>
          </p>
            <p className="phone">
            <i className="fa-solid fa-phone" aria-hidden="true" /> +91 (11) 2659 1045
            </p>
          
          </div>
        </div>
        </main>
      );
    }
export default BhimProfile;