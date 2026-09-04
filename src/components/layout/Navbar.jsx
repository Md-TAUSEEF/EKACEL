// src/components/layout/Navbar.jsx

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Globe2,
  Menu,
  X,
  ShoppingCart,
} from "lucide-react";

import DesktopDropdown from "./DesktopDropdown";
import MobileMenu from "./MobileMenu";

import {
  primaryNav,
  secondaryNav,
  utilityLinks,
} from "../../data/navigation";

import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  // =========================================================
  // CART COUNT
  // =========================================================

  const [cartCount, setCartCount] = useState(0);

  const headerRef = useRef(null);
  const mainNavRef = useRef(null);

  const location = useLocation();

  const {
    language,
    changeLanguage,
    currentLanguage,
    languages,
    t,
    tn,
  } = useLanguage();

  // =========================================================
  // UPDATE CART COUNT
  // =========================================================

  const updateCartCount = () => {
    try {
      const savedCart = localStorage.getItem("voltnova_cart");

      if (!savedCart) {
        setCartCount(0);
        return;
      }

      const cart = JSON.parse(savedCart);

      if (!Array.isArray(cart)) {
        setCartCount(0);
        return;
      }

      const total = cart.reduce(
        (sum, item) => sum + (Number(item.quantity) || 1),
        0,
      );

      setCartCount(total);
    } catch (error) {
      console.error("Failed to update cart count:", error);
      setCartCount(0);
    }
  };

  // =========================================================
  // CART LISTENER
  // =========================================================

  useEffect(() => {
    // Initial cart count
    updateCartCount();

    // Same-tab cart updates
    window.addEventListener("cartUpdated", updateCartCount);

    // Other-tab cart updates
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount,
      );

      window.removeEventListener(
        "storage",
        updateCartCount,
      );
    };
  }, []);

  /* =========================================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setLanguageOpen(false);
  }, [location.pathname]);

  /* =========================================================
     DETECT SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint =
        window.innerWidth >= 1024 ? 33 : 0;

      setIsScrolled(window.scrollY > triggerPoint);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     ESCAPE + OUTSIDE CLICK
  ========================================================= */

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
        setLanguageOpen(false);
      }
    }

    function handlePointerDown(e) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setActiveMenu(null);
        setLanguageOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    document.addEventListener(
      "mousedown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      document.removeEventListener(
        "mousedown",
        handlePointerDown,
      );
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative z-[9999] w-full"
    >
      {/* =====================================================
          TOP UTILITY BAR
      ====================================================== */}

      <div className="hidden border-b border-slate-line/70 bg-navy-dark lg:block">
        <div className="flex items-center justify-end gap-6 px-[30px] py-2 text-xs font-medium text-white/70">
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="transition-colors hover:text-white"
            >
              {tn(link.label)}
            </Link>
          ))}
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR PLACEHOLDER
      ====================================================== */}

      {isScrolled && (
        <div
          aria-hidden="true"
          className="h-[76px]"
        />
      )}

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div
        ref={mainNavRef}
        className={`
          ${isScrolled ? "fixed left-0 top-0" : "relative"}
          z-[9999]
          w-full
          border-b
          border-slate-line
          bg-white/95
          backdrop-blur-md
          transition-shadow
          duration-200
          ${
            isScrolled
              ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              : ""
          }
        `}
      >
        <div className="px-[30px] sm:px-[30px]">
          <div className="flex h-[76px] items-center justify-between gap-4">

            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              to="/"
              className="flex shrink-0 items-center"
              aria-label={t("EKACEL Energy home")}
            >
              <img
                src="/images/logo.png"
                alt={t("EKACEL Energy")}
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="relative hidden h-full items-center lg:flex"
              onMouseLeave={() =>
                setActiveMenu(null)
              }
            >
              {primaryNav.map((menu) => (
                <div
                  key={menu.key}
                  className="relative flex h-full items-center"
                >
                  <Link
                    to={menu.href}
                    onMouseEnter={() =>
                      setActiveMenu(menu.key)
                    }
                    onFocus={() =>
                      setActiveMenu(menu.key)
                    }
                    className={`
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      px-4
                      py-2.5
                      text-[0.92rem]
                      font-semibold
                      leading-none
                      tracking-[-0.01em]
                      transition-colors
                      ${
                        activeMenu === menu.key
                          ? "bg-slate-surface text-teal-light"
                          : "text-navy hover:text-teal-light"
                      }
                    `}
                  >
                    {tn(menu.label)}

                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`
                        transition-transform
                        duration-200
                        ${
                          activeMenu === menu.key
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </Link>

                  {activeMenu === menu.key && (
                    <DesktopDropdown
                      items={menu.items}
                      onNavigate={() =>
                        setActiveMenu(null)
                      }
                    />
                  )}
                </div>
              ))}

              {/* =================================================
                  SECONDARY NAVIGATION
              ================================================== */}

              {secondaryNav.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className="
                    rounded-full
                    px-4
                    py-2.5
                    text-[0.92rem]
                    font-semibold
                    leading-none
                    tracking-[-0.01em]
                    text-navy
                    transition-colors
                    hover:text-teal-light
                  "
                >
                  {tn(link.label)}
                </Link>
              ))}
            </nav>

            {/* =================================================
                RIGHT ACTIONS
            ================================================== */}

            <div className="flex shrink-0 items-center gap-2.5">

              {/* =================================================
                  CART ICON
              ================================================== */}

              <Link
                to="/cart"
                title={t("nav.cart")}
                aria-label={`${t("nav.cart")} (${cartCount})`}
                className="
                  group
                  relative
                  hidden
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-teal-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-teal-200
                  hover:bg-teal-50
                  hover:shadow-md
                  lg:inline-flex
                "
              >
                <ShoppingCart
                  className="
                    h-[18px]
                    w-[18px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  strokeWidth={2}
                />

                {/* =================================================
                    CART BADGE
                ================================================== */}

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -right-1.5
                      -top-1.5
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-red-500
                      px-1
                      text-[10px]
                      font-extrabold
                      leading-none
                      text-white
                      shadow-sm
                      ring-2
                      ring-white
                    "
                  >
                    {cartCount > 99
                      ? "99+"
                      : cartCount}
                  </span>
                )}
              </Link>

              {/* =================================================
                  LANGUAGE SELECTOR
              ================================================== */}

              <div className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={() =>
                    setLanguageOpen(
                      (open) => !open,
                    )
                  }
                  className="
                    group
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-3
                    text-sm
                    font-semibold
                    text-slate-800
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-teal-200
                    hover:bg-teal-50
                    hover:text-teal-700
                    hover:shadow-md
                  "
                  aria-expanded={languageOpen}
                  aria-haspopup="menu"
                >
                  <Globe2
                    className="
                      h-[17px]
                      w-[17px]
                      text-teal-700
                    "
                    strokeWidth={2}
                  />

                  <span className="text-base">
                    {currentLanguage.flag}
                  </span>

                  <span className="hidden xl:inline">
                    {currentLanguage.code.toUpperCase()}
                  </span>

                  {languageOpen ? (
                    <ChevronUp
                      className="h-3.5 w-3.5 text-slate-500"
                      strokeWidth={2}
                    />
                  ) : (
                    <ChevronDown
                      className="h-3.5 w-3.5 text-slate-500"
                      strokeWidth={2}
                    />
                  )}
                </button>

                {/* =================================================
                    LANGUAGE DROPDOWN
                ================================================== */}

                {languageOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[calc(100%+10px)]
                      z-[10000]
                      w-52
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-2
                      shadow-[0_15px_40px_rgba(15,23,42,0.14)]
                    "
                  >
                    <div className="px-3 pb-2 pt-2">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                        {t("nav.selectLanguage")}
                      </p>
                    </div>

                    {languages.map((item) => {
                      const isActive =
                        language === item.code;

                      return (
                        <button
                          key={item.code}
                          type="button"
                          onClick={() => {
                            changeLanguage(
                              item.code,
                            );
                            setLanguageOpen(false);
                          }}
                          className={`
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-2.5
                            text-left
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? "bg-teal-50 text-teal-700"
                                : "text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                            }
                          `}
                        >
                          <span className="text-lg">
                            {item.flag}
                          </span>

                          <span className="flex-1">
                            <span className="block text-sm font-bold">
                              {item.nativeName}
                            </span>

                            <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400">
                              {t(item.name)}
                            </span>
                          </span>

                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-teal-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* =================================================
                  TALK TO OUR TEAM
              ================================================== */}

              <Link
                to="/contact"
                className="
                  hidden
                  rounded-full
                  bg-yellow-400
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  leading-none
                  tracking-[-0.01em]
                  text-black
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-300
                  hover:shadow-md
                  lg:inline-flex
                "
              >
                {t("nav.talkToTeam")}
              </Link>

              {/* =================================================
                  MOBILE MENU BUTTON
              ================================================== */}

              <button
                type="button"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-line
                  bg-white
                  text-navy
                  transition-colors
                  hover:border-teal-200
                  hover:bg-teal-50
                  hover:text-teal-700
                  lg:hidden
                "
                onClick={() =>
                  setMobileOpen((o) => !o)
                }
                aria-label={
                  mobileOpen
                    ? t("common.close")
                    : t("Open menu")
                }
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
}