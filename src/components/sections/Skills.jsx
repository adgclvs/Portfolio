import React from "react";
import Circles from "../util/Circles";
import Skill from "../util/Skill";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Circles indexSection={3} />
      <div className="skills-content">
        <Skill skillId={0} />
        <Skill skillId={1} />
        <Skill skillId={2} />
      </div>
    </div>
  );
};

export default Skills;
