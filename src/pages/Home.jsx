import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Project from "../components/Project";

const Home = () => {
  const [valueScroll, setValueScroll] = useState(0);

  window.addEventListener("scroll", () => {
    setValueScroll(window.scrollY);
    console.log(valueScroll);
  });

  const style = {
    animation: "myAnimation 1s ease-in-out",
  };

  return (
    <div>
      <div className="home">
        <Header />
        <Main />
        {/* <About /> */}
        <div className="myprojects">
          {valueScroll > 250 && (
            <div style={style}>
              <Project projectId={0} />
            </div>
          )}
          {valueScroll > 500 && (
            <div style={style}>
              <Project projectId={1} />
            </div>
          )}
          {valueScroll > 1000 && (
            <div style={style}>
              <Project projectId={2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
