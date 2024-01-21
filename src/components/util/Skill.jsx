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
        <div className="skill-title">
          <h4>{currentskill.title}</h4>
        </div>
      </div>
      <div className="skill-content">
        <div className="skill-project-count">
          <h4>
            {currentskill.project_count === "1"
              ? currentskill.project_count + " project"
              : currentskill.project_count + " projects"}
          </h4>
        </div>
        <div className="skill-time">
          <h4>Since {currentskill.time} </h4>
        </div>
      </div>
    </div>
  );
};

export default Skill;
