import { useState } from "react";

function PGStudents23() {
  const students = [
    {
      entryNo: "2023JCS2560",
      name: "Kundan Kumar",
    },
    {
      entryNo: "2023JCS2561",
      name: "Prince Gupta",
    },
    {
      entryNo: "2023JCS2564",
      name: "Prateek Bhaisora",
    },
    {
      entryNo: "2023JCS2565",
      name: "Anjali Singh",
    },
    {
      entryNo: "2023JCS2541",
      name: "Ranjul Bandyopadhyay",
    },
    {
      entryNo: "2023JCS2542",
      name: "Sharath Kumar Reddy Gandham",
    },
    {
      entryNo: "2023JCS2543",
      name: "Kundan",
    },
    {
      entryNo: "2023JCS2562",
      name: "Kunika Gupta (Part-Time)",
    },
    {
      entryNo: "2023JCS2563",
      name: "Sanya Kapoor (Part-Time)",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase();

    return (
      student.name.toLowerCase().includes(search) ||
      student.entryNo.toLowerCase().includes(search)
    );
  });

  return (
    <main className="pg-year-page">

      <section className="pg-year-heading">
        <h1>MTech Students 2023</h1>

        <div className="heading-line"></div>

        <p>
          Master of Technology students associated with the
          Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>
      </section>

      <section className="pg-student-section">

        <div className="pg-student-header">

          <div>
            <h2>MTech Students 2023</h2>
            <p>Academic Year 2023</p>
          </div>

          <span>
            {students.length} Students
          </span>

        </div>

        <div className="pg-search">

          <input
            type="text"
            placeholder="Search by name or entry number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <div className="pg-table-wrapper">

          <table className="pg-student-table">

            <thead>
              <tr>
                <th>Entry No.</th>
                <th>Student Name</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.length > 0 ? (

                filteredStudents.map((student) => (

                  <tr key={student.entryNo}>
                    <td>{student.entryNo}</td>
                    <td>{student.name}</td>
                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="2"
                    className="pg-no-result"
                  >
                    No students found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="pg-result-count">
          Showing {filteredStudents.length} of{" "}
          {students.length} students
        </div>

      </section>

    </main>
  );
}

export default PGStudents23;