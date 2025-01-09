import Tag from "./UI/Tag";

import classes from "./Skills.module.css";

import { SKILLS_ICONS } from "../assets/icons/skills-icons.jsx";

function Skills() {
  return (
    <section className={classes.skills}>
      <Tag>
        <p className="body3 medium">Skills</p>
      </Tag>
      <span>
        <p className="subtitle normal">
          The skills, tools and technologies I am really good at:
        </p>
      </span>

      <ul>
        {SKILLS_ICONS.map((iconData) => (
          <li key={iconData.title}>
            <div>{iconData.icon}</div>
            <p>{iconData.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
