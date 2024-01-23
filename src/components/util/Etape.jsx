import React from "react";

const Etape = ({ object }) => {
  return (
    <div className={`etape ${object.id % 2 === 0 ? "gauche" : "droite"}`}>
      <div className="default-content">
        <h3>{object.title}</h3>
        <p>{object.description}</p>
      </div>
      <div className="hover-content">
        <p>{object.text}</p>
      </div>
    </div>
  );
};

export default Etape;
