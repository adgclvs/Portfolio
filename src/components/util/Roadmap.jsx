import React from "react";
import Etape from "./Etape";

const Roadmap = ({ data = [] }) => {
  console.log(data);
  return (
    <div className="roadmap">
      {data.map((item, index) => (
        <Etape key={index} object={item} />
      ))}
      <div className="midle-line"></div>
    </div>
  );
};

export default Roadmap;
