import React, { useState } from "react";
import css from "./Header.module.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";

function Header({ onThemeSwitch, theme, content }) {
  const [showMenuList, setShowMenuList] = useState("hide");
  const [showMenuIcon, setShowMenuIcon] = useState("null");

  const handleMenuClick = () => {
    setShowMenuIcon("hide");
    if (showMenuList === "hide") {
      setShowMenuList("show");
    } else {
      setShowMenuList("hide");
    }
  };

  const handleCloseBtnClick = () => {
    setShowMenuIcon("show");
    setShowMenuList("hide");
  };

  const switchTheme = (themeIsNotActive) => {
    if (themeIsNotActive) {
      onThemeSwitch();
    }
  };

  return (
    <div className={`${css["header-portfolio"]} ${css[theme]}`}>
      <div className={css["theme-options"]}>
        <BsSun
          onClick={() => switchTheme(theme === "dark")}
          className={`${css["theme-icon"]} ${
            theme === "light" ? css["active"] : ""
          } ${css[theme]}`}
        />
        <BsMoon
          onClick={() => switchTheme(theme === "light")}
          className={`${css["theme-icon"]} ${
            theme === "dark" ? css["active"] : ""
          } ${css[theme]}`}
        />
      </div>

      <div className={`${css["nav-bar"]} ${css[theme]}`}>
        <Link
          className={css["section-link"]}
          activeClass={css["active"]}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.about}
        </Link>

        <Link
          className={css["section-link"]}
          activeClass={css["active"]}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.projects}
        </Link>

        <Link
          className={css["section-link"]}
          activeClass={css["active"]}
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.skills}
        </Link>

        <Link
          className={css["section-link"]}
          activeClass={css["active"]}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.contact}
        </Link>
      </div>

      <div
        className={`${css["mobile-menu-list"]} ${css[theme]} ${css[showMenuList]}`}
      >
        <Link
          onClick={handleCloseBtnClick}
          className={css["section-link"]}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.about}
        </Link>

        <Link
          onClick={handleCloseBtnClick}
          className={css["section-link"]}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.projects}
        </Link>

        <Link
          onClick={handleCloseBtnClick}
          className={css["section-link"]}
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.skills}
        </Link>

        <Link
          onClick={handleCloseBtnClick}
          className={css["section-link"]}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          {content.navbar.contact}
        </Link>
      </div>

      <div
        onClick={handleMenuClick}
        className={`${css["mobile-menu-icon"]} ${css[showMenuIcon]}`}
      >
        <div className={css["menu-bar"]}></div>
        <div className={css["menu-bar"]}></div>
        <div className={css["menu-bar"]}></div>
      </div>
      <div
        onClick={handleCloseBtnClick}
        className={`${css["close-menu-btn"]} ${css[showMenuList]}`}
      >
        X
      </div>
    </div>
  );
}

export default Header;
