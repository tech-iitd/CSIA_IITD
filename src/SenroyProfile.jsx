function SenroyProfile() {
    return (
        <main className="faculty-profile-page">
            <div className="faculty-img">
          <img
                    src="/assets/senroy.jpg"
                    alt="Prof. Nilanjan Senroy"
              />

        <div className="faculty-intro">
                <h2>Prof. Nilanjan Senroy</h2>

               <p className="designation">
               Professor

           </p>

         <p className="research">
                        Power system stability and control, Wide area measurement and control, 
                        Statistical techniques in power systems, Power quality
           </p>
          <p className="email">
                  <a href="mailto:nsenroy@ee.iitd.ac.in">
                      <i className="fa-solid fa-envelope" aria-hidden="true" /> nsenroy@ee.iitd.ac.in
                  </a>
          </p>
             <p className="phone">
                      +91 (11) 2659-7016
              </p>

                <p className="office">
                   I sit in Room II-103, IIT Delhi
            </p>

            <p className="website">
              <a
                      href="https://web.iitd.ac.in/~nsenroy/"
                      target="_blank"
                      rel="noreferrer">
                                
                   <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Faculty Website
            </a>
         </p>
      </div>
    </div>
        </main>
      );
    }

    export default SenroyProfile;