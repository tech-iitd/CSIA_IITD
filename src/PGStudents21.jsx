import { useState } from "react";

function PGStudents21() {
  const students = [
    { entryNo: "2021JCS2232", name: "Abhishek Kumar" },
    { entryNo: "2021JCS2234", name: "Aman Maheshwari" },
    { entryNo: "2021JCS2235", name: "Animesh Singh Parihar" },
    { entryNo: "2021JCS2238", name: "Gaurav Yadav" },
    { entryNo: "2021JCS2239", name: "Gundapu Nitheesh" },
    { entryNo: "2021JCS2240", name: "Kashish Jain" },
    { entryNo: "2021JCS2259", name: "Kashish Jain" },
    { entryNo: "2021JCS2242", name: "Nutesh Kumar Sahu" },
    { entryNo: "2021JCS2260", name: "Ritik Jain" },
    { entryNo: "2021JCS2243", name: "Roomman Israili" },
    { entryNo: "2021JCS2244", name: "Sarang Liladhar Drugkar" },
    { entryNo: "2021JCS2387", name: "Suraj Kiran Mate" },
    { entryNo: "2021JCS2245", name: "Tooba Khan" },
    { entryNo: "2021JCS2233", name: "Abhishek Safui (Part-Time)" },
    { entryNo: "2021JCS2236", name: "Avishek Arora (Part-Time)" },
    { entryNo: "2021JCS2241", name: "Mahima Grover (Part-Time)" },
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
        <h1>MTech Students 2021</h1>

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
            <h2>MTech Students 2021</h2>
            <p>Academic Year 2021</p>
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

export default PGStudents21;