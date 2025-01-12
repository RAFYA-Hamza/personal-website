import project1Img from "../assets/images/project1.png";

import HeaderSection from "./UI/HeaderSection";
import Tag from "./UI/Tag";
import classes from "./Work.module.css";

import { SKILLS_ICONS } from "../assets/icons/skills-icons";

function Work() {
  const specificSkills = [0, 1, 2, 13, 14, 15];

  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <section className={classes.work}>
      <HeaderSection
        title="Work"
        description="Some of the projects I have worked on:"
      />

      <div className={classes["work-card"]}>
        <div className={classes["work-card__image"]}>
          <img src={project1Img} alt="Project 1" />
        </div>

        <div className={classes["work-card__content"]}>
          <h3>MarketiFy</h3>
          <div className={classes["work-card__content-type"]}>
            <p>Worked on</p>
            <Tag>Website</Tag>
          </div>

          <div className={classes["work-card__content-tech"]}>
            <p>Skills & Technologies I have used</p>
            <ul>
              {specificSkills.map((index) => (
                <li className="tag" key={index}>
                  {SKILLS_ICONS[index].icon}
                  <p className="body3 medium">{SKILLS_ICONS[index].title}</p>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() =>
              handleClick("https://rafya-hamza.github.io/marketify-website/")
            }
            className={`${classes["work-card__content-button"]} button`}
          >
            Go to the MarketiFY
          </button>
        </div>
      </div>
    </section>
  );
}

export default Work;
