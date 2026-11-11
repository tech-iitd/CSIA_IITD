import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const galleryPhotos = [
  {
    src: "/assets/1.jpg",
    alt: "IITD–NU Joint Workshop on Cyber Security event sign at IIT Delhi",
    caption: "IITD–NU Joint Workshop on Cyber Security",
    category: "WORKSHOP · 2014",
  },
  {
    src: "/assets/2.jpg",
    alt: "Panel discussion with speakers at a cybersecurity event",
    caption: "Cybersecurity panel discussion",
    category: "DISCUSSION",
  },
  {
    src: "/assets/3.jpg",
    alt: "Presentation on reverse engineering and static analysis tools",
    caption: "Reverse Engineering session",
    category: "TECHNICAL TALK",
  },
  {
    src: "/assets/4.jpg",
    alt: "Panelists seated at a cybersecurity workshop",
    caption: "Expert panel session",
    category: "WORKSHOP",
  },
  {
    src: "/assets/5.jpg",
    alt: "Participants attending a cybersecurity workshop",
    caption: "Workshop participants",
    category: "COMMUNITY",
  },
  {
    src: "/assets/6.jpg",
    alt: "Speaker presenting at the IITD–NU Joint Workshop on Cyber Security",
    caption: "Guest speaker",
    category: "WORKSHOP",
  },
  {
    src: "/assets/7.jpg",
    alt: "Audience attending a cybersecurity workshop lecture",
    caption: "Cybersecurity lecture",
    category: "LEARNING",
  },
  {
    src: "/assets/8.jpg",
    alt: "Speaker addressing a large audience at a cybersecurity workshop",
    caption: "Cybersecurity workshop lecture",
    category: "WORKSHOP",
  },
  {
    src: "/assets/a.jpg",
    alt: "Speaker addressing participants at a cybersecurity workshop",
    caption: "Workshop keynote",
    category: "WORKSHOP",
  },
  {
    src: "/assets/a1.jpg",
    alt: "Inauguration ceremony at the IITD–NU Joint Workshop on Cyber Security",
    caption: "Workshop inauguration",
    category: "CEREMONY",
  },
  {
    src: "/assets/a2.jpg",
    alt: "Academic partners signing a collaboration agreement",
    caption: "Academic partnership",
    category: "COLLABORATION",
  },
];

function Gallery() {
  const [activePhoto, setActivePhoto] = useState(null);


  useEffect(() => {
    if (activePhoto === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") {
        setActivePhoto((index) => (index + 1) % galleryPhotos.length);
      }
      if (event.key === "ArrowLeft") {
        setActivePhoto((index) => (index - 1 + galleryPhotos.length) % galleryPhotos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <section className="content-section home-activities-section home-gallery" id="iitd-nu-workshop-gallery">
      <div className="home-gallery-heading">
        <div>
          <div className="section-label">Workshop Gallery</div>
          <h2 className="section-title">IITD–NU Joint Workshop on Cyber Security</h2>
          <p>Photos from 7–8 February 2014 at Bharti School, IIT Delhi.</p>
        </div>
      </div>

      <div className="home-gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <button
            type="button"
            className="home-gallery-card"
            key={photo.src}
            onClick={() => setActivePhoto(index)}
            aria-label={`View photo: ${photo.caption}`}
          >
            <span className="home-gallery-image-wrap">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="home-gallery-zoom" aria-hidden="true">
                <i className="fa-solid fa-up-right-and-down-left-from-center" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {activePhoto !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActivePhoto(null);
          }}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo viewer"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={() => setActivePhoto((activePhoto - 1 + galleryPhotos.length) % galleryPhotos.length)}
            aria-label="Previous photo"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <figure className="gallery-lightbox-figure">
            <img src={galleryPhotos[activePhoto].src} alt={galleryPhotos[activePhoto].alt} />
          </figure>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={() => setActivePhoto((activePhoto + 1) % galleryPhotos.length)}
            aria-label="Next photo"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;

