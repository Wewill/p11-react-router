import { Nav } from "./nav/nav";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-10">
      <Link to={"/"}>
        <div className="logotype">Kasa</div>
      </Link>
      <Nav />
    </header>
  );
}
