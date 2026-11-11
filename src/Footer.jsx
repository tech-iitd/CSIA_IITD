import { useLanguage } from "./useLanguage.js";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer" id="contact">

      {/* LEFT */}
      <div className="footer-column">
        <div className="footer-csia-brand">
          <img src="/assets/csia-logo.png" alt="CSIA logo" loading="lazy" />
          <div>
            <div className="footer-title">{t("footerCenterName")}</div>
          </div>
        </div>
     
      </div>

      {/* CENTER */}
      <div className="footer-column">
        <h3>{t("contactAddress")}</h3>

        <address>
          <div className="footer-line">
            <i className="fa-solid fa-location-dot"></i>

            <span>
              520 cyber security LAB-1,5th Floor, 
              <br />
              99C Building, Academic Complex East, 
              <br />
              Indian Institute of Technology Delhi
              <br />
              Hauz Khas,
              <br />
              New Delhi - 110016
            </span>
          </div>

          <div className="footer-line">
            <i className="fa-solid fa-phone"></i>

            <span>
              +91 11 2659 7310, 7351
            </span>
          </div>
        </address>
      </div>

      {/* RIGHT */}
      <div className="footer-column">
        <h3>{t("emailLabel")}:</h3>

        <div className="email">
          <i className="fa-solid fa-envelope"></i>

          <a href="mailto:hodcsia@admin.iitd.ac.in">
            hodcsia@admin.iitd.ac.in
          </a>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="footer-column footer-quick-links">
        <h3>{t("quickLinks")}</h3>
        <a href="/security-hygiene">{t("securityHygiene")}</a>
        <a href="/research">{t("research")}</a>
        <a href="/events">{t("events")}</a>
        <a href="/contact">{t("contactUs")}</a>

      </div>
      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <small>
          <span>{t("developedBy")}:</span>
          <strong>Kavita</strong>
        </small>
        <button
                  type="button"
                  className="footer-back-to-top"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                  aria-label="Back to top"
                >
                  <i className="fa-solid fa-arrow-up" aria-hidden="true" />
                  <span>Back to top</span>
                </button>
      </div>

    </footer>
  );
}

export default Footer;