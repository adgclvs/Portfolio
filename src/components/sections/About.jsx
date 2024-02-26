import React from "react";
import { aboutPersonalData } from "../../data/aboutPersonalData";
import { aboutProfessionalData } from "../../data/aboutProfessionalData";
import Circles from "../util/Circles";
import Roadmap from "../util/Roadmap";

const About = () => {
  return (
    <div className="about">
      <Circles indexSection={1} />
      <div className="about-page">
        <div className="about-content">
          <div className="professional">
            <h1>Professional</h1>
            <Roadmap data={aboutProfessionalData} />
          </div>
          <div className="personal">
            <h1>Personal</h1>
            <Roadmap data={aboutPersonalData} />
          </div>
        </div>
        <div className="about-button">{/* <Button index={0} page={"my-life"} /> */}</div>
      </div>
    </div>
  );
};

export default About;
