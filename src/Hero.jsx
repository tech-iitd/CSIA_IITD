import { Link } from "react-router-dom";
import { useLanguage } from "./useLanguage.js";

function Hero({
  slides,
  currentSlide,
  nextSlide,
  previousSlide,
  setCurrentSlide,
  setHeroPaused,
}) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section
      className="hero"
      onMouseEnter={() => setHeroPaused(true)}
      onMouseLeave={() => setHeroPaused(false)}
      onFocusCapture={() => setHeroPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHeroPaused(false);
        }
      }}
      aria-label={isHindi ? "सीएसआईए परिचय" : "CSIA introduction"}
    >
      <div className="hero-slides" aria-live="polite">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? "active" : ""}`}
            key={slide.image}
            aria-hidden={index !== currentSlide}
          >
            <img src={slide.image} alt={index === currentSlide ? slide.alt : ""} />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <span className="tag">
          {isHindi ? "साइबर सुरक्षा" : "CYBERSECURITY"}
        </span>
        <h2>
          {isHindi ? (
            <>सुरक्षित साइबर सिस्टम<br />को आगे बढ़ाना</>
          ) : (
            <>Advancing Secure<br />Cyber Systems</>
          )}
        </h2>
        <p>
          {isHindi
            ? "साइबर सुरक्षा, साइबर सिस्टम और सूचना आश्वासन के क्षेत्र में बहुविषयक शिक्षा, अनुसंधान और नवाचार।"
            : "Interdisciplinary education, research and innovation in cybersecurity, cyber systems and information assurance."}
        </p>
        <div className="hero-actions">
<Link to="/research" className="hero-secondary-button">
            {isHindi ? "अनुसंधान देखें" : "Explore Research"}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <button type="button" className="carousel-btn prev" onClick={previousSlide}
        aria-label={isHindi ? "पिछली स्लाइड" : "Previous slide"}>
        <i className="fa-solid fa-arrow-left" aria-hidden="true" />
      </button>
      <button type="button" className="carousel-btn next" onClick={nextSlide}
        aria-label={isHindi ? "अगली स्लाइड" : "Next slide"}>
        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </button>
      <div className="carousel-dots" role="group" aria-label={isHindi ? "स्लाइड चुनें" : "Choose a slide"}>
        {slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={isHindi ? `स्लाइड ${index + 1}` : `Slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
          />
        ))}
      </div>
      <div className="hero-progress" aria-hidden="true">
        <span key={currentSlide} />
      </div>
    </section>
  );
}

export default Hero;
