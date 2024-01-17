import React, { useState } from "react";
import { skillsData } from "../../data/skillsData";

const Skill = ({ skillId }) => {
  const [currentskill, setCurrentSkill] = useState(skillsData[skillId]);

  return (
    <div className="skill">
      <div className="skill-header">
        <div className="skill-image">
          <img src={currentskill.img} alt={`Logo ` + currentskill.title} />
        </div>
      </div>
      <div className="skill-content">
        <p>{currentskill.text}</p>
        <p>{currentskill.other}</p>
      </div>
    </div>
  );
};

export default Skill;
