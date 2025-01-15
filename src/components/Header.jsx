import classes from "./Header.module.css";
import ThemeIcon from "./icons/ThemeIcon";
import IconButton from "./UI/IconButton";

const classLink = "body2 medium link";

function Header({ theme, onSelect }) {
  return (
    <header className={classes.header}>
      <p>&#60;hr/&#62;</p>
      <nav>
        <ul>
          <li>
            <a className={classLink} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={classLink} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className={classLink} href="#work">
              Work
            </a>
          </li>
          <li>
            <a className={classLink} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className={classes.actions}>
          <IconButton onClick={onSelect}>
            <ThemeIcon theme={theme} />
          </IconButton>
          <button className="button">Download CV</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
