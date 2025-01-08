import Tag from "./UI/Tag";

import classes from "./About.module.css";

function About() {
  return (
    <section className={classes.about}>
      <div className={classes.about__header}>
        <Tag>
          <p>About me</p>
        </Tag>
      </div>

      <div className={classes.about__container}>
        <div className={classes.about__profile}>
          <div className={classes["about__profile-background"]}>
            <img className={classes["about__profile-pic"]} src="" alt="" />
          </div>
        </div>

        <div className={classes.about__content}>
          <h3>Curious about me? Here you have it:</h3>

          <p>
            I'm a dedicated and aspiring Full-Stack developer (React.js &
            Node.js). I’m passionate about creating seamless user experiences
            and bringing visually engaging digital products to life. I take
            pride in writing clean, efficient, and maintainable code while
            ensuring designs are both functional and aesthetically pleasing.
          </p>
          <p>
            I'm currently working as an Embedded Systems Engineer, where I have
            gained diverse experience in both software and hardware development
            through various professional and academic projects. These
            experiences have allowed me to explore a wide range of tools and
            technologies, sharpening my problem-solving skills and technical
            expertise.
          </p>
          <p>
            A year ago, I began my journey with a self-training to make a shift
            career to Full-Stack development, driven by my passion for coding
            and creating impactful digital solutions. I'm now building my skills
            and knowledge in modern web technologies like React.js, Next.js,
            Tailwindcss, and more, as I work towards crafting innovative and
            user-friendly web applications.
          </p>
          <p>
            I am a forward-thinking professional who thrives on taking products
            from ideation to development, always focused on continuous
            improvement and exceeding expectations.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul>
            <li>B.E. in Computer Engineering</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Aspiring Full-Stack developer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
