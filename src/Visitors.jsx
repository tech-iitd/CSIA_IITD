const visits = [
  {
    date: "1 December 2014",
    name: "Prof. Gert Jervan",
    detail: "Dean (IT Faculty), Tallinn University of Technology, Estonia",
    context: "Visit to CoE-CSIA, IIT Delhi",
  },
  {
    date: "4 December 2014",
    name: "Mr Nigel Jones",
    detail: "Senior Lecturer, Cranfield University, UK",
    context: "Visit to CoE-CSIA, IIT Delhi",
  },
  {
    date: "10–11 December 2014",
    name: "Prof. Anupam Joshi",
    detail: "Visit to Google India, Gurgaon",
  },
  {
    date: "13 December 2014",
    name: "CoE-CSIA faculty member",
    detail: "Participation in the India–Israel Colloquium on Cyber Security & Big Data Analytics",
    context: "Taj Hotel, Delhi",
  },
  {
    date: "21–30 December 2014",
    name: "Dr Deepak Khazanchi",
    detail: "Associated Dean for Academic Affairs, University of Nebraska at Omaha, USA",
    context: "Visit to CoE-CSIA, IIT Delhi",
  },
  {
    date: "18 February 2015",
    name: "Delegation led by John McCaslin",
    detail: "Minister Counselor for Commercial Affairs, U.S. Embassy, New Delhi",
  },
  {
    date: "9 March 2015",
    name: "Mr Mike Kendzierski",
    detail: "Visit from intven.com",
  },
  {
    date: "11 March 2015",
    name: "Dr Alwyn Roshan Pais",
    detail: "Assistant Professor, NIT Surathkal, Karnataka",
  },
  {
    date: "13 March 2015",
    name: "Prof. Arvind Verma",
    detail: "Department of Criminal Justice, Indiana University, Bloomington, USA",
  },
  {
    date: "16 March 2015",
    name: "Dr Sanjay Goel",
    detail: "Director of Research, NYS Center for Information Forensics and Assurance; Chair and Associate Professor of Information Technology Management, School of Business, University at Albany, State University of New York",
  },
  {
    date: "20 April 2015",
    name: "Canadian delegation",
    detail: "Visit to CoE-CSIA, IIT Delhi",
  },
  {
    date: "12–17 July 2015",
    name: "Prof Sanjiva Prasad (IIT Delhi)",
    detail: "Attended the Cyber Security Summer School as a mentor",
    context: "Tallinn University of Technology",
  },
  {
    date: "Summer 2015",
    name: "Prof Ranjan Bose (IIT Delhi)",
    detail: "Visit to the University of Maryland, Baltimore County and the University of Nebraska at Omaha",
  },
  {
    date: "23 September 2015",
    name: "Dr Masato Miwa",
    detail: "Research Administrator, Kyushu University, Japan",
  },
  {
    date: "30 October 2015",
    name: "Dr Feng Hao",
    detail: "Head, Cyber Security Group, New Castle University, United Kingdom",
  },
  {
    date: "1 April 2016",
    name: "Dr Gulshan Rai",
    detail: "Cyber Security Chief, Government of India",
  },
  {
    date: "18 April 2016",
    name: "Brig. Pritam Bishnoi",
    detail: "Corps of Signals / HQ Northern Command",
  },
  {
    date: "22 July 2016",
    name: "Dr Sanjay Goel",
    detail: "Director of Research, NYS Center for Information Forensics and Assurance; Chair and Associate Professor of Information Technology Management, School of Business, University at Albany, State University of New York",
  },
  {
    date: "4 August 2016",
    name: "Wg Cdr Dinesh Lawrence",
    detail: "IDS",
  },
  {
    date: "8 August 2016",
    name: "Dr Manish Gupta",
    detail: "Vice President and Director, Xerox Research Center India",
  },
  {
    date: "11 November 2016",
    name: "Delegates from Kyushu University, Japan and JST members",
    detail: "Indo–Japan Research Collaboration",
  },
];

function Visitors() {
  return (
    <main className="visitors-page">
      <header className="visitors-heading">
        <span className="visitors-eyebrow">CSIA · IIT DELHI</span>
        <h1>Visitors</h1>
        <p>
          Visiting academics, industry leaders and delegations connecting with
          the Centre of Excellence in Cyber Systems and Information Assurance.
        </p>
      </header>

      <section className="visitors-content" aria-label="Visitor and academic engagements">
        <ol className="visitors-list">
          {visits.map((visit) => (
            <li className="visitor-entry" key={`${visit.date}-${visit.name}`}>
              <time className="visitor-date">{visit.date}</time>
              <div className="visitor-details">
                <h2>{visit.name}</h2>
                <p>{visit.detail}</p>
                {visit.context && <p className="visitor-context">{visit.context}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default Visitors;
