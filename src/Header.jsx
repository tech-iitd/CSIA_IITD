
import { useLanguage } from "./useLanguage.js";
import { useEffect, useState } from "react";

const DEFAULT_SETTINGS = {
  fontSize: 100,
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
};

function loadAccessibilitySettings() {
  try {
    const saved = localStorage.getItem("csia-accessibility-settings");

    if (saved) {
      return {
        ...DEFAULT_SETTINGS,
        ...JSON.parse(saved),
      };
    }
  } catch (error) {
    console.warn("Could not load accessibility settings.", error);
  }

  return { ...DEFAULT_SETTINGS };
}

function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const [settings, setSettings] = useState(loadAccessibilitySettings);

  const {
    fontSize,
    highContrast,
    underlineLinks,
    reduceMotion,
  } = settings;

  // Save accessibility settings
  useEffect(() => {
    try {
      localStorage.setItem(
        "csia-accessibility-settings",
        JSON.stringify(settings)
      );
    } catch (error) {
      console.warn("Could not save accessibility settings.", error);
    }
  }, [settings]);

  // Apply font scaling
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accessibility-font-scale",
      String(fontSize / 100)
    );

    document.documentElement.classList.add(
      "accessibility-font-scaling"
    );
  }, [fontSize]);

  // Apply accessibility options
  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("high-contrast-mode", highContrast);
    root.classList.toggle("underline-all-links", underlineLinks);
    root.classList.toggle("reduce-motion-mode", reduceMotion);

    return () => {
      root.classList.remove(
        "high-contrast-mode",
        "underline-all-links",
        "reduce-motion-mode"
      );
    };
  }, [highContrast, underlineLinks, reduceMotion]);

  const updateSetting = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const resetAccessibility = () => {
    setSettings({ ...DEFAULT_SETTINGS });
  };

  return (
    <header className="institutional-header">
      <div className="institutional-inner">
        {/* LEFT SIDE */}
        <div className="email">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>

          <a href="mailto:hodcsia@admin.iitd.ac.in">
            hodcsia@admin.iitd.ac.in
          </a>

          <a href="tel:+91-11-2659-6061">
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
            {language === "hi" ? "कार्यालय" : "Office"}
          </a>

          <a
            href="https://maps.google.com/?q=IIT+Delhi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
            {language === "hi" ? "स्थान" : "Location"}
          </a>

          <a
            href="https://home.iitd.ac.in/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-globe" aria-hidden="true"></i>
            IIT Delhi
          </a>
        </div>

        {/* RIGHT SIDE */}
       <div className="institutional-right">
  <a href="/contact">{t("contactUs")}</a>

          {/* ACCESSIBILITY MENU */}
          <div
            className="accessibility-wrapper"
            onMouseEnter={() => setAccessibilityOpen(true)}
            onMouseLeave={() => setAccessibilityOpen(false)}
          >
            <button
              type="button"
              className="accessibility-button"
              aria-expanded={accessibilityOpen}
              aria-haspopup="true"
              onClick={() =>
                setAccessibilityOpen((open) => !open)
              }
            >
              <i
                className="fa-solid fa-universal-access"
                aria-hidden="true"
              ></i>

              {t("accessibility")}

              <i
                className={`fa-solid ${
                  accessibilityOpen
                    ? "fa-chevron-up"
                    : "fa-chevron-down"
                }`}
                aria-hidden="true"
              ></i>
            </button>

            {accessibilityOpen && (
              <div className="accessibility-menu">
                <button
                  type="button"
                  onClick={() =>
                    updateSetting(
                      "fontSize",
                      Math.min(fontSize + 10, 130)
                    )
                  }
                  disabled={fontSize >= 130}
                >
                  <strong>A+</strong> {t("increaseText")}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateSetting(
                      "fontSize",
                      Math.max(fontSize - 10, 80)
                    )
                  }
                  disabled={fontSize <= 80}
                >
                  <strong>A−</strong> {t("decreaseText")}
                </button>

                <button
                  type="button"
                  aria-pressed={highContrast}
                  onClick={() =>
                    updateSetting("highContrast", !highContrast)
                  }
                >
                  <i
                    className="fa-solid fa-circle-half-stroke"
                    aria-hidden="true"
                  ></i>
                  {t("highContrast")} {highContrast ? "✓" : ""}
                </button>

                <button
                  type="button"
                  aria-pressed={underlineLinks}
                  onClick={() =>
                    updateSetting("underlineLinks", !underlineLinks)
                  }
                >
                  <i className="fa-solid fa-link" aria-hidden="true"></i>
                  {t("underlineLinks")} {underlineLinks ? "✓" : ""}
                </button>

                <button
                  type="button"
                  aria-pressed={reduceMotion}
                  onClick={() =>
                    updateSetting("reduceMotion", !reduceMotion)
                  }
                >
                  <i className="fa-solid fa-pause" aria-hidden="true"></i>
                  {t("reduceMotion")} {reduceMotion ? "✓" : ""}
                </button>

                <button
                  type="button"
                  onClick={resetAccessibility}
                >
                  <i
                    className="fa-solid fa-rotate-left"
                    aria-hidden="true"
                  ></i>
                  {t("reset")}
                </button>
              </div>
            )}
          </div>

          {/* LANGUAGE TOGGLE */}
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? "Switch to Hindi"
                : "Switch to English"
            }
          >
            <span className="language-symbol" aria-hidden="true">
              अ/A
            </span>

            <span>
              {language === "en" ? "हिन्दी" : "English"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
