import { useState } from "react";

function PGStudents22() {
  const students = [
    { entryNo: "2022JCS2655", name: "Suryakant Shukla" },
    { entryNo: "2022JCS2656", name: "Ritesh Srivastava" },
    { entryNo: "2022JCS2657", name: "Kshitij Kotasthane" },
    { entryNo: "2022JCS2658", name: "Debanshi Neog" },
    { entryNo: "2022JCS2659", name: "Ravi Ranjan Singh" },
    { entryNo: "2022JCS2660", name: "Sai Kiran Donkana" },
    { entryNo: "2022JCS2663", name: "Soham Nag" },
    { entryNo: "2022JCS2665", name: "Abhishek Singh" },
    { entryNo: "2022JCS2666", name: "Saurabh Patel" },
    { entryNo: "2022JCS2667", name: "Jayant Mishra" },
    { entryNo: "2022JCS2668", name: "Shouvik Bhattacharya" },
    { entryNo: "2022JCS2669", name: "Arihant Jammar" },
    { entryNo: "2022JCS2670", name: "Tarun Chauhan" },
    { entryNo: "2022JCS2661", name: "Shavinu Garg (Part-Time)" },
    { entryNo: "2022JCS2662", name: "T. Santhosh (Part-Time)" },
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
        <h1>MTech Students 2022</h1>

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
            <h2>MTech Students 2022</h2>
            <p>Academic Year 2022</p>
          </div>

          <span>{students.length} Students</span>
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
                  <td colSpan="2" className="pg-no-result">
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

export default PGStudents22;