import classes from "./Header.module.css";
import IconButton from "./UI/IconButton";

const classLink = "body2 medium link";

function Header({ onSelect }) {
  return (
    <header className={classes.header}>
      <p>&#60;hr/&#62;</p>
      <nav>
        <ul>
          <li>
            <a className={classLink} href="">
              About
            </a>
          </li>
          <li>
            <a className={classLink} href="">
              Work
            </a>
          </li>
          <li>
            <a className={classLink} href="">
              Contact
            </a>
          </li>
        </ul>
        <div className={classes.actions}>
          <IconButton onClick={onSelect}>
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
          </IconButton>
          <button className="button">Download CV</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
