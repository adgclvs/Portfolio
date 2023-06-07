import React, { useEffect, useState } from "react";
import Header from "./Header";

const Main = () => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 500);
  }, [showMain]);

  return (
    <div className={`main ${showMain ? "show" : ""}`}>
      <div className="myself">
        <div className="introduce">
          <h1>
            Front-End React <br /> Developer
          </h1>
          <p>
            Hello, I'm Adrien GONÇALVES. A passionate Front-end React Developer. I study at the
            University of Bordeaux.
          </p>
        </div>
        <img
          src="../assets/img/profile-picture.png"
          alt="Photo de profile"
          width="200px"
          height="200px"
        />
      </div>

      <div className="technologies">
        <p>Tech Stack </p>
        <i class="fa-solid fa-pipe fa-beat fa-xl"></i>
        <ul>
          <li>
            <img src="../assets/img/icon-html.png" alt="Logo HTML" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-css.png" alt="Logo CSS" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-js.png" alt="Logo JavaScript" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-react.png" alt="Logo React" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-sass.png" alt="Logo Sass" width="25px" height="25px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
