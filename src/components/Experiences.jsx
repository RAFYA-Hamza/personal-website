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
          EE Automotive Architecture Designer for the REPAS function (REPAS =
          Réveiller et Endormir les UCE et les réseaux et Piloter les
          Alimentations du Système):
        </p>
        <p className="body2">
          • Allocate functions to the different EE Components
        </p>
        <p className="body2">
          • Allocate functional flows to the multiplexed networks and wired
          interfaces allowing communication between the EE components
        </p>
        <p className="body2">
          • Conduct technical reviews to validate the deliverable with the
          client.
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
          remotely control and supervise an autonomous vehicle:
        </p>
        <p className="body2">
          • Establish communication between the Mobile Application and the ECU
          (MuxLab) using Socket.io
        </p>
        <p className="body2">
          • Development of an interface that ensures interactions between the
          vehicle and the driver.
        </p>
        <p className="body2">
          • Development of an interface to visualize in real time the perception
          of the camera using Websocket
        </p>
        <p className="body2">
          • Development of an interface which makes it possible to locate the
          vehicle.
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
