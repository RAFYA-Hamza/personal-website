import altenImg from "../assets/images/alten-logo.png";
import estImg from "../assets/images/est-logo.jpeg";
import capgeminiImg from "../assets/images/capgemini-logo.jpeg";

import Tag from "./UI/Tag";

import classes from "./Experiences.module.css";

function Experiences() {
  return (
    <section className={classes.experiences}>
      <Tag>
        <p>Experience</p>
      </Tag>

      <span>
        <p>Here is a quick summary of my most recent experiences:</p>
      </span>

      <div className={classes.experiences__card}>
        <div className={classes.experiences__header}>
          <div className={classes["experiences__header-image"]}>
            <img src={altenImg} alt="Alten image" />
          </div>
          <div className={classes["experiences__header-content"]}>
            <p>Alten Delivery Center</p>
            <Tag>Embedded System Engineer</Tag>
          </div>
          <Tag classe={classes["experiences__header-date"]}>
            Oct 2023 - Present
          </Tag>
        </div>
        <div className={classes.experiences__content}>
          <p>
            EE Automotive Architecture Designer for the REPAS function (REPAS =
            Réveiller et Endormir les UCE et les réseaux et Piloter les
            Alimentations du Système):
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
