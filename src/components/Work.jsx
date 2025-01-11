import project1Img from "../assets/images/project1.png";

import HeaderSection from "./UI/HeaderSection";
import Tag from "./UI/Tag";

function Work() {
  return (
    <section className="work">
      <HeaderSection
        title="Work"
        description="Some of the projects I have worked on:"
      />

      <div className="work__card">
        <div className="work__card-image">
          <img src={project1Img} alt="Project 1" />
        </div>

        <div className="work__card-content">
          <p>MarketiFY</p>
          <div>
            <p>Worked on</p>
            <Tag>Website</Tag>
          </div>

          <div>
            <p></p>
            <Tag>HTML</Tag>

            <button className="button">Go to the MarketiFY</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
