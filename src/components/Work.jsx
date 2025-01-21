import HeaderSection from "./UI/HeaderSection";
import WorkCard from "./UI/WorkCard";
import { PROJECTS } from "../utils/projects";

import classes from "./Work.module.css";

function Work() {
  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <section id="work" className={classes.work}>
      <HeaderSection
        title="Work"
        description="Some of the projects I have worked on:"
      />

      <ul>
        {PROJECTS.map((project) => (
          <li key={project.id}>
            <WorkCard
              classes={classes}
              image={project.image}
              title={project.title}
              type={project.type}
              specificSkills={project.skills}
              onShowProject={
                project.demoLink && (() => handleClick(project.codeLink))
              }
              onShowCodeProject={() => handleClick(project.demoLink)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Work;
