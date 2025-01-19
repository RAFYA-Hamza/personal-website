import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import profilePic from "../assets/images/picture_profile.jpg";

import classes from "./Intro.module.css";

import IconButton from "./UI/IconButton";

function Intro() {
  function handleClick(url) {
    window.open(url, "_blank");
  }
  return (
    <section className={classes.intro}>
      <div className={classes.intro__container}>
        <div className={classes.intro__content}>
          <h1>Hi, I'm Hamza👋</h1>
          <p className="body2">
            I'm an aspiring Full-Stack Developer (React.js & Node.js) with a
            focus on creating exceptional digital experiences that are fast,
            accessible, visually engaging, and fully responsive. I really enjoy
            learning new languages and frameworks with a deep passion for coding
          </p>
        </div>
        <ul className={classes.intro__infos}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className="body2">Rabat, Morocco</p>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="green"
              className="icon icon-tabler icons-tabler-filled icon-tabler-circle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
            </svg>
            <p className="body2">Available for new projects</p>
          </li>
        </ul>
        <div className={classes.intro__actions}>
          <IconButton
            onClick={() => handleClick("https://github.com/RAFYA-Hamza")}
          >
            <GithubIcon />
          </IconButton>
          <IconButton onClick={() => handleClick("https://x.com/")}>
            <TwitterIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              handleClick("https://www.linkedin.com/in/hamza-rafya-01a0011b8/")
            }
          >
            <LinkedinIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.intro__profile}>
        <div className={classes.intro__background}>
          <div className={classes.intro__pic}>
            <img src={profilePic} alt="Profile picture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
