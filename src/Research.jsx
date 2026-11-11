import { useState } from "react";


const researchAreaFilters = [
  { value: "security", label: "Cybersecurity & Cryptography", keywords: ["security", "cryptography", "cyber"] },
  { value: "ai", label: "AI & Data Analytics", keywords: ["artificial intelligence", "machine learning", "analytics", "reasoning", "statistical modelling", "statistical techniques"] },
  { value: "networks", label: "Networks & Communications", keywords: ["network", "communication", "wireless", "distributed storage", "mimo", "signal processing", "mobile", "multicarrier"] },
  { value: "information", label: "Information & Coding Theory", keywords: ["information theory", "coding theory", "information systems"] },
  { value: "power", label: "Power & Energy Systems", keywords: ["power", "hvdc", "facts", "renewable energy", "electrical machines", "energy harvesting"] },
  { value: "computing", label: "Computing & Algorithms", keywords: ["algorithm", "computing", "programming language", "processor", "operating system", "formal verification", "complexity", "concurrency", "process calculi", "machine translation", "semantic web"] },
  { value: "management", label: "Management & Digital Innovation", keywords: ["management", "e-commerce", "e-governance", "business", "supply chain", "operations", "ict", "governance", "social media", "decision support"] },
  { value: "structures", label: "Materials & Structures", keywords: ["material", "structure", "bamboo", "tensegrity", "non-destructive", "bio-mechanics", "vibration", "nano-mechanics"] },
];
function Research() {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedResearchArea, setSelectedResearchArea] = useState("All");

  const departments = [
    {
      name: "Department of Electrical Engineering",
      faculty: [
        {
          name: "Prof. Ranjan Bose",
           image: "/assets/ranjan bose.jpg",
          areas:
            "Information Theory, Coding Theory, Wireless Security and Physical Layer Security.",
        },
        {
          name: "Prof. B.K. Panigrahi",
          image: "/assets/panigrahi.jpg",
          areas:
            "Power Quality, FACTS Device, Power System Protection and AI Application to Power System.",
        },
        {
          name: "Prof. Nilanjan Senroy",
          image: "/assets/senroy.jpg",
          areas:
            "Power System Stability and Control, Wide area Measurement and Control and Statistical Techniques in Power Systems and Power Quality.",
        },
        {
          name: "Prof. Bhim Singh",
          image: "/assets/bhim.jpg",
          areas:
            "Power Electronics, Electrical Machines and Drives, HVDC, FACTS, Power Quality, Renewable Energy, DSP Based Control of Power Converter and Drive.",
        },
        {
          name: "Prof. Shankar Prakriya",
          image: "/assets/shankar.jpg",
          areas:
            "Signal Processing for Communications, Communication Systems, Equalization, Multiuser and Multicarrier Communication, Space-Time Processing, Parameter Estimation.",
        },
        {
          name: "Dr. Saif K Mohammed",
          image: "/assets/saif.jpg",
          areas:
            "Wireless Communication (Large MIMO Systems/Massive MIMO Systems), Communication Theory and Systems, Information Theory, Statistical Signal Processing.",
        },
        {
          name: "Dr. Harshan Jagadeesh",
          image: "/assets/harshan.png",
          areas:
            "Wireless networks, Coding theory, Distributed Storage Networks, Wireless Security, Cyber-Physical Systems.",
        },
      ],
    },

    {
      name: "Department of Computer Science & Engineering",
      faculty: [
        {
          name: "Prof. Huzur Saran",
          image: "/assets/huzur.jpg",
          areas:
            "Wireless Networks, Systems & Network Security, Network Performance Analysis, and Algorithms.",
        },
        {
          name: "Prof. Sanjiva Prasad",
          image: "/assets/sanjiva.jpg",
          areas:
            "Design and implementation of programming languages for mobile distributed computing, Process calculi for mobility, Security protocols and Type systems and functional programming.",
        },
        {
          name: "Prof. Saroj Kaushik",
          image: "/assets/saroj.jpg",
          areas: "Artificial Intelligence, Location Based Services.",
        },
        {
          name: "Dr. Ragesh Jaiswal",
          image: "/assets/jaiswal.jpg",
          areas:
            "Algorithms, Complexity, Theoretical Cryptography and Machine Learning.",
        },
        {
          name: "Prof. Smruti Ranjan Sarangi",
          image: "/assets/ranjan sarangi.jpg",
          areas:
            "Multicore processors, Networks on Chip, Operating Systems for Parallel Computers and Parallel algorithms.",
        },
        {
          name: "Dr. Subodh Sharma",
          image: "/assets/sharma.jpg",
          areas:
            "High-Performance Computing, Concurrency, and Formal Verification.",
        },
      ],
    },

    {
      name: "Department of Management Studies",
      faculty: [
        {
          name: "Prof. M.P. Gupta",
          image: "/assets/mpgupta.png",
          areas:
            "Cloud information Systems and Information system management and E-Commerce and E-governance.",
        },
        {
          name: "Prof. Arpan Kumar Kar",
          image: "/assets/arpan.jpg",
          areas:
            "E-business, E-commerce, E-governance, M-commerce, Decision support systems and Business analytics.",
        },
        {
          name: "Prof. P. Vigneswara Ilavarasan",
          image: "/assets/vigneswara.png",
          areas:
            "Information and Communication Technologies and Development (ICTD), Urban Women Microentrepreneurs & Mobile phones, Electronic Governance, ICT Employment in India, Indian IT Industry - Inter-firm linkages, Small firms, R&D centers of MNCs, Social Media and Business applications.",
        },
        {
          name: "Prof. Ravi Shankar",
          image: "/assets/ravi.jpg",
          areas:
            "Supply Chain Management, Operations Management, Project Management, Total Quality Management & Six Sigma, Strategic Technology Management, Quantitative modeling, Knowledge Management.",
        },
      ],
    },

    {
      name: "Department of Mechanical Engineering",
      faculty: [
        {
          name: "Prof. S.P. Singh",
          image: "/assets/SP Singh.png",
          areas:
            "Dynamics of Rotating Machinery, Composite Materials, Machine Design, Active Vibration Control and Nano-Mechanics.",
        },
      ],
    },

    {
      name: "Department of Civil Engineering",
      faculty: [
        {
          name: "Prof. Suresh Bhalla",
          image: "/assets/bhalla.jpg",
          areas:
            "Smart materials and structures, Structural health monitoring, Non-destructive evaluation, Engineered Bamboo structure, Tensegrity structures, Underground structures, Smart material technologies for bio-mechanics systems, Experimental system identification, Experimental structural dynamics, Adaptation and transfer of aerospace technologies to civil engineering systems and Energy harvesting.",
        },
      ],
    },

    {
      name: "Department of Mathematics",
     
      faculty: [
        {
          name: "Prof. Niladri Chatterjee",
          image: "/assets/niladri.png",
          areas:
            "Machine Translation, Artificial Intelligence, Reasoning, Statistical Modelling and Semantic Web.",
        },
      ],
    },
  ];

  const searchText = search.toLowerCase().trim();

  const filteredDepartments = departments
    .filter(
      (department) =>
        selectedDepartment === "All" ||
        department.name === selectedDepartment
    )
    .map((department) => ({
      ...department,
      faculty: department.faculty.filter((person) => {
        const searchableText = `${department.name} ${person.name} ${person.areas}`.toLowerCase();
        const areaFilter = researchAreaFilters.find((area) => area.value === selectedResearchArea);
        const matchesSearch = searchableText.includes(searchText);
        const matchesArea = !areaFilter || areaFilter.keywords.some((keyword) =>
          person.areas.toLowerCase().includes(keyword)
        );
        return matchesSearch && matchesArea;
      }),
    }))
    .filter((department) => department.faculty.length > 0);

    const filteredFacultyCount = filteredDepartments.reduce(
  (total, department) => total + department.faculty.length,
  0
);
  return (
    <main className="research-page">

      {/* Research Header */}
      <section className="research-hero">
        <span className="research-label">RESEARCH</span>

        <h1>Associated Faculty Members</h1>

        <p>
          Explore the research expertise and areas of faculty members
          associated with the Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>
      </section>

      {/* Search and Department Filter */}
      <div className="research-tools">
        <div className="search-input-wrap">
        <i className="fa-solid fa-magnifying-glass search-input-icon" aria-hidden="true" />

        <input
          type="text"
          aria-label="Search faculty or research areas"
          placeholder="Search faculty or research area..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
  <button
    type="button"
    className="clear-search"
    aria-label="Clear search"
    onClick={() => setSearch("")}
  >
    ✕
  </button>
)}
</div>
        <details className="research-filter-menu">
          <summary className="research-filter-trigger">
            <i className="fa-solid fa-sliders" aria-hidden="true" />
            <span>Filters</span>
            {(selectedDepartment !== "All" || selectedResearchArea !== "All") && (
              <span className="research-filter-badge" aria-label="Active filters">{(selectedDepartment !== "All" ? 1 : 0) + (selectedResearchArea !== "All" ? 1 : 0)}</span>
            )}
            <i className="fa-solid fa-chevron-down research-filter-chevron" aria-hidden="true" />
          </summary>
          <div className="research-filter-popover">
            <label>
              <span>Department</span>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="All">All Departments</option>
                {departments.map((department) => (
                  <option key={department.name} value={department.name}>{department.name}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Research area</span>
              <select
                value={selectedResearchArea}
                onChange={(e) => setSelectedResearchArea(e.target.value)}
              >
                <option value="All">All Research Areas</option>
                {researchAreaFilters.map((area) => (
                  <option key={area.value} value={area.value}>{area.label}</option>
                ))}
              </select>
            </label>
            {(selectedDepartment !== "All" || selectedResearchArea !== "All") && (
              <button
                type="button"
                className="research-filter-clear"
                onClick={() => {
                  setSelectedDepartment("All");
                  setSelectedResearchArea("All");
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        </details>

      </div>
      <p className="research-count">
  Showing {filteredFacultyCount} faculty members
</p>

      {/* Research Content */}
      <section className="research-content">

        {/* No Results */}
        {filteredDepartments.length === 0 && (
          <p className="no-results">
            No faculty or research area found.
          </p>
        )}

        {/* Departments */}
        {filteredDepartments.map((department, index) => (

          <section
            className="research-department"
            key={department.name}
          >

            <div className="department-heading">

              <span className="department-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{department.name}</h2>

            </div>

            <div className="research-grid">

              {department.faculty.map((person, facultyIndex) => (

                <article
                  className="research-card"
                  key={person.name}
                >
                  {(person.name === "Prof. Ranjan Bose" ||
  person.name === "Prof. Smruti Ranjan Sarangi" ||
  person.name === "Prof. Huzur Saran"||
  person.name === "Dr. Harshan Jagadeesh"||
  person.name === "Prof. S.P. Singh"||
  person.name === "Prof. Shankar Prakriya"||
  person.name === "Dr. Saif K Mohammed"||
  person.name === "Dr. Subodh Sharma"||
  person.name === "Dr. Ragesh Jaiswal"||
  person.name === "Prof. Sanjiva Prasad"||
  person.name === "Prof. Saroj Kaushik"||
  person.name === "Prof. S.P. Singh"||
  person.name === "Prof. Niladri Chatterjee"||
  person.name === "Prof. Suresh Bhalla"||
  person.name === "Prof. M.P. Gupta"||
  person.name === "Prof. Arpan Kumar Kar"||
  person.name === "Prof. P. Vigneswara Ilavarasan"||
  person.name === "Prof. Ravi Shankar"||
  person.name === "Prof. B.K. Panigrahi"||
  person.name === "Prof. Nilanjan Senroy"||
  person.name === "Prof. Bhim Singh")
                         && (
  <a
    href={
      person.name === "Prof. Ranjan Bose"
        ? "/faculty/ranjan-bose"
        : person.name === "Prof. Smruti Ranjan Sarangi"
        ? "/faculty/smruti-sarangi"
        : person.name === "Prof. Huzur Saran"
        ? "/faculty/huzur-saran"
        : person.name === "Dr. Harshan Jagadeesh"
        ? "/faculty/harshan-jagadeesh"
        : person.name === "Prof. S.P. Singh"
        ? "/faculty/s-p-singh"
        : person.name === "Prof. Shankar Prakriya"
        ? "/faculty/shankar-prakriya"
        : person.name === "Dr. Saif K Mohammed"
        ? "/faculty/saif-k-mohammed"
        : person.name === "Dr. Subodh Sharma"
        ? "/faculty/subodh-sharma"
        : person.name === "Dr. Ragesh Jaiswal"
        ? "/faculty/ragesh-jaiswal"
        : person.name === "Prof. Sanjiva Prasad"
        ? "/faculty/sanjiva-prasad"
        : person.name === "Prof. Saroj Kaushik"
        ? "/faculty/saroj-kaushik"
        : person.name === "Prof. S.P. Singh"
        ? "/faculty/s-p-singh"
        : person.name === "Prof. Niladri Chatterjee"
        ? "/faculty/niladri-chatterjee"
        : person.name === "Prof. Suresh Bhalla"
        ? "/faculty/suresh-bhalla"
        : person.name === "Prof. M.P. Gupta"
        ? "/faculty/m-p-gupta"
        : person.name === "Prof. Arpan Kumar Kar"
        ? "/faculty/arpan-kumar-kar"
        : person.name === "Prof. P. Vigneswara Ilavarasan"
        ? "/faculty/p-vigneswara-ilavarasan"
        : person.name === "Prof. Ravi Shankar"
        ? "/faculty/ravi-shankar"
        : person.name === "Prof. B.K. Panigrahi"
        ? "/faculty/b-k-panigrahi"
        :person.name === "Prof. Nilanjan Senroy"
        ? "/faculty/nilanjan-senroy"
        :person.name === "Prof. Bhim Singh"
        ? "/faculty/bhim-singh"
        : "#"
    }

    className="card-click-area"
    aria-label={`View ${person.name} profile`}
  ></a>
)}

                  <div className="research-card-top">

                    <span className="faculty-number">
                      {String(facultyIndex + 1).padStart(2, "0")}
                    </span>

                  </div>
<div className="faculty-info">
  {person.image && (
    <img src={person.image} alt={person.name} />
  )}
  <h3>{person.name}</h3>
</div>

                  <div className="research-line"></div>

                  {(() => {
                    const topics = person.areas
                      .split(/[,;]+/)
                      .map((topic) => topic.trim().replace(/\.$/, ""))
                      .filter(Boolean);
                    const visibleTopics = topics.slice(0, 4);
                    const additionalTopics = topics.slice(4);

                    return (
                      <div className="research-topic-list" aria-label={`Research areas for ${person.name}`}>
                        <div className="research-topic-chips">
                          {visibleTopics.map((topic) => (
                            <span className="research-topic-chip" key={topic}>{topic}</span>
                          ))}
                        </div>
                        {additionalTopics.length > 0 && (
                          <details className="research-more-topics">
                            <summary>View {additionalTopics.length} more {additionalTopics.length === 1 ? "area" : "areas"}</summary>
                            <div className="research-topic-chips">
                              {additionalTopics.map((topic) => (
                                <span className="research-topic-chip" key={topic}>{topic}</span>
                              ))}
                            </div>
                          </details>
                        )}
                      </div>
                    );
                  })()}

                  <span className="research-view-profile" aria-hidden="true">
                    View profile <i className="fa-solid fa-arrow-right" />
                  </span>

                </article>
                

              ))}

            </div>

          </section>

        ))}

      </section>

    </main>
  );
}

export default Research;