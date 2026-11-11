function AdmissionResults() {
  const currentAdmission = {
    year: "2026–27",
    title: "Interdisciplinary M.Tech in Cyber Security",
    subtitle: "Semester-I Admissions",

    details: [
      "Admission Process Details for Academic Session 2026–2027.",
      "Online application process commenced on 21st March 2026 at 12 Noon.",
      "Last date for online application with fees was 11th April 2026 at 4:00 PM.",
    ],

    links: [
      {
        text: "Shortlisting Criteria",
        url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/ctrt7m4owHgLJz4",
       
      },
    ],
  };

  const previousAdmissions = [
    {
      year: "2025–26",
      status: "Previous Admission",
      details: [
        "Admission to the Cybersecurity M.Tech full-time program was based on GATE score.",
        "No interview/test was conducted.",
      ],
      links: [
        {
          text: "Full-Time Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/CTziiNmTgQiaXbd",
        },
        {
          text: "Part-Time / Sponsored",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/tzgZgFb6jwacofP",
        },
      ],
      note:
        "Shortlisting does not imply selection. Selection was based on GATE score.",
    },

    {
      year: "2024–25",
      status: "Previous Admission",
      details: [
        "Admission to the Cybersecurity M.Tech full-time program was based on GATE score.",
        "IIT BTech candidates with CGPA ≥ 8.0 who were exempted from qualifying GATE were selected based on interview.",
      ],
      links: [
        {
          text: "Full-Time Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/AZTMPApotW2qyqk",
        },
        {
          text: "IIT BTech Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/GW85wLASsTrcaZ5",
        },
        {
          text: "Part-Time / Sponsored / International",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/CMz6rnPAsf5HZ4K",
        },
        {
          text: "Part-Time Result",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/MJtoi83dbRpGg4N",
        },
        {
          text: "International Candidates Result",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/Jem2rkweyCEBXBC",
        },
      ],
      note:
        "Online interviews for Part-Time/Sponsored Candidates and International Candidates were conducted on 22 May 2024.",
    },

    {
      year: "2023–24",
      status: "Previous Admission",
      details: [
        "List of shortlisted candidates for the M.Tech(JCS) program for the interview.",
        "Online interviews were conducted on 19th and 20th May 2023.",
      ],
      links: [
        {
          text: "Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/ZxkTCGG5iaog8oK",
        },
        {
          text: "Interview Schedule",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/LDsdxFfrbES3ngc",
        },
      ],
      note: "Shortlisting does not imply selection.",
    },

    {
      year: "2022–23",
      status: "Previous Admission",
      details: [
        "List of shortlisted candidates for the M.Tech(JCS) program for the interview.",
        "Interviews were conducted on 23rd and 24th May 2022.",
      ],
      links: [
        {
          text: "Shortlisting Criteria",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/boFRSKZXwQi78Da",
        },
        {
          text: "Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/SHc5MrMkFCGxiDe",
        },
        {
          text: "Foreign Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/ZT9bqJ75kEMtJ7c",
        },
        {
          text: "Interview Schedule",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/XSBjdLyom53bE6w",
        },
      ],
    },

    {
      year: "2021–22",
      status: "Previous Admission",
      details: [
        "List of shortlisted Part-Time M.Tech(JCS) candidates for the interview.",
        "List of shortlisted Foreign Candidates.",
        "Provisionally selected candidates subject to document verification and Dean approval.",
      ],
      links: [
        {
          text: "Part-Time Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/KYeN8CmzxAYPycg",
        },
        {
          text: "Foreign Shortlisted Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/7nMMSY8PK6ya66m",
        },
        {
          text: "Full-Time Selected Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/KDW2NSqewzKTsdT",
        },
        {
          text: "Part-Time Selected Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/jBJQWjwtfTWL8Wn",
        },
        {
          text: "Foreign Candidates",
          url: "https://owncloud.iitd.ac.in/nextcloud/index.php/s/kHkPMPB9f3DnSAW",
        },
      ],
      note:
        "Selected candidates were subject to document verification and Dean approval.",
    },
  ];

  return (
    <main className="admission-result-page">

      {/* HERO */}
      <section className="admission-result-hero">

        <div className="admission-hero-overlay">

          <span className="admission-hero-label">
            ACADEMIC · ADMISSIONS
          </span>

          <h1>Admission Results</h1>

          <div className="admission-hero-line"></div>

          <p>
            Interdisciplinary M.Tech in Cyber Security (JCS)
          </p>

        </div>

      </section>


      {/* CURRENT 2026–27 */}
      <section className="current-admission-section">

        <div className="admission-section-heading">

          <span>2026–27 · CURRENT ADMISSION</span>

          <h2>Admission Process</h2>

          <p>
            Interdisciplinary M.Tech in Cyber Security (JCS)
          </p>

        </div>


        <div className="current-admission-card">

          <div className="current-admission-year">

            <small>SESSION</small>

            <strong>2026</strong>

            <span>– 27</span>

          </div>


          <div className="current-admission-content">

            <div className="current-admission-top">

              <div>

                <span className="live-badge">
                  CURRENT
                </span>

                <h3>
                  {currentAdmission.title}
                </h3>

                <p className="current-subtitle">
                  {currentAdmission.subtitle}
                </p>

              </div>

            </div>


            <div className="admission-information">

              {currentAdmission.details.map((detail, index) => (

                <div
                  className="admission-info-row"
                  key={index}
                >

                  <i className="fa-solid fa-circle-check"></i>

                  <span>{detail}</span>

                </div>

              ))}

            </div>


            <div className="current-admission-actions">

              {currentAdmission.links.map((link, index) => (

                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-admission-button"
                >

                  {link.text}

                  <i className="fa-solid fa-arrow-up-right-from-square"></i>

                </a>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ARCHIVE */}
      <section className="admission-archive-section">

        <div className="admission-section-heading archive-heading">

          <span>ADMISSION ARCHIVE</span>

          <h2>Previous Admissions</h2>

          <p>
            Admission updates, shortlisted candidates and results
            for previous academic sessions.
          </p>

        </div>


        <div className="admission-archive">

          {previousAdmissions.map((admission, index) => (

            <article
              className="archive-row"
              key={index}
            >

              <div className="archive-year">

                <strong>{admission.year}</strong>

                <span>{admission.status}</span>

              </div>


              <div className="archive-content">

                <h3>
                  Interdisciplinary M.Tech in Cyber Security (JCS)
                </h3>


                <ul>

                  {admission.details.map((detail, i) => (

                    <li key={i}>
                      {detail}
                    </li>

                  ))}

                </ul>


                <div className="archive-links">

                  {admission.links.map((link, i) => (

                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >

                      {link.text}

                      <i className="fa-solid fa-arrow-up-right-from-square"></i>

                    </a>

                  ))}

                </div>


                {admission.note && (

                  <div className="archive-note">

                    <i className="fa-solid fa-circle-info"></i>

                    <span>{admission.note}</span>

                  </div>

                )}

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* CONTACT */}
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

          <a href="tel:0112659 7310/6061">

            <i className="fa-solid fa-phone"></i>

            <span>011-2659 7310/6061</span>

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

export default AdmissionResults;
