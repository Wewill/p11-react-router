import { NavLink } from "react-router";

export function Nav() {
  return (
    <nav>
      <NavLink to="/" end>
        Accueil
      </NavLink>
      <NavLink to="/about">À propos</NavLink>
    </nav>
  );
}
