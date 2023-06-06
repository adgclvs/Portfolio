import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Header />
        <div className="main">
          <div className="myself">
            <p>Hello i'm Adrien Student at Bordeaux University</p>
            <img src="../assets/img/icon-html.png" alt="" width="200px" height="200px" />
          </div>

          <div className="technologies">
            <p>Techno learned</p>
            <ul>
              <li>
                <img src="../assets/img/icon-html.png" alt="Logo HTML" width="50px" height="50px" />
              </li>
              <li>
                <img src="../assets/img/icon-css.png" alt="Logo CSS" width="50px" height="50px" />
              </li>
              <li>
                <img
                  src="../assets/img/icon-js.png"
                  alt="Logo JavaScript"
                  width="50px"
                  height="50px"
                />
              </li>
              <li>
                <img
                  src="../assets/img/icon-react.png"
                  alt="Logo React"
                  width="50px"
                  height="50px"
                />
              </li>
              <li>
                <img src="../assets/img/icon-sass.png" alt="Logo Sass" width="50px" height="50px" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
