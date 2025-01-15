import Tag from "./Tag";
import IconButton from "./IconButton";
import GithubIcon from "../icons/GithubIcon";
import { SKILLS_ICONS } from "../../assets/icons/skills-icons";

function WorkCard({
  image,
  title,
  type,
  specificSkills,
  onShowCodeProject,
  onShowProject,
  classes,
}) {
  return (
    <div className={classes["work-card"]}>
      <div className={classes["work-card__image"]}>
        <img src={image} alt="Project 1" />
      </div>

      <div className={classes["work-card__content"]}>
        <h3>{title}</h3>
        <div className={classes["work-card__content-type"]}>
          <p>Worked on</p>
          <Tag>
            <p>{type}</p>
          </Tag>
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

        <div className={classes["work-card__content-actions"]}>
          <IconButton onClick={onShowCodeProject}>
            <GithubIcon />
          </IconButton>
          <button className="button" onClick={onShowProject}>
            Go to the {title}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
