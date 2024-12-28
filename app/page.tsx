import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects"


export default function Home() {
  return (
    <main >
      <section>
        <Header/>
      </section>
      <section>
        <Projects />
      </section>

      <section>
        <About />
      </section>

      <section>
        <h1>Stacks</h1>
      </section>

      <section>
        <h1>Contact</h1>
      </section>
    </main>
  );
}
