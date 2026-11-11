function People() {
  const coordinators = [
    {
      image: "/assets/vireshwer.jpg",
      name: "Prof. Vireshwer Kumar",
      designation: "Coordinator",
      department: (
        <>
          Assistant Professor
          <br />
          Department of Computer Science & Engineering
        </>
      ),
    },
    {
      image: "/assets/harshan.png",
      name: "Dr. Harshan Jagadeesh",
      designation: "Co-Coordinator",
      department: (
        <>Assistant Proffesor
        <br/>
        "Department of Electrical Engineering",
   </>
      ),
    },
  ];

  const faculty = [
    {
      image: "/assets/panigrahi.jpg",
      name: "Prof. B. K. Panigrahi",
      designation: "Professor",
      department: "Department of Electrical Engineering",
    },
    {
      image: "/assets/ranjan bose.jpg",
      name: "Prof. Ranjan Bose",
      designation: "Professor",
      department: "Department of Electrical Engineering",
    },
    {
      image: "/assets/sanjiva.jpg",
      name: "Prof. Sanjiva Prasad",
      designation: "Professor",
      department: "Department of Computer Science & Engineering",
    },
    {
      image: "/assets/jaiswal.png",
      name: "Dr. Ragesh Jaiswal",
      designation: "Professor",
      department: "Department of Computer Science & Engineering",
    },
    
    {
      image: "/assets/ranjan sarangi.jpg",
      name: "Prof. Smruti Ranjan Sarangi",
      designation: "Professor",
      department: "Department of Computer Science & Engineering",
    },
    {
      image: "/assets/sharma.jpg",
      name: "Dr. Subodh Sharma",
      designation: "Associate Professor",
      department: "Department of Computer Science & Engineering",
    },
    {
      image: "/assets/mpgupta.png",
      name: "Prof. M. P. Gupta",
      designation: "Professor",
      department: "Department of Management Studies",
    },
    {
      image: "/assets/arpan.jpg",
      name: "Prof. Arpan Kumar Kar",
      designation: "Professor",
      department: "Department of Management Studies",
    },
    {
      image: "/assets/vigneswara.png",
      name: "Prof. P. Vigneswara Ilavarasan",
      designation: "Professor",
      department: "Department of Management Studies",
    },
    {
      image: "/assets/shankar.jpg",
      name: "Prof. Shankar Prakriya",
      designation: "Professor",
      department: "Department of Electrical Engineering",
    },
    {
  name: "Prof. Huzur Saran",
  designation: "Emeritus Professor",
  department: "Department of Computer Science & Engineering",
  image: "/assets/huzur.jpg",
},
{
  image: "/assets/suri.jpg",
  name: "Dr. Manan Suri",
  designation: "Professor",
  department: "Department of Electrical Engineering",
},
{
  image: "/assets/saif.jpg",
  name: "Dr. Saif K Mohammed",
  designation: "Professor",
  department: "Department of Electrical Engineering",
},
{
  image: "/assets/SP Singh.png",
  name: "Prof. S.P. Singh",
  designation: "Professor",
  department: "Department of Mechanical Engineering",
},
{
  image: "/assets/Priyanka.jpeg",
  name: "Dr. Priyanka Golia",
 designation: "Assistant Professor",
  department: "Department of Computer Science & Engineering",
 
},

{
  image: "/assets/Rajendra.jpg",
  name: "Dr. Rajendra Kumar",
 designation: "Assistant Professor",
  department: "Department of Computer Science & Engineering",
 
},
{
  
  image: "/assets/kolin.webp",
  name: "Prof. Kolin Paul",
  designation: "Professor",
  department: "Department of Computer Science & Engineering",
},
{
  name: "Dr. Piyush Kumar Sharma",
  image: "/assets/piyush.jpg",
  designation: "Assistant Professor",
  department: "Department of Computer Science & Engineering",
},
{
  name: "Dr. Vaishnavi Sundararajan",
  image: "/assets/vaishnavi.jpg",
  designation: "Assistant Professor",
  department: "Department of Computer Science & Engineering",
},
{
  name: "Prof. Ashok K Bhateja",
  image: "/assets/ashok.gif",
  designation: "Professor",
  department: "Department of Computer Science & Engineering",
},

{
  name: "Prof. Sorav Bansal",
  image: "/assets/sorav.jpg",
  designation: "Professor",
  department: "Department of Computer Science & Engineering",
},
{
  name: "Dr. Venkata Vivek Kumar Koppula",
  image: "/assets/venkata.jpg",
   designation: "Assistant Professor",
  department: "Department of Computer Science & Engineering",
 
},
{
name: "Prof. Suresh Bhalla",
  image: "/assets/bhalla.jpg",
   designation: "Professor",
  department: "Department of Civil Engineering",
},

{
name: "Dr. Hariprasad Kodamana",
  image: "/assets/HParsad.jpg",
  designation: "Associate Professor",
  department: " Department of Chemical Engineering",
},


{
name: "Prof. R. K. Sharma",
  image: "/assets/rksharma.jpg",
  designation: "Professor",
  department: " Department of Mathematics",
},

{
name: "Dr. Arpan Chattopadhyay",
  image: "/assets/arpanc.png",
   designation: "Associate Professor",
  department: "Department of Electrical Engineering",
},
  ];

  return (
    <main className="people-page">

      <section className="people-heading">
        <h1>Faculty</h1>

        <div className="heading-line"></div>

        <p>
          Meet the faculty members and researchers
          associated with the Center of Excellence
          in Cyber Systems and Information Assurance,
          IIT Delhi.
        </p>
      </section>

      <section className="people-section">

       <div className="faculty-section-title">
         Centre Coordinators
         </div>

        <div className="faculty-grid coordinator-grid">

          {coordinators.map((person, index) => (
            <div
              className="faculty-card coordinator-card"
              key={index}
            >
              <div className="photo-box">
                <img
                  src={person.image}
                  alt={person.name}
                />
              </div>

              <h3>{person.name}</h3>

              <p className="designation coordinator">
                {person.designation}
              </p>

              <p className="department">
                {person.department}
              </p>
<a
  href={
    index === 0
      ? "/faculty/vireshwer"
      : "/faculty/harshan-jagadeesh"
  }
  className="profile-btn"
>
  View Profile
</a>
            </div>
          ))}

        </div>

      </section>

      <section className="people-section">

     <div className="faculty-section-title">
      Faculty Members
       </div>
        <div className="faculty-grid">

          {faculty.map((person, index) => (
            <div
              className="faculty-card"
              key={index}
            >
              <div className="photo-box">
                <img
                  src={person.image}
                  alt={person.name}
                />
              </div>

              <h3>{person.name}</h3>

              <p className="designation">
                {person.designation}
              </p>

              <p className="department">
                {person.department}
              </p>
<a
  href={
    person.name === "Prof. Ranjan Bose"
      ? "/faculty/ranjan-bose"
      : person.name === "Prof. Smruti Ranjan Sarangi"
      ? "/faculty/smruti-sarangi"
      : person.name === "Prof. Huzur Saran"
      ? "/faculty/huzur-saran"
      : person.name === "Dr. Manan Suri"
      ? "/faculty/manan-suri"
      : person.name === "Prof. Shankar Prakriya"
      ? "/faculty/shankar-prakriya"
      : person.name === "Dr. Saif K Mohammed"
      ? "/faculty/saif-k-mohammed"
      : person.name === "Dr. Subodh Sharma"
      ? "/faculty/subodh-sharma"
      : person.name === "Dr. Ragesh Jaiswal"
      ? "/faculty/ragesh-jaiswal"
      : person.name === "Prof. Sanjiva Prasad"
      ? "/faculty/sanjiva-prasad"
      : person.name === "Prof. S.P. Singh"
      ? "/faculty/s-p-singh"
      : person.name === "Prof. M. P. Gupta"
      ? "/faculty/m-p-gupta"
      : person.name === "Prof. Arpan Kumar Kar"
      ? "/faculty/arpan-kumar-kar"
      : person.name === "Prof. P. Vigneswara Ilavarasan"
      ? "/faculty/p-vigneswara-ilavarasan"
      : person.name === "Prof. B. K. Panigrahi"
      ? "/faculty/b-k-panigrahi"
      : person.name === "Dr. Priyanka Golia"
      ? "/faculty/priyanka-golia"
      : person.name === "Dr. Rajendra Kumar"
      ? "/faculty/rajendra-kumar"
      : person.name === "Prof. Kolin Paul"
      ? "/faculty/kolin-paul"
      : person.name === "Dr. Piyush Kumar Sharma"
      ? "/faculty/piyush-kumar-sharma"
      : person.name === "Dr. Vaishnavi Sundararajan"
      ? "/faculty/vaishnavi-sundararajan"
      : person.name === "Prof. Ashok K Bhateja"
      ? "/faculty/ashok-k-bhateja"
      : person.name === "Prof. Sorav Bansal"
      ? "/faculty/sorav-bansal"
      : person.name === "Dr. Venkata Vivek Kumar Koppula"
      ? "/faculty/venkata-vivek-kumar-koppula"
      : person.name === "Prof. Suresh Bhalla"
      ? "/faculty/suresh-bhalla"
      : person.name === "Dr. Hariprasad Kodamana"
      ? "/faculty/hariprasad-kodamana"
      : person.name === "Prof. R. K. Sharma"
      ? "/faculty/r-k-sharma"
       : person.name === "Dr. Arpan Chattopadhyay"
      ? "/faculty/arpan-chattopadhyay"
      : "#"
  }
  className="profile-btn"
>
  View Profile
</a>
            </div>
          ))}

        </div>

      </section>
    
       {/* =================================================
          VISITING FACULTY
      ================================================= */}

      <section className="people-section">
<div className="visiting-section-title">
  Visiting Faculty
</div>

        <div className="faculty-grid coordinator-grid">

          {/* Anupam Joshi */}
          <div className="faculty-card">

            <div className="photo-box">
              <img
                src="/assets/anupam.jpg"
                alt="Dr. Anupam Joshi"
              />
            </div>

            <h3>Dr. Anupam Joshi</h3>

            <p className="designation">
              Visiting Staff
            </p>

            <p className="department">
              Department of Computer Science & Electrical Engineering,
              <br/>
              University of Maryland, Baltimore County
            </p>

            <a
              href="/visiting-staff/anupam-joshi"
              className="profile-btn"
            >
              View Profile
            </a>

          </div>


          {/* Karuna Joshi */}
          <div className="faculty-card">

            <div className="photo-box">
              <img
                src="/assets/karuna.jpg"
                alt="Dr. Karuna Pande Joshi"
              />
            </div>

            <h3>Dr. Karuna Pande Joshi</h3>

            <p className="designation">
              Visiting Staff
            </p>

            <p className="department">
              Department of Computer Science & Electrical Engineering,
              <br/>
              University of Maryland, Baltimore County
            </p>

            <a
              href="/visiting-staff/karuna-pande-joshi"
              className="profile-btn"
            >
              View Profile
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default People;