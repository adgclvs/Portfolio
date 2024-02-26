import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ index, page }) => {
  let to, buttonText;
  switch (page) {
    case "about":
      to = "/";
      buttonText = index === 0 ? "More" : "Return";
      break;
    case "my-life":
      to = "my-life";
      buttonText = index === 0 ? "More" : "Return";
      break;
    case "projects":
      to = "/";
      buttonText = index === 0 ? "More" : "Return";
      break;
    case "my-projects":
      to = "my-projects";
      buttonText = index === 0 ? "More" : "Return";
      break;
    default:
      to = "";
      buttonText = null;
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink to={to} onClick={handleClick}>
      <div className="button">
        <h1>{buttonText}</h1>
      </div>
    </NavLink>
  );
};

export default Button;
