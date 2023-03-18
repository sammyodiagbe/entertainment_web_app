import Link from "next/link";
import Image from "next/image";
import Logo from "./icons/logo";
import IconNavBookmark from "./icons/icon-nav-bookmark";
import IconNavHome from "./icons/icon-nav-home";
import IconNavMovies from "./icons/icon-nav-movies";
import IconNavSeries from "./icons/icon-nav-series";
import image from "../assets/image-avatar.png";
import { useRouter } from "next/router";

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav className="navigation">
      <Logo />

      <nav className="sub-nav">
        <Link href={"/"} className={pathname === "/" ? "active" : ""}>
          <IconNavHome />
        </Link>
        <Link
          href={"/movies"}
          className={pathname === "/movies" ? "active" : ""}
        >
          <IconNavMovies />
        </Link>
        <Link
          href={"/series"}
          className={pathname === "/series" ? "active" : ""}
        >
          <IconNavSeries />
        </Link>
        <Link
          href={"/bookmarked"}
          className={pathname === "/bookmarked" && "active"}
        >
          <IconNavBookmark />
        </Link>
      </nav>
      {/* thumbnail image */}
      <Image src={image} alt="User profile avatar" width={24} height={24} />
    </nav>
  );
};

export default Nav;
