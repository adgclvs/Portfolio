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
        <Skill skillId={3} />
        <Skill skillId={4} />
        <Skill skillId={5} />
        <Skill skillId={6} />
        <Skill skillId={7} />
      </div>
    </div>
  );
};

export default Skills;
