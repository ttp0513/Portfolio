import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Hero } from "@/sections/Hero";


function App() {
  return (
    
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
