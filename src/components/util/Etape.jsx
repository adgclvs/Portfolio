import React from "react";

const Etape = ({ titre, position }) => {
  return (
    <div className={`etape ${position}`}>
      <h3>{titre}</h3>
    </div>
  );
};

export default Etape;
