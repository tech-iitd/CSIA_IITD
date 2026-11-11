import { useState } from "react";

function PGStudents25() {
  const students = [
    {
      entryNo: "2025JCS2015",
      name: "Hrishikesh Bhat P",
    },
    {
      entryNo: "2025JCS2016",
      name: "Saikat Singha Roy",
    },
    {
      entryNo: "2025JCS2058",
      name: "Riya Singh",
    },
    {
      entryNo: "2025JCS2059",
      name: "Anmol Siwal",
    },
    {
      entryNo: "2025JCS2060",
      name: "Anish Samir Patankar",
    },
    {
      entryNo: "2025JCS2501",
      name: "Sarthak Thapliyal",
    },
    {
      entryNo: "2025JCS2502",
      name: "Dipan Mondal",
    },
    {
      entryNo: "2025JCS2503",
      name: "Gaurav Rajesh Singh",
    },
    {
      entryNo: "2025JCS2505",
      name: "Keeratpreet Singh",
    },
    {
      entryNo: "2025JCS2506",
      name: "Divyanshi Gayakwad",
    },
    {
      entryNo: "2025JCS2507",
      name: "Abhishek Gupta",
    },
    {
      entryNo: "2025JCS2735",
      name: "Dhruv Mishra",
    },
    {
      entryNo: "2025JCS2736",
      name: "Gundeti Anil Kumar",
    },
    {
      entryNo: "2025JCS2810",
      name: "Charan Pyata",
    },
    {
      entryNo: "2025JCS2838",
      name: "Urvesh Gautambhai Savaj",
    },
    {
      entryNo: "2025JCS2886",
      name: "Vedant Ankush Karande",
    },
    {
      entryNo: "2025JCS2061",
      name: "Ruturaj Kamalakar Pol",
    },
    {
      entryNo: "2025JCS2062",
      name: "Himanshu Singh",
    },
    {
      entryNo: "2025JCS2504",
      name: "Ayush Sonkar",
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

      {/* PAGE HEADING */}
      <section className="pg-year-heading">

        <h1>MTech Students 2025</h1>

        <div className="heading-line"></div>

        <p>
          Master of Technology students associated with the
          Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>

      </section>


      {/* STUDENT SECTION */}
      <section className="pg-student-section">

        <div className="pg-student-header">

          <div>
            <h2>MTech Students 2025</h2>

            <p>Academic Year 2025</p>
          </div>

          <span>
            {students.length} Students
          </span>

        </div>


        {/* SEARCH */}
        <div className="pg-search">

          <input
            type="text"
            placeholder="Search by name or entry number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>


        {/* TABLE */}
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


        {/* RESULT COUNT */}
        <div className="pg-result-count">

          Showing {filteredStudents.length} of{" "}
          {students.length} students

        </div>

      </section>

    </main>
  );
}

export default PGStudents25;