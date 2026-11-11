import { useState } from "react";

function PGStudents24() {
  const students = [
    {
      entryNo: "2024JCS2041",
      name: "Arindam Sal",
    },
    {
      entryNo: "2024JCS2043",
      name: "Jitesh Vivek Shamdasani",
    },
    {
      entryNo: "2024JCS2611",
      name: "Nikhil Gupta",
    },
    {
      entryNo: "2024JCS2046",
      name: "Abhiya M Jose",
    },
    {
      entryNo: "2024JCS2039",
      name: "Satej Shripad Bhave",
    },
    {
      entryNo: "2024JCS2049",
      name: "Anand Sharma",
    },
    {
      entryNo: "2024JCS2037",
      name: "Phaneesh R Katti",
    },
    {
      entryNo: "2024JCS2040",
      name: "Vaddi Jhancy",
    },
    {
      entryNo: "2024JCS2044",
      name: "Surajprakash Narwariya",
    },
    {
      entryNo: "2024JCS2613",
      name: "Vikas Pandey",
    },
    {
      entryNo: "2024JCS2610",
      name: "Aquif Reza Mir",
    },
    {
      entryNo: "2024JCS2048",
      name: "Ayan Shil",
    },
    {
      entryNo: "2024JCS2042",
      name: "Rohit Patidar",
    },
    {
      entryNo: "2024JCS2047",
      name: "Abhishek Kumar Gupta",
    },
    {
      entryNo: "2024JCS2045",
      name: "Rajesh Reddy M",
    },
    {
      entryNo: "2024JCS2038",
      name: "Sambit Paul",
    },
    {
      entryNo: "2024JCS2612",
      name: "Ritik",
    },
    {
      entryNo: "2024JCS2802",
      name: "Aastha Jain (Part-Time)",
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
        <h1>MTech Students 2024</h1>

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
            <h2>MTech Students 2024</h2>
            <p>Academic Year 2024</p>
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

export default PGStudents24;