import picAbout from "../assets/images/picture_about.jpg";

import Tag from "./UI/Tag";

import classes from "./About.module.css";

const ABOUT_ME = [
  "I'm a dedicated and aspiring Front-End developer (React.js & Next.js). I’m passionate about creating seamless user experiences and bringing visually engaging digital products to life. I take pride in writing clean, efficient, and maintainable code while ensuring designs are both functional and aesthetically pleasing.",
  "I'm currently working as an Embedded Systems Engineer, where I have gained diverse experience in both software and hardware development through various professional and academic projects. These experiences have allowed me to explore a wide range of tools and technologies, sharpening my problem-solving skills and technical expertise.",
  "A year ago, I began my journey with a self-training to make a shift career to Front-End development, driven by my passion for coding and creating impactful digital solutions. I'm now building my skills and knowledge in modern web technologies like React.js, Next.js, Tailwindcss, and more, as I work towards crafting innovative and user-friendly web applications.",
  "I am a forward-thinking professional who thrives on taking products from ideation to development, always focused on continuous improvement and exceeding expectations.",
  "Finally, some quick bits about me.",
];

function About() {
  return (
    <section id="about" className={classes.about}>
      <div className={classes.about__header}>
        <Tag>
          <p className="body3 medium">About me</p>
        </Tag>
      </div>

      <div className={classes.about__container}>
        <div className={classes.about__profile}>
          <div className={classes["about__profile-background"]}>
            <img
              className={classes["about__profile-pic"]}
              src={picAbout}
              alt="About picture"
            />
          </div>
        </div>

        <div className={classes.about__content}>
          <h3 className={classes["about__content-title"]}>
            Curious about me? Here you have it:
          </h3>

          <ul>
            {ABOUT_ME.map((text) => (
              <li className="body2" key={text}>
                {text}
              </li>
            ))}
          </ul>

          <div className={classes["about__content-footer"]}>
            <span className="body2">
              <p>• Engineer's Degree in Digital Systems Engineering</p>
              <p>• Embedded Systems Engineer</p>
            </span>
            <span className="body2">
              <p>• Avid learner</p>
              <p>• Front-End developer</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
