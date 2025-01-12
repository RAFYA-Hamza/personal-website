import project1Img from "../assets/images/project1.png";
import project2Img from "../assets/images/project2.png";

import HeaderSection from "./UI/HeaderSection";
import classes from "./Work.module.css";

import WorkCard from "./UI/WorkCard";

function Work() {
  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <section className={classes.work}>
      <HeaderSection
        title="Work"
        description="Some of the projects I have worked on:"
      />

      <WorkCard
        classes={classes}
        image={project1Img}
        title="MarketiFy"
        type="Website"
        specificSkills={[0, 1, 2, 13, 14, 15]}
        onShowProject={() =>
          handleClick("https://rafya-hamza.github.io/marketify-website/")
        }
        onShowCodeProject={() =>
          handleClick("https://github.com/RAFYA-Hamza/marketify-website")
        }
      />

      <WorkCard
        classes={classes}
        image={project2Img}
        title="TodoList"
        type="Website"
        specificSkills={[0, 1, 2, 13, 14, 15]}
        onShowProject={() =>
          handleClick("https://rafya-hamza.github.io/marketify-website/")
        }
        onShowCodeProject={() =>
          handleClick("https://github.com/RAFYA-Hamza/to-do-list")
        }
      />
    </section>
  );
}

export default Work;
