import React from "react";

const NavPoint = ({ sectionIndex }) => {
  return (
    <div className={`nav-point`}>
      <ul>
        <button className={`point ${sectionIndex === 0 ? "active" : ""}`}>
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button className={`point ${sectionIndex === 1 ? "active" : ""}`}>
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button className={`point ${sectionIndex === 2 ? "active" : ""}`}>
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button className={`point ${sectionIndex === 3 ? "active" : ""}`}>
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button className={`point ${sectionIndex === 4 ? "active" : ""}`}>
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
      </ul>
    </div>
  );
};

export default NavPoint;
