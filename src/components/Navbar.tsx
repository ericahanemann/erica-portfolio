import { NavLink } from "react-router-dom";

import logo from "/img/erica-logo.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="logo"></img>
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
