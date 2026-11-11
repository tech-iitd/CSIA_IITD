
import { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "./useLanguage.js";

function Navbar() {
  const { language, t } = useLanguage();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [collaboratorsOpen, setCollaboratorsOpen] = useState(false);
  const menuToggleRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setCollaboratorsOpen(false);
  };

  const isActivePath = (paths) =>
    paths.some(
      (path) => location.pathname.toLowerCase() === path.toLowerCase()
    );

  const peopleActive = isActivePath([
    "/people",
    "/staff",
    "/phd-students",
    "/pg-students",
  ]);

  const academicActive = isActivePath([
    "/mtech-admissions",
    "/faq",
    "/shortlisting-criteria",
    "/admission-result",
  ]);

  const researchActive = isActivePath(["/research"]);
  const activitiesActive = isActivePath(["/events", "/visitors"]);

  const handleDropdownClick = (event, name) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      event.preventDefault();
      setOpenDropdown((current) => (current === name ? null : name));
    } else {
      setOpenDropdown(name);
    }
  };

  const dropdownProps = (name) => ({
    onMouseEnter: () => {
      if (!window.matchMedia("(max-width: 900px)").matches) {
        setOpenDropdown(name);
      }
    },
    onMouseLeave: () => {
      if (!window.matchMedia("(max-width: 900px)").matches) {
        if (!document.activeElement || !document.activeElement.closest(`.csia-dropdown[data-dropdown="${name}"]`)) {
          setOpenDropdown(null);
        }
      }
    },
    onFocus: () => {
      if (!window.matchMedia("(max-width: 900px)").matches) setOpenDropdown(name);
    },
    onBlur: (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setOpenDropdown((current) => current === name ? null : current);
      }
    },
  });

  return (
    <header
      className="csia-header"
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        const isMobile = window.matchMedia("(max-width: 900px)").matches;
        setMenuOpen(false);
        setOpenDropdown(null);
        setCollaboratorsOpen(false);
        if (isMobile) menuToggleRef.current?.focus();
        else document.querySelector(".csia-brand")?.focus();
      }}
    >
      <div className="csia-header-inner">
        {/* BRAND */}
        <NavLink to="/" className="csia-brand" onClick={closeMenu}>
          <img
            src="/assets/csia-logo.png"
            alt="CSIA Logo"
            className="csia-logo"
          />

          <div className="csia-brand-text">
            <h1>
              {language === "hi"
                ? "साइबर सिस्टम्स उत्कृष्टता केंद्र"
                : "Center of Excellence in Cyber Systems"}
              <span>
                {language === "hi"
                  ? "एवं सूचना आश्वासन, आईआईटी दिल्ली"
                  : "and Information Assurance, IIT Delhi"}
              </span>
            </h1>
          </div>
        </NavLink>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          ref={menuToggleRef}
          className="csia-menu-toggle"
          onClick={() => {
            setMenuOpen((open) => !open);
            setOpenDropdown(null);
          }}
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={menuOpen}
          aria-controls="csia-navigation-menu"
        >
          <i
            className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
            aria-hidden="true"
          />
        </button>

        {/* NAVIGATION */}
        <nav className="csia-nav" aria-label={t("mainNavigation")}>
          <ul id="csia-navigation-menu" className={`csia-nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                {t("home")}
              </NavLink>
            </li>
            

            {/* PEOPLE */}
            <li
              className={`csia-dropdown ${peopleActive ? "parent-active" : ""} ${
                openDropdown === "people" ? "dropdown-open" : ""
              }`}
              data-dropdown="people"
              {...dropdownProps("people")}
            >
              <button
                type="button"
                className={`csia-dropdown-toggle ${
                  peopleActive ? "active" : ""
                }`}
                aria-expanded={openDropdown === "people"}
                aria-controls="csia-people-menu"
                onClick={(event) => handleDropdownClick(event, "people")}
              >
                {t("people")}
                <i
                  className={`fa-solid fa-chevron-down ${
                    openDropdown === "people" ? "chevron-open" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <ul id="csia-people-menu" className="csia-submenu">
                <li>
                  <NavLink to="/people" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-user-tie" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("faculty")}</strong><small>{t("facultyDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
                <li>
                  <NavLink to="/staff" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-id-card" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("staff")}</strong><small>{t("staffDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
                <li>
                  <NavLink to="/phd-students" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-user-graduate" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("phdStudents")}</strong><small>{t("phdStudentsDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
                <li>
                  <NavLink to="/pg-students" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-user-graduate" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("MTech Students")}</strong><small>{t("mtechStudentsDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
              </ul>
            </li>

            {/* ACADEMIC */}
            <li
              className={`csia-dropdown ${
                academicActive ? "parent-active" : ""
              } ${openDropdown === "academic" ? "dropdown-open" : ""}`}
              data-dropdown="academic"
              {...dropdownProps("academic")}
            >
              <button
                type="button"
                className={`csia-dropdown-toggle ${
                  academicActive ? "active" : ""
                }`}
                aria-expanded={openDropdown === "academic"}
                aria-controls="csia-academic-menu"
                onClick={(event) => handleDropdownClick(event, "academic")}
              >
                {t("academic")}
                <i
                  className={`fa-solid fa-chevron-down ${
                    openDropdown === "academic" ? "chevron-open" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <ul id="csia-academic-menu" className="csia-submenu">
                <li>
                  <NavLink to="/MTech-Admissions" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("mtechAdmissions")}</strong><small>{t("mtechAdmissionsDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
                <li>
                  <NavLink to="/FAQ" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-regular fa-circle-question" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("faq")}</strong><small>{t("faqDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
                <li>
                  <NavLink to="/shortlisting-criteria" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-list-check" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("shortlistingCriteria")}</strong><small>{t("shortlistingCriteriaDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
                <li>
                  <NavLink to="/admission-result" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-clipboard-check" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("admissionResults")}</strong><small>{t("admissionResultsDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink>
                </li>
              </ul>
            </li>

            {/* RESEARCH */}
            <li
              className={`csia-dropdown ${researchActive ? "parent-active" : ""} ${
                openDropdown === "research" ? "dropdown-open" : ""
              }`}
              data-dropdown="research"
              {...dropdownProps("research")}
            >
              <button
                type="button"
                className={`csia-dropdown-toggle ${researchActive ? "active" : ""}`}
                aria-expanded={openDropdown === "research"}
                aria-controls="csia-research-menu"
                onClick={(event) => handleDropdownClick(event, "research")}
              >
                {t("research")}
                <i className={`fa-solid fa-chevron-down ${openDropdown === "research" ? "chevron-open" : ""}`} aria-hidden="true" />
              </button>
              <ul id="csia-research-menu" className="csia-submenu research-submenu">
                <li className="research-menu-item"><NavLink to="/research" onClick={closeMenu}><span className="research-menu-icon"><i className="fa-solid fa-user-group" aria-hidden="true" /></span><span className="research-menu-copy"><strong>{t("associatedFacultyMembers")}</strong><small>{t("facultyExpertiseDescription")}</small></span><i className="fa-solid fa-arrow-right research-menu-arrow" aria-hidden="true" /></NavLink></li>
                <li className={`csia-dropdown csia-nested-dropdown research-menu-item ${collaboratorsOpen ? "dropdown-open" : ""}`}>
                  <button type="button" className="csia-dropdown-toggle research-menu-collaborators" aria-expanded={collaboratorsOpen} aria-controls="csia-collaborators-menu" onFocus={() => { if (!window.matchMedia("(max-width: 900px)").matches) setCollaboratorsOpen(true); }} onClick={() => setCollaboratorsOpen((open) => !open)}>
                    <span className="research-menu-icon"><i className="fa-solid fa-handshake" aria-hidden="true" /></span><span className="research-menu-copy"><strong>{t("collaborators")}</strong><small>{t("collaboratorsDescription")}</small></span><i className={`fa-solid fa-chevron-down research-menu-arrow ${collaboratorsOpen ? "chevron-open" : ""}`} aria-hidden="true" />
                  </button>
                  <ul id="csia-collaborators-menu" className="csia-submenu collaborators-submenu">
                    <li><a href="https://nebraska.edu" target="_blank" rel="noreferrer" onClick={closeMenu}>University of Nebraska-USA</a></li>
                    <li><a href="https://taltech.ee/en" target="_blank" rel="noreferrer" onClick={closeMenu}>Tallinn University of Technology</a></li>
                    <li><a href="https://www.kyushu-u.ac.jp/en" target="_blank" rel="noreferrer" onClick={closeMenu}>Kyushu University-Japan</a></li>
                    <li><a href="https://umbc.edu" target="_blank" rel="noreferrer" onClick={closeMenu}>University of Maryland</a></li>
                    <li><a href="https://www.albany.edu" target="_blank" rel="noreferrer" onClick={closeMenu}>University at Albany</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* ACTIVITIES */}
            <li
              className={`csia-dropdown ${activitiesActive ? "parent-active" : ""} ${openDropdown === "activities" ? "dropdown-open" : ""}`}
              data-dropdown="activities"
              {...dropdownProps("activities")}
            >
              <button
                type="button"
                className={`csia-dropdown-toggle ${activitiesActive ? "active" : ""}`}
                aria-expanded={openDropdown === "activities"}
                aria-controls="csia-activities-menu"
                onClick={(event) => handleDropdownClick(event, "activities")}
              >
                {t("activities")}
                <i className={`fa-solid fa-chevron-down ${openDropdown === "activities" ? "chevron-open" : ""}`} aria-hidden="true" />
              </button>
              <ul id="csia-activities-menu" className="csia-submenu activities-submenu">
                <li><NavLink to="/events" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-calendar-days" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("events")}</strong><small>{t("eventsDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink></li>
                <li><NavLink to="/visitors" onClick={closeMenu} className="nav-feature-link"><span className="nav-feature-icon"><i className="fa-solid fa-user-group" aria-hidden="true" /></span><span className="nav-feature-copy"><strong>{t("visitors")}</strong><small>{t("visitorsDescription")}</small></span><i className="fa-solid fa-arrow-right nav-feature-arrow" aria-hidden="true" /></NavLink></li>
              </ul>
            </li>

            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                {t("contactUs")}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
