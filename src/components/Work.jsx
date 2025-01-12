import project1Img from "../assets/images/project1.png";

import HeaderSection from "./UI/HeaderSection";
import Tag from "./UI/Tag";
import classes from "./Work.module.css";

function Work() {
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
          <p>MarketiFY</p>
          <div className="work-card__content-type">
            <p>Worked on</p>
            <Tag>Website</Tag>
          </div>

          <div className="work-card__content-tech">
            <p></p>
            <Tag>HTML</Tag>
            <Tag>HTML</Tag>
            <Tag>HTML</Tag>
            <Tag>HTML</Tag>
            <Tag>HTML</Tag>
          </div>

          <button className="button">Go to the MarketiFY</button>
        </div>
      </div>
    </section>
  );
}

export default Work;
