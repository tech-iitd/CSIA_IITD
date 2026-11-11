import { useState } from "react";

function PGStudents26() {
  const students = [
    {
      entryNo: "2026JCS2019",
      name: "Aditya Jain",
    },
    {
      entryNo: "2026JCS2020",
      name: "Amisha Sagar",
    },
    {
      entryNo: "2026JCS2022",
      name: "Abhay Raj Palande",
    },
    {
      entryNo: "2026JCS2023",
      name: "Abhiram Yallabandi",
    },
    {
      entryNo: "2026JCS2024",
      name: "Adeem Haris",
    },
    {
      entryNo: "2026JCS2588",
      name: "Pavan Sabavath",
    },
    {
      entryNo: "2026JCS2589",
      name: "Prabhat Verma",
    },
    {
      entryNo: "2026JCS2591",
      name: "Kartik",
    },
    {
      entryNo: "2026JCS2592",
      name: "Millind Raj Patro",
    },
    {
      entryNo: "2026JCS2593",
      name: "Keerthi Priya Badri",
    },
    {
      entryNo: "2026JCS2594",
      name: "Shashwat Ranjan Nayak",
    },
    {
      entryNo: "2026JCS2595",
      name: "Sneha Jajodia",
    },
    {
      entryNo: "2026JCS2596",
      name: "Priyansh Parsai",
    },
    {
      entryNo: "2026JCS2597",
      name: "Tusshar Raj Kashyap",
    },
    {
      entryNo: "2026JCS2598",
      name: "Nehal Choudhury",
    },
    {
      entryNo: "2026JCS2691",
      name: "R C Vinayak",
    },
    {
      entryNo: "2026JCS2692",
      name: "Gaurav Negi",
    },
    {
      entryNo: "2026JCS2762",
      name: "Tushar Kanti",
    },
    {
      entryNo: "2026JCS2765",
      name: "Vraj Kirit Nasit",
    },
    {
      entryNo: "2026JCS2766",
      name: "Chinmoy Das",
    },
    {
      entryNo: "2026JCS2805",
      name: "Darshan Karma",
    },
    {
      entryNo: "2026JCS2818",
      name: "Prince Chaudhary",
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

        <h1>MTech Students 2026</h1>

        <div className="heading-line"></div>

        <p>
          Master of Technology students associated with the
          Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>

      </section>


      {/* STUDENT LIST */}
      <section className="pg-student-section">

        <div className="pg-student-header">

          <div>
            <h2>MTech Students 2026</h2>

            <p>
              Academic Year 2026
            </p>
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

                    <td>
                      {student.entryNo}
                    </td>

                    <td>
                      {student.name}
                    </td>

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

export default PGStudents26;