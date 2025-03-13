import { Nav } from "./nav/nav";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-10">
      <Link to={"/"}>
        <img
          src="/logotype.svg"
          alt="Kasa"
          className="logotype w-[145px] md:w-[210px]"
        />
      </Link>
      <Nav />
    </header>
  );
}
