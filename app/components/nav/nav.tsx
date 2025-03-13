import { NavLink } from "react-router";

export function Nav() {
  return (
    <nav className="flex gap-6 text-xs md:text-base uppercase md:normal-case">
      <NavLink to="/" end>
        Accueil
      </NavLink>
      <NavLink to="/about">À propos</NavLink>
    </nav>
  );
}
