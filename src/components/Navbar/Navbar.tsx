import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <Logo></Logo>
      </NavLink>

      <ul className={styles.navlinks}>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            home
            <span></span>
          </NavLink>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            about me
            <span></span>
          </NavLink>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            projects
            <span></span>
          </NavLink>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink className={styles.linkTag} to="/">
            <span></span>
            skills
            <span></span>
          </NavLink>
        </li>
      </ul>

      <NavLink to="/">
        <button className={styles.contactButton}>contact me</button>
      </NavLink>
    </nav>
  );
}
