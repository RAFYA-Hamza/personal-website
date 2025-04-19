import altenImg from "../assets/images/alten-logo.png";
import estImg from "../assets/images/est-logo.jpeg";
import capgeminiImg from "../assets/images/capgemini-logo.jpeg";

import Experience from "./Experience";

import classes from "./Experiences.module.css";
import HeaderSection from "./UI/HeaderSection";

function Experiences() {
  return (
    <section id="experience" className={classes.experiences}>
      <HeaderSection
        title="Experience"
        description="Here is a quick summary of my most recent experiences:"
      />

      <Experience
        classes={classes}
        image={altenImg}
        name="Alten Delivery Center"
        title="Embedded System Engineer"
        date="Oct 2023 - Present"
      >
        <p className="body2">
          Functional Designer and Electronic Electrical Architect for the SWEDEN
          function (Sleep and wakeup of Electrical Devices and Electronic
          Networks)
        </p>
      </Experience>

      <Experience
        classes={classes}
        image={capgeminiImg}
        name="Capgemini Engineering"
        title="Embedded Software Engineer - Internship"
        date="Feb - Aug 2023"
      >
        <p className="body2">
          Development of a Mobile Application representing a "cockpit" to
          remotely control and supervise an autonomous vehicle.
        </p>
      </Experience>

      <Experience
        classes={classes}
        image={estImg}
        name="Higher School of Technology"
        title="End-of-year Internship"
        date="April - May 2020"
      >
        <p className="body2">
          Modeling and simulation of Hybrid Wind and Solar Electric Systems
          using power converters (Inverter, Rectifier and Chopper).
        </p>
      </Experience>
    </section>
  );
}

export default Experiences;
