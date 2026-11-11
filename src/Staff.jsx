function Staff() {
  const staff = [
    {
      name: "Geet Gunjan",
      designation: "Project Assistant (Admin)",
      email: "geetg.cstaff@cse.iitd.ac.in",
      phone: "+91 (11) 2659 7310",
      image: "/assets/geet.jpg",
    },
  ];

  return (
    <main className="staff-page">

      <section className="staff-heading">
        <h1>Staff</h1>

        <div className="heading-line"></div>

        <p>
          Administrative and support staff associated with
          the Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>
      </section>


      <section className="staff-section">

        <div className="staff-grid">

          {staff.map((person, index) => (
            <div className="staff-card" key={index}>


              <div className="staff-photo">
                <img
      src={person.image}
      alt={person.name}
    />
  </div>

  <h2>{person.name}</h2>

  <p className="staff-designation">
    {person.designation}
  </p>

  <div className="staff-contact">

    <p>
      <span>📧</span>
      <a href={`mailto:${person.email}`}>
        {person.email}
      </a>
    </p>

    <p>
      <span>☎️</span>
      {person.phone} 
    </p>

        </div>

          </div>
            
          )
          )
          }

        </div>

      </section>

    </main>
  );
}

export default Staff;