// src/components/layout/DesktopDropdown.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

export default function DesktopDropdown({
  items,
  onNavigate,
}) {
  const { t } = useLanguage();
  const [activeSub, setActiveSub] = useState(null);

  const { tn, currentLanguage } = useLanguage();

  const isRTL = currentLanguage.dir === "rtl";

  return (
    <div
      className={`
        absolute
        top-full
        z-50
        pt-3
        ${isRTL ? "right-0" : "left-0"}
      `}
      onMouseLeave={() => setActiveSub(null)}
    >
      <div
        className="
          flex
          items-start
          overflow-hidden
          rounded-2xl
          border
          border-slate-line
          bg-white
          shadow-card
        "
        dir={currentLanguage.dir}
      >
        {/* =====================================================
            MAIN DROPDOWN
        ====================================================== */}

        <ul className="w-64 py-2">
          {items.map((item, i) => {
            const hasChildren =
              Boolean(item.children);

            return (
              <li key={t(item.label)}>
                {hasChildren ? (
                  <button
                    type="button"
                    onMouseEnter={() =>
                      setActiveSub(i)
                    }
                    onFocus={() =>
                      setActiveSub(i)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-3
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        activeSub === i
                          ? "bg-slate-surface text-teal-light"
                          : "text-navy hover:bg-slate-surface"
                      }
                    `}
                  >
                    <span>{tn(item.label)}</span>

                    <ChevronRight
                      size={14}
                      className={`
                        flex-shrink-0
                        opacity-60
                        ${
                          isRTL
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onMouseEnter={() =>
                      setActiveSub(null)
                    }
                    onClick={onNavigate}
                    className="
                      flex
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-navy
                      transition-colors
                      hover:bg-slate-surface
                      hover:text-teal-light
                    "
                  >
                    {tn(item.label)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* =====================================================
            CHILD DROPDOWN
        ====================================================== */}

        {activeSub !== null &&
          items[activeSub].children && (
            <ul
              className={`
                w-64
                bg-slate-surface/50
                py-2
                ${
                  isRTL
                    ? "border-r border-slate-line"
                    : "border-l border-slate-line"
                }
              `}
            >
              {items[activeSub].children.map(
                (child) => (
                  <li key={child.href}>
                    <Link
                      to={child.href}
                      onClick={onNavigate}
                      className="
                        flex
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-navy
                        transition-colors
                        hover:bg-white
                        hover:text-teal-light
                      "
                    >
                      {tn(child.label)}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          )}
      </div>
    </div>
  );
}