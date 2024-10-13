import { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link, scrollSpy } from "react-scroll";

import { TranslationsContext } from "../../routes";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, [pathname]);

  const contentContext = useContext(TranslationsContext);
  if (!contentContext)
    return <div>Erro: contexto de traduções não disponível</div>;
  const { translations } = contentContext;

  const handleCloseResponsiveMenu = () => {
    setTimeout(() => {
      setIsResponsiveMenuOpen(false);
    }, 600);
  };

  const handleCloseMenuIconClick = () => {
    setTimeout(() => {
      setIsResponsiveMenuOpen(false);
    }, 150);
  };

  const handleOpenResponsiveMenu = () => {
    setIsResponsiveMenuOpen(true);
  };

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
              {translations.navbar.home}
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
              {translations.navbar.projects}
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
              {translations.navbar.about}
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
              {translations.navbar.skills}
              <span></span>
            </Link>
          </li>
        </ul>
      )}

      {!isResponsiveMenuOpen && pathname == "/" && (
        <div
          className={styles.burgerMenuIcon}
          onClick={handleOpenResponsiveMenu}
        >
          <div className={styles.burguerIconStroke}></div>
          <div className={styles.burguerIconStroke}></div>
          <div className={styles.burguerIconStroke}></div>
        </div>
      )}

      {isResponsiveMenuOpen && pathname == "/" && (
        <div
          className={styles.closeMenuIcon}
          onClick={handleCloseMenuIconClick}
        >
          <IoCloseSharp className={styles.icon}></IoCloseSharp>
        </div>
      )}

      <ul
        className={`${styles.mobileNavlinks} ${
          isResponsiveMenuOpen && pathname == "/" ? styles.open : styles.close
        }`}
      >
        <li className={styles.navlinksItem}>
          <Link
            onClick={handleCloseResponsiveMenu}
            to="hero"
            className={styles.linkTag}
            activeClass={styles.activeLinkTag}
            spy={true}
            smooth={false}
            offset={-100}
          >
            {translations.navbar.home}
            {pathname == "/" && <span>{translations.navbar.home}</span>}
          </Link>
        </li>
        <li className={styles.navlinksItem}>
          <Link
            onClick={handleCloseResponsiveMenu}
            to="projects"
            className={styles.linkTag}
            activeClass={styles.activeLinkTag}
            spy={true}
            smooth={false}
            offset={-100}
          >
            {translations.navbar.projects}
            {pathname == "/" && <span>{translations.navbar.projects}</span>}
          </Link>
        </li>
        <li className={styles.navlinksItem}>
          <Link
            onClick={handleCloseResponsiveMenu}
            to="about"
            className={styles.linkTag}
            activeClass={styles.activeLinkTag}
            spy={true}
            smooth={false}
            offset={-100}
          >
            {translations.navbar.about}
            {pathname == "/" && <span>{translations.navbar.about}</span>}
          </Link>
        </li>
        <li className={styles.navlinksItem}>
          <Link
            onClick={handleCloseResponsiveMenu}
            to="skills"
            className={styles.linkTag}
            activeClass={styles.activeLinkTag}
            spy={true}
            smooth={false}
            offset={-100}
          >
            {translations.navbar.skills}
            {pathname == "/" && <span>{translations.navbar.skills}</span>}
          </Link>
        </li>
        <li className={styles.navlinksItem}>
          <NavLink
            onClick={handleCloseResponsiveMenu}
            className={({ isActive }) =>
              isActive
                ? `${styles.linkTag} ${styles.activeLinkTag}`
                : styles.linkTag
            }
            to="/contact"
          >
            {translations.navbar.contact}
            <span>{translations.navbar.contact}</span>
          </NavLink>
        </li>
      </ul>

      {!isResponsiveMenuOpen && !(pathname == "/contact") && (
        <NavLink to="/contact">
          <button className={styles.contactButton}>
            {translations.navbar.contact}
          </button>
        </NavLink>
      )}
    </nav>
  );
}
