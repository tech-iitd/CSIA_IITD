function PGStudents() {
  const years = [
    {
      year: "2026",
      students: 22,
      link: "/pg-students/2026",
    },
    {
      year: "2025",
      students: 19,
      link: "/pg-students/2025",
    },
    {
      year: "2024",
      students: 18,
      link: "/pg-students/2024",
    },
    {
      year: "2023",
      students: 9,
      link: "/pg-students/2023",
    },
    {
      year: "2022",
      students: 15,
      link: "/pg-students/2022",
    },
    {
      year: "2021",
      students: 16,
      link: "/pg-students/2021",
    },
  ];

  return (
    <main className="pg-page">

      {/* PAGE HEADING */}
      <section className="pg-heading">

        <h1>MTech Students</h1>

        <div className="heading-line"></div>

        <p>
          Master of Technology students associated with the
          Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>

      </section>


      {/* YEAR CARDS */}
      <section className="pg-years">

        <div className="pg-year-grid">

          {years.map((item) => (

            <a
              key={item.year}
              href={item.link}
              className="pg-year-card"
            >

              <div className="pg-year-icon">
                {item.year}
              </div>

              <h2>
                MTech Students {item.year}
              </h2>

              <p>
                {item.students} Students
              </p>

              <span>
                View Students →
              </span>

            </a>

          ))}

        </div>

      </section>

    </main>
  );
}

export default PGStudents;