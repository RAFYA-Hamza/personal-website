import HeaderSection from "./UI/HeaderSection";
import IconButton from "./UI/IconButton";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import classes from "./ContactMe.module.css";
import CopyIcon from "./icons/CopyIcon";

function ContactMe({ onClickButton }) {
  async function handleCopy(text, isEmail) {
    try {
      await navigator.clipboard.writeText(text);

      if (isEmail) {
        alert("Email copied to clipboard successfully!");
      } else {
        alert("Phone number copied to clipboard successfully!");
      }
    } catch (error) {
      console.error("Failed to read clipboard contents:", error);
    }
  }
  return (
    <section id="contact" className={classes.contact}>
      <HeaderSection
        title="Get in touch"
        description="What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />

      <div className={classes.contact__content}>
        <div className={classes["contact__content-email"]}>
          <svg
            width="64px"
            height="64px"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>

          <h2>hamza.rafya.dev@gmail.com</h2>
          <IconButton
            onClick={() => handleCopy("hamza.rafya.dev@gmail.com", true)}
          >
            <CopyIcon />
          </IconButton>
        </div>

        <div className={classes["contact__content-phone"]}>
          <svg
            width="64px"
            height="64px"
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
                d="M4.00655 7.93309C3.93421 9.84122 4.41713 13.0817 7.6677 16.3323C8.45191 17.1165 9.23553 17.7396 10 18.2327M5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C15.2529 20.0243 14.1963 19.9541 13 19.6111"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>

          <h2>+212-659 22 0334</h2>
          <IconButton onClick={() => handleCopy("+212-659 22 0334")}>
            <CopyIcon />
          </IconButton>
        </div>
      </div>

      <div className={classes.contact__social}>
        <p className="body2">You may also find me on these platforms!</p>
        <div>
          <IconButton
            onClick={() => onClickButton("https://github.com/RAFYA-Hamza")}
          >
            <GithubIcon />
          </IconButton>
          <IconButton onClick={() => onClickButton("https://x.com/")}>
            <TwitterIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              onClickButton(
                "https://www.linkedin.com/in/hamza-rafya-01a0011b8/"
              )
            }
          >
            <LinkedinIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
