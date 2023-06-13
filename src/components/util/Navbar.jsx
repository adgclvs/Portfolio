import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNavbar(true);
    }, 250);
  }, [showNavbar]);

  return (
    <div className={`navbar ${showNavbar ? "show" : ""}`}>
      <h3>Adrien.dev</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
