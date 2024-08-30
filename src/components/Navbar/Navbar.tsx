import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { TranslationContent } from "../../types/translations";

interface NavbarProps {
  content: TranslationContent;
}

export default function Navbar({ content }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <Logo></Logo>
      </NavLink>

      <ul className={styles.navlinks}>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            {content.navbar.home}
            <span></span>
          </NavLink>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            {content.navbar.about}
            <span></span>
          </NavLink>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            {content.navbar.projects}
            <span></span>
          </NavLink>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            {content.navbar.skills}
            <span></span>
          </NavLink>
        </li>
      </ul>

      <NavLink to="/">
        <button className={styles.contactButton}>
          {content.navbar.contact}
        </button>
      </NavLink>
    </nav>
  );
}
