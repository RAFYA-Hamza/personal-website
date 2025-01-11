import classes from "./Skills.module.css";

import { SKILLS_ICONS } from "../assets/icons/skills-icons.jsx";
import HeaderSection from "./UI/HeaderSection.jsx";

function Skills() {
  return (
    <section className={classes.skills}>
      <HeaderSection
        title="Skills"
        description="The skills, tools and technologies I am really good at:"
      />

      <ul>
        {SKILLS_ICONS.map((iconData) => (
          <li key={iconData.title}>
            <div>{iconData.icon}</div>
            <p className="body1 normal">{iconData.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
