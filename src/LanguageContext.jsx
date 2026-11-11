
import { useState } from "react";
import LanguageContext from "./language-context.js";

const translations = {
  en: {
    home: "Home",
    awards: "Awards",
    people: "People",
    faculty: "Faculty",
    staff: "Staff",
    phdStudents: "PhD Students",
    pgStudents: "PG Students",
    collaborators: "Collaborators",
    academic: "Academic",
    mtechAdmissions: "M.Tech Admissions",
    faq: "FAQ",
    shortlistingCriteria: "Shortlisting Criteria",
    admissionResults: "Admissions Results",
    research: "Research",
    activities: "Activities",
    workshops: "Workshops",
    events: "Events",
    visitors: "Visitors",
    gallery: "Gallery",
    security: "Security",
    contactUs: "Contact Us",
    accessibility: "Accessibility",
    increaseText: "Increase Text",
    decreaseText: "Decrease Text",
    highContrast: "High Contrast",
    underlineLinks: "Underline Links",
    reduceMotion: "Reduce Motion",
    reset: "Reset",
    search: "Search",
    searchThisPage: "Search this page...",
    mainNavigation: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    facultyDescription: "Meet our faculty and researchers",
    staffDescription: "Administrative and technical team",
    phdStudentsDescription: "Doctoral scholars and their work",
    pgStudentsDescription: "Postgraduate students and cohorts",
    mtechAdmissionsDescription: "Programme details and admissions",
    faqDescription: "Answers to common questions",
    shortlistingCriteriaDescription: "Selection process and criteria",
    admissionResultsDescription: "Check published admission results",
    associatedFacultyMembers: "Associated Faculty Members",
    facultyExpertiseDescription: "Explore faculty expertise",
    collaboratorsDescription: "Academic and industry partners",
    eventsDescription: "Workshops, talks and centre programmes",
    visitorsDescription: "Visitor and academic engagements",
    footerCenterName: "Center of Excellence in Cyber Systems and Information Assurance",
    contactAddress: "Contact Address",
    emailLabel: "Email",
    quickLinks: "Quick Links",
    securityHygiene: "Security Hygiene",
    developedBy: "Developed by",
    iitDelhiFullName: "Indian Institute of Technology Delhi",
  },

  hi: {
    home: "मुखपृष्ठ",
    awards: "पुरस्कार",
    people: "सदस्य",
    faculty: "संकाय सदस्य",
    staff: "कर्मचारी",
    phdStudents: "पीएच.डी. विद्यार्थी",
    pgStudents: "पीजी विद्यार्थी",
    collaborators: "सहयोगी संस्थान",
    academic: "शैक्षणिक",
    mtechAdmissions: "एम.टेक. प्रवेश",
    faq: "अक्सर पूछे जाने वाले प्रश्न",
    shortlistingCriteria: "चयन हेतु मानदंड",
    admissionResults: "प्रवेश परिणाम",
    research: "अनुसंधान",
    activities: "गतिविधियाँ",
    workshops: "कार्यशालाएँ",
    events: "कार्यक्रम",
    visitors: "आगंतुक",
    gallery: "चित्र दीर्घा",
    security: "सुरक्षा",
    contactUs: "संपर्क करें",
    accessibility: "सुगम्यता",
    increaseText: "अक्षरों का आकार बढ़ाएँ",
    decreaseText: "अक्षरों का आकार घटाएँ",
    highContrast: "उच्च कंट्रास्ट",
    underlineLinks: "लिंक रेखांकित करें",
    reduceMotion: "गतिशीलता कम करें",
    reset: "रीसेट करें",
    search: "खोजें",
    searchThisPage: "इस पृष्ठ पर खोजें...",
    mainNavigation: "मुख्य नेविगेशन",
    openMenu: "मेनू खोलें",
    closeMenu: "मेनू बंद करें",
    facultyDescription: "हमारे संकाय सदस्यों और शोधकर्ताओं से मिलें",
    staffDescription: "प्रशासनिक एवं तकनीकी टीम",
    phdStudentsDescription: "पीएच.डी. शोधार्थी और उनका कार्य",
    pgStudentsDescription: "स्नातकोत्तर विद्यार्थी और उनके समूह",
    mtechAdmissionsDescription: "कार्यक्रम की जानकारी और प्रवेश",
    faqDescription: "सामान्य प्रश्नों के उत्तर",
    shortlistingCriteriaDescription: "चयन प्रक्रिया और मानदंड",
    admissionResultsDescription: "प्रकाशित प्रवेश परिणाम देखें",
    associatedFacultyMembers: "संबद्ध संकाय सदस्य",
    facultyExpertiseDescription: "संकाय विशेषज्ञता देखें",
    collaboratorsDescription: "शैक्षणिक एवं औद्योगिक भागीदार",
    eventsDescription: "कार्यशालाएँ, वार्ताएँ और केंद्र के कार्यक्रम",
    visitorsDescription: "आगंतुक एवं शैक्षणिक सहभागिताएँ",
    footerCenterName: "साइबर सिस्टम्स एवं सूचना आश्वासन उत्कृष्टता केंद्र",
    contactAddress: "संपर्क का पता",
    emailLabel: "ईमेल",
    quickLinks: "त्वरित लिंक",
    securityHygiene: "साइबर सुरक्षा जागरूकता",
    developedBy: "निर्माता",
    iitDelhiFullName: "भारतीय प्रौद्योगिकी संस्थान दिल्ली",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("csia-language") === "hi"
        ? "hi"
        : "en";
    } catch {
      return "en";
    }
  });

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === "en" ? "hi" : "en";

      try {
        localStorage.setItem("csia-language", next);
      } catch {
        // Language still changes for the current session.
      }

      return next;
    });
  };

  const t = (key) => translations[language]?.[key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
