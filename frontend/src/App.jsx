import Navbar from "./components/navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

function App() {

  return (

    <main className="relative min-h-screen bg-[#050816] overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <div id="home">

        <Hero />

      </div>

      {/* ABOUT */}

      <About />

      {/* SKILLS */}

      <Skills />

      <Projects />

    </main>
  );
}

export default App;