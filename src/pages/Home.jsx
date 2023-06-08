import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Project from "../components/Project";

const Home = () => {
  const [valueScroll, setValueScroll] = useState(0);

  //const project = document.querySelector(".project");

  window.addEventListener("scroll", () => {
    setValueScroll(window.scrollY);
    console.log(valueScroll);
  });

  return (
    <div>
      <div className="home">
        <Header />
        <Main />
        {/* <About /> */}
        <div className="myprojects">
          <Project projectId={0} />
          <Project projectId={1} />
          <Project projectId={2} />

          {valueScroll > 300 && true}
          {valueScroll > 500 && true}
          {valueScroll > 1000 && true}
        </div>
      </div>
    </div>
  );
};

export default Home;
