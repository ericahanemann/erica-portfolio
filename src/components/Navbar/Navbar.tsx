import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { TranslationContent } from "../../types/translations";

interface NavbarProps {
  content: TranslationContent;
}

export default function Navbar({ content }: NavbarProps) {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navbar}>
      {pathname == "/" ? (
        <Link
          to="hero"
          className={styles.logo}
          smooth={true}
          duration={500}
          offset={-100}
        >
          <Logo></Logo>
        </Link>
      ) : (
        <NavLink to="/" className={styles.logo}>
          <Logo></Logo>
        </NavLink>
      )}

      {pathname == "/" && (
        <ul className={styles.navlinks}>
          <li className={styles.navlinksItem}>
            <Link
              to="hero"
              className={styles.linkTag}
              activeClass={styles.activeLinkTag}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <span></span>
              {content.navbar.home}
              <span></span>
            </Link>
          </li>
          <li className={styles.navlinksItem}>
            <Link
              to="projects"
              className={styles.linkTag}
              activeClass={styles.activeLinkTag}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <span></span>
              {content.navbar.projects}
              <span></span>
            </Link>
          </li>
          <li className={styles.navlinksItem}>
            <Link
              to="about"
              className={styles.linkTag}
              activeClass={styles.activeLinkTag}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <span></span>
              {content.navbar.about}
              <span></span>
            </Link>
          </li>
          <li className={styles.navlinksItem}>
            <Link
              to="skills"
              className={styles.linkTag}
              activeClass={styles.activeLinkTag}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <span></span>
              {content.navbar.skills}
              <span></span>
            </Link>
          </li>
        </ul>
      )}

      {(pathname == "/" || pathname == "/project") && (
        <NavLink to="/contact">
          <button className={styles.contactButton}>
            {content.navbar.contact}
          </button>
        </NavLink>
      )}
    </nav>
  );
}
