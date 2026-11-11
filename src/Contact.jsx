function Contact() {
  return (
    <main className="container contact-page">
      <header className="contact-hero">
        <span className="contact-eyebrow">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          Connect with the Center of Excellence in Cyber Systems and
          Information Assurance at IIT Delhi.
        </p>
      </header>

      <section className="contact-grid" aria-label="Contact information">
        <article className="contact-card contact-address">
          <div className="contact-card-heading">
            <span className="contact-icon"><i className="fa-solid fa-location-dot" aria-hidden="true" /></span>
            <div>
              <span className="contact-card-label">VISIT US</span>
              <h2>Contact Address</h2>
            </div>
          </div>
          <address>
            520 Cyber Security LAB-1, 5th Floor,<br />
            99C Building, Academic Complex East,<br />
            Indian Institute of Technology Delhi,<br />
            Hauz Khas, New Delhi - 110016
          </address>
          <a
            className="contact-map-link"
            href="https://www.google.com/maps/search/?api=1&query=Indian+Institute+of+Technology+Delhi"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
          </a>
        </article>

        <article className="contact-card">
          <div className="contact-card-heading">
            <span className="contact-icon"><i className="fa-solid fa-phone" aria-hidden="true" /></span>
            <div>
              <span className="contact-card-label">CALL US</span>
              <h2>Phone</h2>
            </div>
          </div>
          <p><a href="tel:+911126597310">+91 11 2659 7310</a></p>
          <p><a href="tel:+911126591290">+91 11 2659 7351</a></p>
        </article>

        <article className="contact-card">
          <div className="contact-card-heading">
            <span className="contact-icon"><i className="fa-solid fa-envelope" aria-hidden="true" /></span>
            <div>
              <span className="contact-card-label">EMAIL US</span>
              <h2>Email</h2>
            </div>
          </div>
          <p><a href="mailto:hodcsia@admin.iitd.ac.in">hodcsia@admin.iitd.ac.in</a></p>
        </article>
      </section>
    </main>
  );
}

export default Contact;
