import css from "./About.module.css";
import Social from "../Social/Social";

function About({ content, theme }) {
  return (
    <div id="about" className={css["about-section"]}>
      <div className={css["about-container"]}>
        <h1 className={css["my-name"]}>
          {content.aboutMe.greeting} <span>{content.aboutMe.myName}</span>
          {content.aboutMe.exclamation}
        </h1>
        <p className={css["about-me"]}>
          {content.aboutMe.iam}
          <strong>{content.aboutMe.job}</strong>
          {content.aboutMe.miniBio}
        </p>
        <Social content={content} theme={theme} />
      </div>
    </div>
  );
}

export default About;
