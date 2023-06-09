import { Link } from "react-router-dom";

import styles from "./navlink.module.css";

interface NavLinkProps {
  href: string;
  iconpath: string;
  title?: string;
  className?: string;
  size: number;
  external?: boolean;
  hover?: boolean;
}

export function NavLink({
  title,
  href,
  iconpath,
  className,
  size,
  external,
  hover,
}: NavLinkProps) {
  return (
    <Link
      to={href}
      className={`p-4 flex flex-col gap-2 items-center justify-center ${className} ${
        hover ? styles.hover : ""
      }`}
      target={external ? "_blank" : ""}
    >
      <img src={iconpath} alt={title || ""} width={size} height={size} />
      <p className="text-slate-400 font-mono text-sm">{title}</p>
    </Link>
  );
}
