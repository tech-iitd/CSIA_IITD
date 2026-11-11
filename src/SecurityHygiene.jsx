

function SecurityHygiene() {
  return (
    <main className="container security-hygiene-page">
      <section className="sh-hero">
        <span className="sh-eyebrow">CSIA • IIT Delhi</span>
        <h1>Security Hygiene</h1>
        <p>
          Stay informed, browse safely, and protect your
          information online.
        </p>
      </section>

      <article className="sh-content">
        <h2>Secure Your Web Browser</h2>

        <p>
          A web browser is a software application used to access,
          retrieve, and display information on the World Wide Web.
          Browsers allow users to interact with websites and online
          resources. Safe browsing practices help protect personal
          information, accounts, and devices from online threats.
        </p>

        <h2>1. Understanding a Uniform Resource Locator (URL)</h2>

        <p>
          A Uniform Resource Locator (URL) specifies the address
          of a resource on the internet. For example:
        </p>

       
<a
  className="sh-example-url"
  href="https://home.iitd.ac.in/"
  target="_blank"
  rel="noreferrer"
>
  https://home.iitd.ac.in/
</a>

        <div className="sh-url-parts">
          <div className="sh-url-card">
            <h3>https://</h3>
            <p>
              The protocol used to access the website securely
              through HTTPS, which uses encryption to protect
              data in transit.
            </p>
          </div>

          <div className="sh-url-card">
            <h3>home</h3>
            <p>
              The subdomain identifying the home page.
            </p>
          </div>

          <div className="sh-url-card">
            <h3>iitd</h3>
            <p>
              The domain label associated with IIT Delhi.
            </p>
          </div>

          <div className="sh-url-card">
            <h3>ac.in</h3>
            <p>
              The domain suffix commonly used by academic
              institutions in India.
            </p>
          </div>
        </div>

        <div className="sh-tip">
          <strong>Security tip:</strong> Before entering a password
          or sensitive information, check the website address
          carefully. HTTPS protects data in transit but does not,
          by itself, prove that a website is trustworthy.
        </div>

        <h2>2. How Does a Web Browser Work?</h2>

        <p>
          When a user enters a URL, the browser identifies the
          destination server, establishes a connection, requests
          the resource, and processes the returned content such
          as HTML, CSS, and JavaScript to display the webpage.
          DNS helps translate domain names into IP addresses.
        </p>

        <h2>3. How to Secure Your Web Browser</h2>

        <p>
          Follow these practices to improve browser security:
        </p>

        <ul className="sh-checklist">
          <li>
            <strong>Keep your browser updated.</strong> Install
            security updates and use a supported browser version.
          </li>
          <li>
            <strong>Use strong, unique passwords.</strong> Consider
            a reputable password manager and enable multifactor
            authentication where available.
          </li>
          <li>
            <strong>Check website addresses.</strong> Be cautious
            of misspelled domains, suspicious links, and unexpected
            login pages.
          </li>
          <li>
            <strong>Review extensions.</strong> Install extensions
            only from trusted sources and remove those you no
            longer need.
          </li>
          <li>
            <strong>Manage privacy settings.</strong> Review
            permissions for location, camera, microphone, and
            notifications.
          </li>
          <li>
            <strong>Avoid suspicious downloads.</strong> Do not
            open unexpected attachments or files from unknown
            sources.
          </li>
          <li>
            <strong>Be careful on public Wi-Fi.</strong> Use trusted
            networks and avoid sensitive transactions on networks
            you do not trust.
          </li>
        </ul>

        <h2>4. Browser-Specific Security Resources</h2>

        <p>
          Consult the official support resources below for
          browser-specific privacy and security settings.
        </p>

        <div className="sh-browser-list">
          <section className="sh-browser-card">
            <h3>Google Chrome</h3>
            <p>
              Learn about Safe Browsing, security checks,
              permissions, updates, and privacy settings.
            </p>
            <a
              href="https://support.google.com/chrome/"
              target="_blank"
              rel="noreferrer"
            >
              Chrome Help and Security →
            </a>
          </section>

          <section className="sh-browser-card">
            <h3>Mozilla Firefox</h3>
            <p>
              Explore enhanced tracking protection, private
              browsing, passwords, and security preferences.
            </p>
            <a
              href="https://support.mozilla.org/en-US/products/firefox/privacy-and-security"
              target="_blank"
              rel="noreferrer"
            >
              Firefox Privacy and Security →
            </a>
          </section>

          <section className="sh-browser-card">
            <h3>Apple Safari</h3>
            <p>
              Review privacy controls, website permissions,
              tracking protection, and security settings.
            </p>
            <a
              href="https://support.apple.com/safari"
              target="_blank"
              rel="noreferrer"
            >
              Apple Safari Support →
            </a>
          </section>

          <section className="sh-browser-card">
            <h3>Microsoft Edge</h3>
            <p>
              Learn about tracking prevention, security
              settings, updates, and Microsoft Defender
              SmartScreen.
            </p>
            <a
              href="https://support.microsoft.com/microsoft-edge"
              target="_blank"
              rel="noreferrer"
            >
              Microsoft Edge Support →
            </a>
          </section>
        </div>

        <div className="sh-note">
          <strong>Note:</strong> Microsoft Internet Explorer is
          retired and should not be used for routine browsing.
          Use a currently supported browser and keep it updated.
        </div>

        <h2>5. Make Safe Browsing a Habit</h2>

        <p>
          Browser security is a shared responsibility. Stay alert
          to phishing attempts, verify unfamiliar websites,
          protect your credentials, and review browser settings
          regularly. A few simple precautions can significantly
          reduce exposure to common online threats.
        </p>

       
      </article>
    </main>
  );
}

export default SecurityHygiene;
