import { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const events = [
    // 2022
    {
      year: 2022,
      type: "Talk",
      title: "Adaptive Phishing Detection System using Machine Learning",
      speaker: "Prof. Sanjay Jha",
      date: "16 September 2022",
      time: "12:00 Noon",
    },

    // 2021
    {
      year: 2021,
      type: "Talk",
      title: "Building Principled Security Analysis Frameworks for Cellular Networks",
      speaker:
        "Prof. Syed Rafiul Hussain, Assistant Professor, Department of Computer Science and Engineering, Pennsylvania State University",
      date: "1 November 2021",
      time: "6:00 PM",
    },
    {
      year: 2021,
      type: "Talk",
      title: "Securing Smart Grid against Emerging Cyber Threats",
      speaker:
        "Dr. Daisuke Mashima, Senior Research Scientist, Illinois at Singapore Pte Ltd, the University of Illinois at Urbana-Champaign",
      date: "15 September 2021",
      time: "4:30 PM",
    },
    {
      year: 2021,
      type: "Workshop",
      title: "Network Security and Cryptography",
      speaker: "",
      date: "6 February 2021 to 23 May 2021",
      time: "Online Training",
    },

    // 2020
    {
      year: 2020,
      type: "Talk",
      title: "Cyber Security is Future - Mastercard Knowledge Session",
      speaker: "Dr. Min Xu, Principal Security Researcher, Mastercard",
      date: "28 October 2020",
      time: "5:30 PM",
    },

    // 2019
    {
      year: 2019,
      type: "Talk",
      title: "A hacker’s journey of exploiting your IoT Cloud Applications",
      speaker: "Mr Ananda Krishna, Co-founder & CTO of Astra Security",
      date: "24 September 2019",
      time: "5:15 PM",
    },
    {
      year: 2019,
      type: "Talk",
      title:
        "Canadian Institute for Cybersecurity: A Hub of Innovation and Talent Development",
      speaker:
        "Prof. Ali A. Ghorbani, Professor, Tier 1 Chair CyberSecurity, Director of the CIC, Canada",
      date: "8 March 2019",
      time: "11:00 AM",
    },

    // 2017
    {
      year: 2017,
      type: "Workshop",
      title: "Computer Forensics",
      speaker: "",
      date: "13 October 2017",
      time: "IIT Delhi",
    },
    {
      year: 2017,
      type: "Workshop",
      title: "4th International Workshop on Cyber Security – IoT Security",
      speaker: "",
      date: "20 March 2017",
      time: "IIT Delhi",
    },
    {
      year: 2017,
      type: "Workshop",
      title: "Embedded System Security",
      speaker: "",
      date: "6 to 10 March 2017",
      time: "IIT Delhi",
    },
    {
      year: 2017,
      type: "Workshop",
      title: "Network Security",
      speaker: "",
      date: "14 to 18 February 2017",
      time: "IIT Delhi",
    },
    {
      year: 2017,
      type: "Workshop",
      title: "Refresher Course in Cyber Security",
      speaker: "",
      date: "23 January to 3 February 2017",
      time: "IIT Delhi",
    },
    {
      year: 2017,
      type: "Workshop",
      title: "Cyber Security Policy",
      speaker: "",
      date: "19 to 21 January 2017",
      time: "IIT Delhi",
    },
    {
      year: 2017,
      type: "Talk",
      title: "A Changing Landscape: Securing The Internet Of Things (IoT)",
      speaker:
        "Prof Sanjay Jha, Director of the Cybersecurity and Privacy Laboratory (Cyspri), University of New South Wales, Australia",
      date: "7 February 2017",
      time: "",
    },
    {
      year: 2017,
      type: "Talk",
      title: "Cyberworld: Advancing too quickly to Secure",
      speaker:
        "Prof Eugene H. Spafford, Professor of Computer Science, Executive Director Emeritus of CERIAS",
      date: "31 January 2017",
      time: "",
    },

    // 2016
    {
      year: 2016,
      type: "Workshop",
      title: "Cyber Security for BEL Ghaziabad",
      speaker: "",
      date: "10 to 12 August 2016",
      time: "IIT Delhi",
    },
    {
      year: 2016,
      type: "Workshop",
      title: "Cyber Security Policy",
      speaker: "",
      date: "1 to 3 August 2016",
      time: "IIT Delhi",
    },
    {
      year: 2016,
      type: "Workshop",
      title: "Network Security - II",
      speaker: "",
      date: "25 to 29 July 2016",
      time: "IIT Delhi",
    },
    {
      year: 2016,
      type: "Workshop",
      title: "Network Security - I",
      speaker: "",
      date: "30 May to 3 June 2016",
      time: "IIT Delhi",
    },
    {
      year: 2016,
      type: "Talk",
      title: "miTLS: Breaking and Fixing Transport Layer Security",
      speaker:
        "Mr Karthikeyan Bhargavan, Assistant Professor in Department of Computer Science, Royal Holloway, University of London",
      date: "25 April 2016",
      time: "",
    },
    {
      year: 2016,
      type: "Talk",
      title:
        "Context-Aware, Policy-based approaches to Security",
      speaker:
        "Prof Anupam Joshi, Professor and Chair of Computer Science and Electrical Engineering Department, University of Maryland, Baltimore County (UMBC), Director of the UMBC Center for Cybersecurity",
      date: "15 March 2016",
      time: "",
    },
    {
      year: 2016,
      type: "Talk",
      title:
        "Is digital privacy and personal data protection compatible with big data and cloud computing?",
      speaker:
        "Prof Solange Ghernaouti, Professor in Faculty of Business and Economics, Swiss Cybersecurity Advisory & Research Group, the University of Lausanne",
      date: "3 February 2016",
      time: "",
    },
    {
      year: 2016,
      type: "Talk",
      title:
        "Improving Network Security through Insurance - A Tale of Cyber-Insurance Markets",
      speaker:
        "Dr Ranjan Pal, Research Scientist in University of Southern California",
      date: "29 January 2016",
      time: "",
    },
    {
      year: 2016,
      type: "Talk",
      title: "Monitoring Big, Distributed, Streaming Data",
      speaker:
        "Prof Assaf Schuster, Professor in Department of Computer Science, Technion",
      date: "19 January 2016",
      time: "",
    },
    {
      year: 2016,
      type: "Workshop",
      title: "International Workshop on Internet of Things",
      speaker: "",
      date: "7 January 2016",
      time: "Kyushu University, Japan",
    },

    // 2015
    {
      year: 2015,
      type: "Talk",
      title: "Abstract Interpretation of Binaries with Jakstab",
      speaker:
        "Dr. Johannes Kinder, Assistant Professor in Department of Computer Science, Royal Holloway, University of London",
      date: "17 December 2015",
      time: "",
    },
    {
      year: 2015,
      type: "Workshop",
      title: "Cyber Security: Fundamentals and Advancements",
      speaker: "",
      date: "4, 5 and 6 November 2015",
      time: "IIT Delhi",
    },
    {
      year: 2015,
      type: "Workshop",
      title: "Cyber Security and Information Assurance",
      speaker: "",
      date: "9 and 10 May 2015",
      time: "IIT Delhi",
    },
    {
      year: 2015,
      type: "Workshop",
      title: "Cyber Security for BEL Bangalore",
      speaker: "",
      date: "27, 28 and 29 April 2015",
      time: "Bangalore",
    },
    {
      year: 2015,
      type: "Talk",
      title: "INTERPOL’s Role and Efforts in Combating Cybercrime",
      speaker:
        "Dr. Madan Oberoi, Director of Cyber Innovation and Outreach, Directorate in the INTERPOL Global Complex for Innovation (IGCI)",
      date: "18 March 2015",
      time: "4:00 PM",
    },
    {
      year: 2015,
      type: "Talk",
      title: "Human Factors in Computer Security",
      speaker:
        "Dr. Debin Gao, Assistant Professor in School of Information System, Singapore Management University",
      date: "13 February 2015",
      time: "4:30 PM",
    },
    {
      year: 2015,
      type: "Talk",
      title: "Attribute-Based Access Control Models and Beyond",
      speaker:
        "Prof Ravi Sandhu, Executive Director and Chief Scientist, Institute of Cyber Security (ICS), University of Texas at San Antonio",
      date: "11 February 2015",
      time: "3:00 PM",
    },
    {
      year: 2015,
      type: "Talk",
      title:
        "Security and Safety of Embedded Systems: From Integrated Circuits to Impared Driving",
      speaker:
        "Dr. Nilanjan Banerjee, Assistant Professor, University of Maryland Baltimore County, USA",
      date: "15 January 2015",
      time: "5:00 PM",
    },

    {
      year: 2014,
      type: "Workshop",
      title: "Recent Advances in Cryptography as a Post FSTTCS Workshop",
      speaker: "",
      date: "18 and 19 December 2014",
      time: "IIT Delhi",
    },
    {
      year: 2014,
      type: "Talk",
      title: "Cyber Crime - Challenges",
      speaker: "Mr. Amit Kumar (IPS) DIG, EO-111, CBI New Delhi",
      date: "14 November 2014",
      time: "4:00 PM",
    },
    

    // 2014
    {
      year: 2014,
      type: "Workshop",
      title: "IITD–NU Joint Workshop on Cyber Security",
      speaker: "",
      date: "7–8 February 2014",
      location: "Bharti School, IIT Delhi",
      galleryLink: "/workshop-gallery",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterYear, setFilterYear] = useState("All");

  const years = [...new Set(events.map((event) => event.year))].sort(
    (a, b) => b - a
  );

  const filteredEvents = events.filter((event) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      event.title.toLowerCase().includes(search) ||
      event.speaker.toLowerCase().includes(search) ||
      event.year.toString().includes(search);

    const matchesType =
      filterType === "All" || event.type === filterType;

    const matchesYear =
      filterYear === "All" || event.year.toString() === filterYear;

    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <main className="events-page">

      {/* PAGE HEADING */}
      <section className="events-heading">
        <h1>Events & Activities</h1>
        <div className="heading-line"></div>
        <p>
          Workshops, talks and other academic activities organized
          by the Center of Excellence in Cyber Systems and
          Information Assurance, IIT Delhi.
        </p>
      </section>

      {/* FILTERS */}
      <section className="events-controls">

        <div className="events-search">
          <input
            type="text"
            placeholder="Search events, speakers or year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="events-filters">

          <button
            className={filterType === "All" ? "active" : ""}
            onClick={() => setFilterType("All")}
          >
            All Events
          </button>

          <button
            className={filterType === "Workshop" ? "active" : ""}
            onClick={() => setFilterType("Workshop")}
          >
            Workshops
          </button>

          <button
            className={filterType === "Talk" ? "active" : ""}
            onClick={() => setFilterType("Talk")}
          >
            Talks
          </button>

          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="All">All Years</option>

            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

        </div>
      </section>

      {/* EVENTS */}
      <section className="events-section">

        <div className="events-result-count">
          Showing {filteredEvents.length} of {events.length} events
        </div>

        <div className="events-grid">

          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <article className="event-card" key={`${event.year}-${index}`}>

                <div className="event-card-top">
                  <span className="event-year">
                    {event.year}
                  </span>

                  <span className={`event-type ${event.type.toLowerCase()}`}>
                    {event.type}
                  </span>
                </div>

                <h2>{event.title}</h2>

                {event.speaker && (
                  <p className="event-speaker">
                    {event.speaker}
                  </p>
                )}

                <div className="event-date">
                  <span>📅</span>
                  <span>{event.date}</span>
                </div>

                {event.time && (
                  <div className="event-time">
                    <span>◷</span>
                    <span>{event.time}</span>
                  </div>
                )}

                {event.location && (
                  <div className="event-location">
                    <i className="fa-solid fa-location-dot" aria-hidden="true" />
                    <span>{event.location}</span>
                  </div>
                )}

                {event.galleryLink && (
                  <Link className="event-gallery-link" to={event.galleryLink}>
                    View all workshop photos
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                )}

              </article>
            ))
          ) : (
            <div className="events-no-result">
              No events found.
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Events;