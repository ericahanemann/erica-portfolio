import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import bgVideo from "../../assets/video/video-test.mp4";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  title: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.src = bgVideo;
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={styles.cardContainer}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Tilt
        className={styles.card}
        tiltReverse={true}
        tiltMaxAngleX={2}
        tiltMaxAngleY={1}
        scale={1.01}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#acacac"
        glarePosition="all"
        glareBorderRadius="10px"
      >
        <video
          ref={videoRef}
          className={styles.bgVideo}
          loop
          muted
          preload="none"
          poster="img/project-print.png"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="glass"></div>
        <div className={styles.cardTitle}>{title}</div>
      </Tilt>
    </div>
  );
};

export default ProjectItem;
