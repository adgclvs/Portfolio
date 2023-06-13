import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Header from "../components/sections/Header";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Navbar from "../components/util/Navbar";

const Home = () => {
  // const [valueScroll, setValueScroll] = useState(0);

  // window.addEventListener("scroll", () => {
  //   setValueScroll(window.scrollY);
  //   // if (valueScroll > 200) {
  //   //   window.scrollTo(0, window.innerHeight);
  //   // }
  // });

  // const style = {
  //   animation: "myAnimation 1s ease-in-out",
  // };

  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
