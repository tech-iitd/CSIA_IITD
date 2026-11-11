import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import Stats from "./Stats";
import HomeResearchAreas from "./HomeResearchAreas";
import Timeline from "./Timeline";
import Cards from "./Cards";
import Academic from "./Academic";
import SecurityHygiene from "./SecurityHygiene";
import Gallery from "./Gallery";

import People from "./People";
import VireshwerProfile from "./VireshwerProfile";

import Research from "./Research";
import RanjanProfile from "./RanjanProfile";
import SarangiProfile from "./SarangiProfile";
import HuzurProfile from "./HuzurProfile";
import HarshanProfile from "./HarshanProfile";
import SuriProfile from "./SuriProfile";
import ShankarProfile from "./ShankarProfile";
import SaifProfile from "./SaifProfile";
import SharmaProfile from "./SharmaProfile";
import JaiswalProfile from "./JaiswalProfile";
import SanjivaProfile from "./SanjivaProfile";
import SarojProfile from "./SarojProfile";
import SPSinghProfile from "./SPSinghProfile";
import NiladriProfile from "./NiladriProfile";
import BhallaProfile from "./BhallaProfile";
import MpguptaProfile from "./Mpguptaprofile";
import ArpanProfile from "./ArpanProfile";
import VigneswaraProfile from "./VigneswaraProfile";
import RaviProfile from "./RaviProfile";
import PanigrahiProfile from "./PanigrahiProfile";
import SenroyProfile from "./SenroyProfile";
import BhimProfile from "./BhimProfile";
import PriyankaProfile from "./PriyankaProfile";
import RajendraProfile from "./RajendraProfile";
import KolinProfile from "./KolinProfile";
import PiyushProfile from "./PiyushProfile";
import VaishnaviProfile from "./VaishnaviProfile";
import AshokProfile from "./AshokProfile";
import SoravProfile from "./SoravProfile";
import VenkataProfile from "./VenkataProfile";
import HParsadProfile from "./HParsadProfile";
import RKsharmaProfile from "./RKsharmaProfile";
import ArpancProfile from "./ArpancProfile";
import AnupamProfile from "./AnupamProfile";
import KarunaProfile from "./KarunaProfile";
import Staff from "./Staff";
import PhDStudents from "./PhDStudents";
import PGStudents from "./PGStudents";
import PGStudents26 from "./PGStudents26";
import PGStudents25 from "./PGStudents25";
import PGStudents24 from "./PGStudents24";
import PGStudents23 from "./PGStudents23";
import PGStudents22 from "./PGStudents22";
import PGStudents21 from "./PGStudents21";
import ShortlistingCriteria from "./ShortlistingCriteria";
import MTechAdmissions from "./MTechAdmissions";
import AdmissionResult from "./AdmissionResult";
import FAQ from "./FAQ";
import Events from "./Events";
import Visitors from "./Visitors";

import Contact from "./Contact";


const slides = [
  {
    image: "/assets/cyber system.jpg",
    alt: "Cybersecurity concept illustration",
  },
  {
    image: "/assets/a.jpg",
    alt: "Cybersecurity workshop audience and speaker",
  },
  {
    image: "/assets/a1.jpg",
    alt: "IITD–NU Joint Workshop on Cyber Security inauguration",
  },
  {
    image: "/assets/a2.jpg",
    alt: "Academic partners formalizing a collaboration",
  },
];

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    // Reset synchronously on route changes, before the browser paints the new
    // page. Override the site's smooth-scroll setting for this one reset.
    if (pathname !== "/" || !hash) {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      root.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousBehavior;
      });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }

      const stickyNavHeight = document.querySelector(".sticky-navbar")?.getBoundingClientRect().height ?? 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - stickyNavHeight;
      window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  // ---------------- NEXT SLIDE ----------------
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  // ---------------- PREVIOUS SLIDE ----------------
  const previousSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  }, []);

 
  // ---------------- AUTO SLIDE ----------------
  const [reduceMotion, setReduceMotion] = useState(
    () => document.documentElement.classList.contains("reduce-motion-mode")
  );

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      setReduceMotion(root.classList.contains("reduce-motion-mode"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || heroPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reduceMotion, heroPaused]);


  // ---------------- KEYBOARD CONTROL ----------------
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide]);

  // ---------------- JSX ----------------

return (
  <BrowserRouter>
   <RouteScrollManager />
   <Header/>
   
    <div className="sticky-navbar">
    <Navbar />
</div>
    <Routes>
      <Route
        path="/"
        element={
          <main className="container" id="home">
            <Hero
              slides={slides}
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              previousSlide={previousSlide}
              setCurrentSlide={setCurrentSlide}
              setHeroPaused={setHeroPaused}
            />
            <Intro />
            <Stats />
            <HomeResearchAreas />
            <Timeline />
            <Cards />
            <Academic />
          </main>
        }
      />

<Route
  path="/research"
  element={<Research />}
  />
  <Route
  path="/shortlisting-criteria"
  element={<ShortlistingCriteria />}
/>
<Route
 path="/mtech-admissions"
  element={<MTechAdmissions />}
   />
<Route
  path="/admission-result"
  element={<AdmissionResult />}
/>
<Route
  path="/faq"
  element={<FAQ />}
/>
<Route
  path="/people"
  element={<People />}
/>
     
      <Route
  path="/faculty/vireshwer"
  element={<VireshwerProfile />}
/>
      <Route
  path="/faculty/ranjan-bose"
  element={<RanjanProfile />}
/>
      <Route
  path="/faculty/smruti-sarangi"
  element={<SarangiProfile />}
/>
<Route
  path="/faculty/huzur-saran"
  element={<HuzurProfile />}
/>
<Route
  path="/faculty/harshan-jagadeesh"
  element={<HarshanProfile />}
/>
<Route
  path="/faculty/manan-suri"
  element={<SuriProfile />}
/>
<Route
  path="/faculty/shankar-prakriya"
  element={<ShankarProfile />}
/>
<Route
  path="/faculty/saif-k-mohammed"
  element={<SaifProfile />}
/>
<Route
  path="/faculty/subodh-sharma"
  element={<SharmaProfile />}
/>
<Route
  path="/faculty/ragesh-jaiswal"
  element={<JaiswalProfile />}
/>
<Route
  path="/faculty/sanjiva-prasad"
  element={<SanjivaProfile />}
/>
<Route
  path="/faculty/saroj-kaushik"
  element={<SarojProfile />}
/>
<Route
  path="/faculty/s-p-singh"
  element={<SPSinghProfile />}
/>
<Route
  path="/faculty/niladri-chatterjee"
  element={<NiladriProfile />}
/>
<Route
  path="/faculty/suresh-bhalla"
  element={<BhallaProfile />}
/>
<Route
  path="/faculty/m-p-gupta"
  element={<MpguptaProfile />}
/>
<Route
  path="/faculty/arpan-kumar-kar"
  element={<ArpanProfile />}
/>
<Route
  path="/faculty/p-vigneswara-ilavarasan"
  element={<VigneswaraProfile />}
/>
<Route
  path="/faculty/ravi-shankar"
  element={<RaviProfile />}
/>
<Route
  path="/faculty/b-k-panigrahi"
  element={<PanigrahiProfile />}
/>
<Route
  path="/faculty/nilanjan-senroy"
  element={<SenroyProfile />}
  />
  <Route
  path="/faculty/bhim-singh"
  element={<BhimProfile />}
  />
  <Route
  path="/faculty/priyanka-golia"
  element={<PriyankaProfile />}
/>
<Route
  path="/faculty/rajendra-kumar"
  element={<RajendraProfile />}
/>
<Route
  path="/faculty/kolin-paul"
  element={<KolinProfile />}
/>
<Route
  path="/faculty/piyush-kumar-sharma"
  element={<PiyushProfile />}
/>
<Route
  path="/faculty/vaishnavi-sundararajan"
  element={<VaishnaviProfile />}
/>
<Route
  path="/faculty/ashok-k-bhateja"
  element={<AshokProfile />}
/>
<Route
  path="/faculty/sorav-bansal"
  element={<SoravProfile />}
/>
<Route
  path="/faculty/venkata-vivek-kumar-koppula"
  element={<VenkataProfile />}
/>
<Route
  path="/faculty/hariprasad-kodamana"
  element={<HParsadProfile />}
  />
  
<Route
  path="/faculty/r-k-sharma"
  element={<RKsharmaProfile />}
  />
   
<Route
  path="/faculty/arpan-chattopadhyay"
  element={<ArpancProfile />}
  />
  <Route
  path="/visiting-staff/anupam-joshi"
  element={<AnupamProfile />}
/>

<Route
  path="/visiting-staff/karuna-pande-joshi"
  element={<KarunaProfile />}
/>
<Route
  path="/staff"
  element={<Staff />} 
  />
  <Route
  path="/phd-students"
  element={<PhDStudents />}
/>
<Route path="/pg-students" element={<PGStudents />} />
<Route path="/pg-students/2026" element={<PGStudents26 />} />
<Route path="/pg-students/2025" element={<PGStudents25 />} />
<Route path="/pg-students/2024" element={<PGStudents24 />} />
<Route path="/pg-students/2023" element={<PGStudents23 />} />
<Route path="/pg-students/2022" element={<PGStudents22 />} />
<Route path="/pg-students/2021" element={<PGStudents21 />} />

<Route path="/events" element={<Events />} />
<Route path="/workshop-gallery" element={<main className="workshop-gallery-page"><Gallery /></main>} />
<Route path="/visitors" element={<Visitors />} />

<Route
  path="/security-hygiene"
  element={<SecurityHygiene />}
/>

<Route path="/contact" element={<Contact />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
}
 export default App;
 