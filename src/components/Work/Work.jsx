import css from "./Work.module.css";

function Work({ content, theme }) {
  return (
    <div id="projects" className={css["projects-section"]}>
      <div className={css['projects-container']}>
        <h3>{content.work.title}</h3>
        <div className={css["projects"]}>
          <div className={css["project"]}>Coming Soon</div>
          <div className={css["project"]}>Coming Soon</div>
          <div className={css["project"]}>Coming Soon</div>
          <div className={css["project"]}>Coming Soon</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
