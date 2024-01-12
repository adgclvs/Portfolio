import React from "react";

const Button = ({ index }) => {
  return (
    <div className="button">
      <h1>{index === 0 ? "Watch more" : "Return"}</h1>
    </div>
  );
};

export default Button;
