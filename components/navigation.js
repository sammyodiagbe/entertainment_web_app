import Link from "next/link";
import Image from "next/image";
import Logo from "./icons/logo";
import IconNavBookmark from "./icons/icon-nav-bookmark";
import IconNavHome from "./icons/icon-nav-home";
import IconNavMovies from "./icons/icon-nav-movies";
import IconNavSeries from "./icons/icon-nav-series";
import image from "../assets/image-avatar.png";

const Nav = () => {
  return (
    <nav className="navigation">
      <Logo />

      <nav className="sub-nav">
        <Link href={"/"}>
          <IconNavHome />
        </Link>
        <Link href={"/movies"}>
          <IconNavMovies />
        </Link>
        <Link href={"/series"}>
          <IconNavSeries />
        </Link>
        <Link href={"/bookmarked"}>
          <IconNavBookmark />
        </Link>
      </nav>
      {/* thumbnail image */}
      <Image src={image} alt="User profile avatar" width={24} height={24} />
    </nav>
  );
};

export default Nav;
