import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

import { motion } from "framer-motion";

type CustomLinkProps = { href: string; title: string; className: string };

const CustomLink = (props: CustomLinkProps) => {
  const router = useRouter();
  return (
    <Link href={props.href} className={`${props.className} relative group`}>
      {props.title}
      <span
        className={`
            h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === props.href ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

type Props = {};

const NavBar = (props: Props) => {
  return (
    <header className="w-full px-32 py-9 font-medium flex items-center justify-between relative">
      <nav>
        <CustomLink className="mr-4" href="/" title="Home" />
        <CustomLink className="mx-4" href="/project" title="Projects" />
        <CustomLink className="mx-4" href="/articles" title="Articles" />
        <CustomLink className="ml-4" href="/about" title="About" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://www.twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
