// src/components/layout/MobileMenu.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import {
  primaryNav,
  secondaryNav,
  utilityLinks,
} from "../../data/navigation";

import { useLanguage } from "../../context/LanguageContext";

export default function MobileMenu({
  open,
  onClose,
}) {
  const {
    t,
    tn,
    currentLanguage,
  } = useLanguage();

  const [openTop, setOpenTop] = useState(null);
  const [openNested, setOpenNested] = useState(null);

  useEffect(() => {
    if (!open) {
      setOpenTop(null);
      setOpenNested(null);
    }
  }, [open]);

  if (!open) return null;

  function toggleTop(key) {
    setOpenNested(null);

    setOpenTop((prev) =>
      prev === key ? null : key
    );
  }

  function toggleNested(idx) {
    setOpenNested((prev) =>
      prev === idx ? null : idx
    );
  }

  return (
    <div
      id="mobile-menu"
      dir={currentLanguage.dir}
      className="
        fixed
        inset-x-0
        top-[76px]
        bottom-0
        z-40
        w-full
        max-w-full
        overflow-y-auto
        overflow-x-hidden
        bg-white
        lg:hidden
      "
    >
      <nav className="flex w-full max-w-full flex-col px-5 py-2">

        {/* =====================================================
            PRIMARY NAVIGATION
        ====================================================== */}

        {primaryNav.map((menu) => (
          <div
            key={menu.key}
            className="
              w-full
              max-w-full
              border-b
              border-slate-line
            "
          >
            <button
              type="button"
              className="
                flex
                w-full
                items-center
                justify-between
                py-4
                text-left
                text-base
                font-semibold
                text-navy
              "
              onClick={() =>
                toggleTop(menu.key)
              }
              aria-expanded={
                openTop === menu.key
              }
            >
              <span>
                {tn(menu.label)}
              </span>

              <ChevronDown
                size={18}
                className={`
                  flex-shrink-0
                  transition-transform
                  duration-200
                  ${
                    openTop === menu.key
                      ? "rotate-180 text-teal-light"
                      : "text-slate-muted"
                  }
                `}
              />
            </button>

            {openTop === menu.key && (
              <div
                className={`
                  flex
                  flex-col
                  gap-0.5
                  pb-3
                  ${
                    currentLanguage.dir === "rtl"
                      ? "pr-1"
                      : "pl-1"
                  }
                `}
              >
                {/* =================================================
                    VIEW ALL
                ================================================== */}

                <Link
                  to={menu.href}
                  onClick={onClose}
                  className="
                    py-2.5
                    text-sm
                    font-medium
                    text-teal-light
                  "
                >
                  {t("nav.viewAll")}{" "}
                  {tn(menu.label)}
                </Link>

                {/* =================================================
                    MENU ITEMS
                ================================================== */}

                {menu.items.map(
                  (item, i) =>
                    item.children ? (
                      <div
                        key={t(item.label)}
                        className="w-full"
                      >
                        <button
                          type="button"
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            py-2.5
                            text-sm
                            font-medium
                            text-navy
                          "
                          onClick={() =>
                            toggleNested(i)
                          }
                          aria-expanded={
                            openNested === i
                          }
                        >
                          <span>
                            {tn(item.label)}
                          </span>

                          <ChevronDown
                            size={15}
                            className={`
                              flex-shrink-0
                              transition-transform
                              duration-200
                              ${
                                openNested === i
                                  ? "rotate-180 text-teal-light"
                                  : "text-slate-muted"
                              }
                            `}
                          />
                        </button>

                        {openNested === i && (
                          <div
                            className={`
                              flex
                              flex-col
                              gap-0.5
                              py-1
                              ${
                                currentLanguage.dir ===
                                "rtl"
                                  ? "pr-3"
                                  : "pl-3"
                              }
                            `}
                          >
                            {item.children.map(
                              (child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  onClick={onClose}
                                  className="
                                    py-2
                                    text-sm
                                    text-slate-muted
                                    hover:text-teal-light
                                  "
                                >
                                  {tn(
                                    child.label
                                  )}
                                </Link>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="
                          py-2.5
                          text-sm
                          font-medium
                          text-slate-muted
                          hover:text-teal-light
                        "
                      >
                        {tn(item.label)}
                      </Link>
                    )
                )}
              </div>
            )}
          </div>
        ))}

        {/* =====================================================
            SECONDARY NAVIGATION
        ====================================================== */}

        {secondaryNav.map((link) => (
          <Link
            key={link.key}
            to={link.href}
            onClick={onClose}
            className="
              w-full
              border-b
              border-slate-line
              py-4
              text-base
              font-semibold
              text-navy
            "
          >
            {tn(link.label)}
          </Link>
        ))}

        {/* =====================================================
            UTILITY LINKS
        ====================================================== */}

        <div className="flex flex-col gap-3 py-5">
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="
                text-sm
                text-slate-muted
                hover:text-teal-light
              "
            >
              {tn(link.label)}
            </Link>
          ))}
        </div>

        {/* =====================================================
            MOBILE CART
        ====================================================== */}

        <Link
          to="/cart"
          onClick={onClose}
          className="
            mb-5
            flex
            items-center
            justify-center
            rounded-xl
            bg-yellow-400
            px-5
            py-3
            text-sm
            font-bold
            text-black
            transition-all
            hover:bg-yellow-300
          "
        >
          🛒 {t("nav.cart")}
        </Link>
      </nav>
    </div>
  );
}