import About from "../components/About";
import Header from "../components/Header";
import Main from "../components/Main";
import Project from "../components/Project";

const Home = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
