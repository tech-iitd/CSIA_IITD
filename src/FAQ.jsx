function FAQ() {
  const faqs = [
    {
      question:
        "How is the part-time M.Tech. programme different from the full-time programme?",
      answer: (
        <>
          <p>
            The part-time programmes constitute an opportunity given to
            working professionals in the NCR area to pursue an advanced
            degree at IIT Delhi.
          </p>

          <ul>
            <li>
              Academically, the part-time programmes are identical to the
              full-time programmes.
            </li>
            <li>
              The normal duration of the Master's programmes is 6 semesters
              instead of 4, to complete the 48-54 credits of work.
            </li>
            <li>
              A part-time student can take no more than 12 credits a semester.
            </li>
            <li>
              There is only a small difference in the admission requirements
              (e.g., GATE is not mandatory, the academic performance
              requirements may be slightly different) and the admission test
              process may involve additional tests.
            </li>
            <li>
              The only other "concession" for the part-time student is that
              core courses are held in the morning slots. Students should
              select elective courses on the basis of convenience and
              interest.
            </li>
          </ul>
        </>
      ),
    },

    {
      question:
        "Am I eligible to apply for the part time M.Tech programme?",
      answer: (
        <>
          <p>
            Yes, if you have the academic qualifications in terms of degree
            and academic performance as specified by the department.
          </p>

          <ul>
            <li>
              At least one year's experience in an organization where your
              work is computer science related.
            </li>
            <li>
              You must be resident and working within 50 km of IIT Delhi.
            </li>
            <li>
              You should get a NOC from your employer at the time of joining
              in the format prescribed by IIT.
            </li>
          </ul>
        </>
      ),
    },

    {
      question: "Do I need GATE for the part-time programmes?",
      answer: (
        <p>
          No, GATE is required only for full-time students getting
          assistantship from the Institute.
        </p>
      ),
    },

    {
      question: "What is the selection procedure?",
      answer: (
        <p>
          The selection procedure consists of an application followed by a
          written test and interview. The written test is technical and
          objective in nature.
        </p>
      ),
    },

    {
      question: "What is the duration of the course?",
      answer: (
        <p>
          The normal duration is 4 semesters for full-time students and 6
          semesters for part-time students.
        </p>
      ),
    },

    {
      question: "What is the fee structure?",
      answer: (
        <p>
          The same.
        </p>
      ),
    },

    {
      question: "Are classes held on weekdays?",
      answer: (
        <>
          <p>
            Yes. Classes are generally held on weekdays during the usual
            working hours.
          </p>

          <p>
            Part-time programmes are not conducted remotely. The core courses
            are held in the morning slots:
          </p>

          <ul>
            <li>
              C: 8:00 AM – 9:00 AM and D: 9:00 AM – 10:00 AM on Tuesday,
              Wednesday and Friday.
            </li>
            <li>
              A: 8:00 AM – 9:30 AM and B: 9:30 AM – 11:00 AM on Monday and
              Thursday.
            </li>
          </ul>

          <p>
            Elective courses can be selected based on convenience and
            interest.
          </p>
        </>
      ),
    },

    {
      question: "Can I do a minor/major project during the programme?",
      answer: (
        <>
          <p>
            Yes. Approximately one-third of the M.Tech credits are project
            credits, while approximately two-thirds of the MS (Res) credits
            are project credits.
          </p>

          <p>
            The project may be carried out at the workplace or at home.
            However, the project must be archived, demonstrated and
            documented on the Department machines.
          </p>
        </>
      ),
    },

    {
      question: "Can I shift my job within the NCR during the programme?",
      answer: (
        <p>
          Yes, provided the new workplace is within 50 km of IIT Delhi. A
          fresh NOC from the new employer is required. The student must
          continue to be employed for the part-time programme.
        </p>
      ),
    },

    {
      question: "Am I eligible for hostel accommodation?",
      answer: (
        <p>
          No. Part-time students are not eligible for hostel accommodation.
        </p>
      ),
    },

    {
      question: "Am I eligible for an Institute assistantship?",
      answer: (
        <p>
          No. Part-time students are not eligible for assistantship from
          Institute sources.
        </p>
      ),
    },
  ];

  return (
    <main className="faq-page">

      {/* Hero */}
      <section className="faq-hero">
        <span className="faq-hero-label">
          ACADEMIC PROGRAMME
        </span>

        <h1>Frequently Asked Questions</h1>

        <div className="faq-hero-accent"></div>

        <p>
          Part-Time M.Tech. Programme in Cyber Security
        </p>
      </section>

      {/* FAQ Content */}
      <section className="faq-container">


        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details
              className="faq-item"
              key={index}
            >
              <summary>
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq-question">
                  {faq.question}
                </span>

                <i className="fa-solid fa-chevron-down"></i>
              </summary>

              <div className="faq-answer">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </section>

    </main>
  );
}

export default FAQ;