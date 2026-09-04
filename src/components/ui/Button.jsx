import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-volt text-navy-dark hover:bg-volt-dim",
  outline: "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  dark: "bg-navy text-white hover:bg-navy-light",
  ghost: "bg-transparent text-navy border border-slate-line hover:border-navy",
};

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  withArrow = true,
  className = "",
  onClick,
  type = "button",
}) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
