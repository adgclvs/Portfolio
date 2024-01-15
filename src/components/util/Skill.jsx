import React, { useState } from "react";
import { skillsData } from "../../data/skillsData";

const Skill = ({ skillId }) => {
  const [currentskill, setCurrentSkill] = useState(skillsData[skillId]);

  return (
    <div className="skill">
      <h1>{currentskill.title}</h1>
      <p>{currentskill.text}</p>
      <img src={currentskill.img} alt={`Logo ` + currentskill.title} height="25px" width="25px" />
    </div>
  );
};

export default Skill;
