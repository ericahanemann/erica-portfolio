import { useRef } from "react";
import Tilt from "react-parallax-tilt";

import styles from "./ProjectItem.module.css";
import { Project } from "../../types/translations";

function ProjectItem({ projectInfo }: { projectInfo: Project }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  console.log(projectInfo.videoDemo);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.src = projectInfo.videoDemo;
      videoRef.current.play().catch((error) => {
        console.error("Erro ao tentar reproduzir o vídeo:", error);
      });
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
        tiltMaxAngleX={0.5}
        tiltMaxAngleY={0.5}
        scale={1.01}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#acacaca8"
        glarePosition="all"
        glareBorderRadius="10px"
        
        style={{ backgroundImage: `url(${projectInfo.coverImage})` }}
      >
        <video
          ref={videoRef}
          className={styles.bgVideo}
          loop
          muted
          preload="none"
          poster={projectInfo.coverImage}
        >
          <source src={`${projectInfo.videoDemo}`} type="video/mp4" />
        </video>
        <div className="glass"></div>
        <div className={styles.cardTitle}>{projectInfo.projectName}</div>
      </Tilt>
    </div>
  );
}

export default ProjectItem;
