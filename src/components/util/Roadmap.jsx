import React from "react";
import Etape from "./Etape";

const Roadmap = ({ list = [] }) => {
  return (
    <div className="roadmap">
      {list.map((item, index) => (
        <Etape key={index} titre={item.titre} position={item.position} />
      ))}
    </div>
  );
};

export default Roadmap;
