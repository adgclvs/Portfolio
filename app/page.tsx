import About from "./_components/About";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects"


export default function Home() {
  return (
    <main >
        <Header/>
        <Hero/>
        <Projects />
        <About />
    </main>
  );
}
