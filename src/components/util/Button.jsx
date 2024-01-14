import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ index, page }) => {
  let to, buttonText;
  switch (page) {
    case "about":
      to = "/";
      buttonText = index === 0 ? "Watch more" : "Return";
      break;
    case "my-life":
      to = "my-life";
      buttonText = index === 0 ? "Watch more" : "Return";
      break;
    case "projects":
      to = "/";
      buttonText = index === 0 ? "Watch more" : "Return";
      break;
    case "my-projects":
      to = "my-projects";
      buttonText = index === 0 ? "Watch more" : "Return";
      break;
    default:
      to = "";
      buttonText = null;
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="button" onClick={handleClick}>
      <NavLink to={to}>
        <h1>{buttonText}</h1>
      </NavLink>
    </div>
  );
};

export default Button;
