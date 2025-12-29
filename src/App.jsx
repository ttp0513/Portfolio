import { Navbar } from "@/layout/Navbar";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
