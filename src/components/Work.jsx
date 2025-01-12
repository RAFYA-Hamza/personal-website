import project1Img from "../assets/images/project1.png";

import HeaderSection from "./UI/HeaderSection";
import classes from "./Work.module.css";

import WorkCard from "./UI/WorkCard";

function Work() {
  //   const specificSkills = [0, 1, 2, 13, 14, 15];

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
        image={project1Img}
        title="MarketiFy"
        type="Website"
        specificSkills={[0, 1, 2, 13, 14, 15]}
        onSelect={() =>
          handleClick("https://rafya-hamza.github.io/marketify-website/")
        }
        classes={classes}
      />
    </section>
  );
}

export default Work;
