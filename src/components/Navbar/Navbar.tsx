import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { IoCloseSharp } from "react-icons/io5";
import { TranslationContent } from "../../types/translations";

interface NavbarProps {
  content: TranslationContent;
}

export default function Navbar({ content }: NavbarProps) {
  const { pathname } = useLocation();
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);

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
            {content.navbar.home}
            {pathname == "/" && <span>{content.navbar.home}</span>}
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
            {content.navbar.projects}
            {pathname == "/" && <span>{content.navbar.projects}</span>}
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
            {content.navbar.about}
            {pathname == "/" && <span>{content.navbar.about}</span>}
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
            {content.navbar.skills}
            {pathname == "/" && <span>{content.navbar.skills}</span>}
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
            {content.navbar.contact}
            <span>{content.navbar.contact}</span>
          </NavLink>
        </li>
      </ul>

      {!isResponsiveMenuOpen && !(pathname == "/contact") && (
        <NavLink to="/contact">
          <button className={styles.contactButton}>
            {content.navbar.contact}
          </button>
        </NavLink>
      )}
    </nav>
  );
}
