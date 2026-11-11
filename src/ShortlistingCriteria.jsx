function ShortlistingCriteria() {
  const currentCriteria = [
    {
      number: "01",
      title: "M.Tech (Full-Time)",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/ctrt7m4owHgLJz4",
    },
    {
      number: "02",
      title:
        "M.Tech (Full-Time) (Self Sponsored without Assistantship)",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/je5nBnrgcmAEKK5",
    },
    {
      number: "03",
      title:
        "M.Tech (Part-Time) and Sponsored (Full-Time)",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/CEW4WyiMDccq8Nb",
    },
    {
      number: "04",
      title: "M.Tech (Foreign National)",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/JcXLQjg6NdYGtBF",
    },
    {
      number: "05",
      title: "M.Tech (ICCR - Foreign National)",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/EAm45xakJYbbiaC",
    },
  ];

  const previousYears = [
    {
      year: "2025–26",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/3fKgLEXbEbbydg8",
      label: "Shortlisting Criteria",
    },
    {
      year: "2024–25",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/RRWTJHkWrdec8zR",
      label: "Shortlisting Criteria (Revised)",
    },
    {
      year: "2023-24",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/pxFtBqrr5fFpACR",
      label: "Shortlisting Criteria",
    },
    {
      year: "2022-23",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/boFRSKZXwQi78Da",
      label: "Shortlisting Criteria",
    },
    {
      year: "2021–22",
      url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/NMRBt664WcSECrj",
      label: "Shortlisting Criteria",
    },
  ];

  const importantNote = (
    <p>
      The performance measures (Percentage or CGPA) will be considered
      only as per the grade sheet provided by the Institute/University.
      No Conversion from CGPA to percentage or vice-versa by the
      candidate or his/her institute will be entertained.
    </p>
  );

  return (
    <main className="shortlisting-page">

      {/* Header */}
      <section className="shortlisting-hero">
        <span>ACADEMIC · ADMISSIONS</span>

        <h1>Interdisciplinary M.Tech in Cyber Security</h1>

        <div className="shortlisting-line"></div>

        <p>
          Shortlisting Criteria for the Interdisciplinary
          M.Tech in Cyber Security (JCS), IIT Delhi.
        </p>
      </section>

      {/* Current Year */}
      <section className="shortlisting-section">

      <div className="shortlisting-heading current-heading">
  <span className="section-tag">CURRENT ADMISSIONS · 2026-27</span>

  <h2>Semester-I Admissions</h2>

  <p>
    Interdisciplinary M.Tech in Cyber Security (JCS)
  </p>
</div>

        <div className="criteria-grid">

          {currentCriteria.map((item) => (
            <a
              key={item.number}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="criteria-card"
            >
              <div className="criteria-number">
                {item.number}
              </div>

              <div className="criteria-content">
                <h3>{item.title}</h3>

                <span>
                  View Shortlisting Criteria
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </div>

              <div className="criteria-arrow">
                ↗
              </div>
            </a>
          ))}

        </div>

        <div className="important-note">
          <div className="note-icon">
            <i className="fa-solid fa-circle-info"></i>
          </div>

          <div>
            <h3>Important</h3>
            {importantNote}
          </div>
        </div>

      </section>

      {/* Previous Years */}
      <section className="shortlisting-section archive-section">

        <div className="shortlisting-heading">
          <span className="section-tag">ADMISSIONS ARCHIVE</span>

          <h2>Previous Years</h2>

          <p>
            Interdisciplinary M.Tech in Cyber Security (JCS)
            shortlisting criteria.
          </p>
        </div>

        <div className="year-list">

          {previousYears.map((item) => (
            <div
              className="year-card"
              key={item.year}
            >
              <div className="year-number">
                {item.year}
              </div>

              <div className="year-content">
                <h3>
                  Interdisciplinary M.Tech in Cyber Security (JCS)
                </h3>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}

        </div>

        <div className="important-note">
          <div className="note-icon">
            <i className="fa-solid fa-circle-info"></i>
          </div>

          <div>
            <h3>Important</h3>
            {importantNote}
          </div>
        </div>

      </section>

      {/* Contact */}
      <section className="admission-contact">

        <div className="admission-contact-text">
          <span>ADMISSION-RELATED QUERIES</span>

          <h2>Need more information?</h2>

          <p>
            Please contact the CoE-CSIA office for
            admission-related queries.
          </p>
        </div>

        <div className="admission-contact-details">

          <a href="tel:+911126597351">
            <i className="fa-solid fa-phone"></i>
            <span>011-2659 7351/6061</span>
          </a>

          <a href="mailto:eoacsia@admin.iitd.ac.in">
            <i className="fa-solid fa-envelope"></i>
            <span>eoacsia@admin.iitd.ac.in</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default ShortlistingCriteria;
