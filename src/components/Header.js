import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 250);
  }, [showHeader]);

  return (
    <div className={`header ${showHeader ? "show" : ""}`}>
      <h3>Adrien.dev</h3>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/projects">
          <li>Projects</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
