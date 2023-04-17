import css from "./Social.module.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function Social({ content, theme }) {
  return (
    <div className={css["social-section"]}>
      <h3>
        {content.social.info}
      </h3>
      <div className={`${css['social-icon-list']} ${css[theme]}`}>
        <a href="https://github.com/ericahanemann" target="blank">
          <BsGithub className={css["social-icon"]} />
        </a>
        <a href="https://www.linkedin.com/in/%C3%A9rica-hanemann-090000220" target="blank">
          <BsLinkedin className={css["social-icon"]} />
        </a>
        <a href="https://www.instagram.com/erica_hnm" target="blank">
          <BsInstagram className={css["social-icon"]} />
        </a>
      </div>
    </div>
  );
}

export default Social;
