import React from "react";
import Button from "../util/Button";
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
            <Roadmap
              list={[
                { titre: "Mon Bac", position: "gauche" },
                { titre: "Première Année", position: "droite" },
                { titre: "Seconde Année", position: "gauche" },
                { titre: "Troisième Année", position: "droite" },
              ]}
            />
          </div>
          <div className="personal">
            <h1>Personal</h1>
            <Roadmap />
          </div>
        </div>
        <div className="about-button">
          <Button index={0} page={"my-life"} />
        </div>
      </div>
    </div>
  );
};

export default About;
