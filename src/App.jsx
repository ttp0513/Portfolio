import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Hero } from "@/sections/Hero";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectCaseStudyPage } from "@/pages/ProjectCaseStudyPage";
import { Route, Routes } from "react-router";

const HomePage = () => {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:projectSlug" element={<ProjectCaseStudyPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
