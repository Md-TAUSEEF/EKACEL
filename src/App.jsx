import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
import ContactPopup from "./components/ContactPopup";

import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const title = t(
      "EKACEL Energy Solutions — Battery & Energy Solutions",
    );

    const description = t(
      "Reliable battery and energy solutions for homes, businesses, mobility and industries.",
    );

    document.title = title;

    const setMeta = (selector, attributes, content) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");

        Object.entries(attributes).forEach(([key, value]) =>
          element.setAttribute(key, value),
        );

        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta(
      'meta[name="description"]',
      { name: "description" },
      description,
    );

    setMeta(
      'meta[property="og:title"]',
      { property: "og:title" },
      title,
    );

    setMeta(
      'meta[property="og:description"]',
      { property: "og:description" },
      description,
    );

    document.documentElement.dataset.route = location.pathname;
  }, [location.pathname, t]);

  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden">
      
      <ScrollToTop />

      <Navbar />

      <main className="w-full max-w-full flex-1">
        <AppRoutes />
      </main>

      <Footer />

      {/* SMART AUTO CONTACT POPUP */}
      <ContactPopup />

    </div>
  );
}