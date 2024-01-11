import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNavbar(true);
    }, 250);
  }, [showNavbar]);

  const handleClick = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={`navbar ${showNavbar ? "show" : ""}`}>
      <h3>Adrien.dev</h3>
      <ul>
        <li onClick={() => handleClick(0)}>Home</li>
        <li onClick={() => handleClick(1)}>About</li>
        <li onClick={() => handleClick(2)}>Projects</li>
        <li onClick={() => handleClick(3)}>Skills</li>
        <li onClick={() => handleClick(4)}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
