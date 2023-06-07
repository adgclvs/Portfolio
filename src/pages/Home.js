import Header from "../components/Header";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Header />
        <Main />
        <div className="about">
          <h2>Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi fugit quo rerum
            nihil? Rerum molestiae pariatur sit exercitationem ab itaque, nostrum alias iste.
            Molestias veniam nemo repudiandae odit id.
          </p>
        </div>
        <div className="myprojects">
          <h1>my projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
