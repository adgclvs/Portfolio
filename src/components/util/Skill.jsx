import React, { useState } from "react";
import { skillsData } from "../../data/skillsData";

const Skill = ({ skillId }) => {
  const [currentskill, setCurrentSkill] = useState(skillsData[skillId]);

  return (
    <div className="skill">
      <h1>{currentskill.title}</h1>
      <p>{currentskill.description}</p>
    </div>
  );
};

export default Skill;
