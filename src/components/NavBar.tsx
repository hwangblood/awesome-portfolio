import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link className="px-5" href="/">
          Home
        </Link>
        <Link className="px-5" href="/project">
          Projects
        </Link>
        <Link className="px-5" href="/articles">
          Articles
        </Link>
        <Link className="px-5" href="/about">
          About
        </Link>
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link className="px-5" href="/" target="_blank">
          T
        </Link>
        <Link className="px-5" href="/" target="_blank">
          T
        </Link>
        <Link className="px-5" href="/" target="_blank">
          T
        </Link>
        <Link className="px-5" href="/" target="_blank">
          T
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
