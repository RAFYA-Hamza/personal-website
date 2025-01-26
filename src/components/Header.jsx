import { useState } from "react";
import classes from "./Header.module.css";
import ThemeIcon from "./icons/ThemeIcon";
import IconButton from "./UI/IconButton";

const classLink = "body2 medium link";

function Header({ theme, onSelect }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleClick() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className={classes.header}>
      <p>&#60;hr/&#62;</p>
      <nav className={classes["header__nav-desktop"]}>
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

      <nav className={classes["header__nav-mobile"]}>
        <IconButton onClick={handleClick}>
          {isOpenMenu ? (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          )}
        </IconButton>

        {isOpenMenu ? (
          <>
            <ul>
              <li>
                <a onClick={handleClick} className={classLink} href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className={classLink}
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a onClick={handleClick} className={classLink} href="#work">
                  Work
                </a>
              </li>
              <li>
                <a onClick={handleClick} className={classLink} href="#contact">
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
          </>
        ) : undefined}
      </nav>
    </header>
  );
}

export default Header;
