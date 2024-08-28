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
        <li className={styles.navlinksItem}>home</li>
        <li className={styles.navlinksItem}>about me</li>
        <li className={styles.navlinksItem}>projects</li>
        <li className={styles.navlinksItem}>skills</li>
      </ul>

      <NavLink to="/">
        <button className={styles.contactButton}>contact me</button>
      </NavLink>
    </nav>
  );
}
