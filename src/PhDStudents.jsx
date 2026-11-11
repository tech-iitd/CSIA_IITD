function PhDStudents() {
  const scholars = [
    {
      image: "/assets/khyati.jpg",
      name: "Khyati Chopra",
      designation: "Ph.D. Scholar",
      email: "khyatichopra134@gmail.com",
      research:
        "Security using Game Theoretic Approaches in Mobile Network.",
    },
    {
      image: "/assets/Sandeep.jpg",
      name: "Sandeep Kumar Singh",
      designation: "Ph.D. Scholar",
      email: "sandeepsingh012@gmail.com",
      research:
        "Cyber Security of the Smart Grid and Advanced Metering Infrastructure.",
    },
    {
      image: "/assets/mustafa.jpg",
      name: "Syed Ziaul Mustafa",
      designation: "Ph.D. Scholar",
      email: "mustafa.ziaul@gmail.com",
      research:
        "Information Risk for Digital Services in Smart Cities.",
    },
    {
      image: "/assets/sheshadri.jpg",
      name: "Sheshadri Chatterjee",
      designation: "Ph.D. Scholar",
      email: "sheshadri.chatterjee@gmail.com",
      research:
        "A study of Privacy and Security issues for Web Enablement/E-commerce in India",
    },
    {
      image: "/assets/sonam.jpg",
      name: "Sonam Jain",
      designation: "Ph.D. Scholar",
      email: "sonamjain1991jan@gmail.com",
      research:
        "Secrecy using Rateless Codes.",
    },
    {
      image: "/assets/samuel.png",
      name: "Samuel Wedaj Kibret",
      designation: "Ph.D. Scholar",
      email: "samuel_wed@yahoo.com",
      research:
        "DADS: Decentralized Attestation for Device Swarms",
    },
    {
      image: "/assets/Tanvi.jpg",
      name: "Tanvi Singla",
      designation: "Ph.D. Scholar",
      email: "eez208455@ee.iitd.ac.in",
      research:
        "Hardware Security primarily focusing on real-time systems, on-chip networks and RDMA",
    },
    {
      image: "/assets/nivedita.jpg",
      name: "Nivedita Shrivastava",
      designation: "Ph.D. Scholar",
      email: "nivedita.shrivastava@ee.iitd.ac.in",
      research:
        "Secure deep learning architectures for defence against side-channel attacks",
    },
    {
      image: "/assets/sandeep1.jpg",
      name: "Sandeep Kumar",
      designation: "Ph.D. Scholar",
      email: "sandeep.kumar@cse.iitd.ac.in",
      research:
        "Secure Processor",
    },
  ];

  return (
    <main className="phd-page">

      {/* =========================================
          PAGE HEADING
      ========================================= */}

      <section className="phd-heading">

        <h1>Ph.D. Scholars</h1>

        <div className="heading-line"></div>

        <p>
          Meet the Ph.D. scholars associated with the
          Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>

      </section>


      {/* =========================================
          SCHOLARS
      ========================================= */}

      <section className="phd-section">

        <div className="phd-grid">

          {scholars.map((scholar, index) => (

            <div className="phd-card" key={index}>

              <div className="phd-photo">

                <img
                  src={scholar.image}
                  alt={scholar.name}
                />

              </div>


              <h2>{scholar.name}</h2>


              <p className="phd-designation">
                {scholar.designation}
              </p>


              <p className="phd-email">

                <span>📧</span>

                <a href={`mailto:${scholar.email}`}>
                  {scholar.email}
                </a>

              </p>


              <div className="phd-research">

                <h3>Research Topic</h3>

                <p>
                  {scholar.research}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default PhDStudents;