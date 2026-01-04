import { Code2, BugPlay, ChartNoAxesCombined , ChartPie } from "lucide-react";
import { SectionBackground } from "@/components/Section-Background";

const highlights = [
  {
    icon: Code2,
    title: "Data Modeling & Pipeline Design",
    description:
      "Building clean, reliable data models and ETL pipelines that power accurate dashboards and business decisions."
  },
  {
    icon: ChartNoAxesCombined ,
    title: "Analytical Storytelling",
    description:
      "Transforming raw data into clear insights, KPIs, and narratives that help stakeholders understand what truly drives performance."
  },
  {
    icon: ChartPie ,
    title: "Dashboard Engineering",
    description:
      "Designing intuitive, actionable Power BI dashboards with optimized DAX, semantic models, and business‑ready metrics."
  },
  {
    icon: BugPlay ,
    title: "SQL & Python for Analysis",
    description:
      "Using SQL and Python to clean, transform, and analyze data with precision, speed, and reproducibility."
  }
];


export const About = () => {
    return (
        <section id="about" className="relative py-10 overflow-hidden">
            <SectionBackground image="/about-background-3.jpg" className="bg-gradient-to-b" />

        
            <div className="container mx-auto px-6 relative z-10">

                {/* Left Column */ } 
                <div className="space-y-6 animate-fade-in" >  
                    <div className="grid lg-grid-cols-2 gap-16 items-center">
                        <span className="text-secondary text-md font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    

                    <h2 className="text-4xl md:text-5xl leading-tight font-bold animate-fade-in animate-delay-200 text-primary">
                        Clarity through analytics,
                        <span className="font-serif italtic font-normal text-white"> built for what’s next </span>
                    </h2>

                    <div className="space-y-6 mb-8 text-muted-foreground animate-fade-in animate-delay-400">

                        <p >
                        I’ve always been the kind of person who wants to understand how things work, not just on the surface, but underneath. That curiosity turned into a habit: breaking problems into clean, logical pieces and rebuilding them into something clearer, stronger, and more useful.
                        </p>

                        <p >
                        Analytics gave me the language to explain patterns. </p>
                        <p>Engineering gave me the tools to scale solutions. </p>
                        <p>And experience taught me how to connect the two.</p>  
                        
                        <p>
                        I’ve worked with teams on media effectiveness, built data models for dashboards, and engineered front-end systems that make insights usable. Now pursuing my master’s in Data Science and Analytics, I’m deepening my ability to turn data into decisions and build systems that scale.
                        </p>

                        <p>
                        Together, these experiences shaped the way I approach every project, with intention, structure, and a commitment to making things genuinely better. My work isn’t just about data or code; it’s about creating clarity where there was confusion, direction where there was noise, and systems where there were only scattered pieces.
                        </p>
                    </div>

                    <div className="glass-light rounded-2xl p-5 glow-border animate-fade-in animate-delay-400">
                        <p className="text-lg font-serif font-medium italic text-foreground">
                        "My mission is to bring clarity to complexity, to understand problems deeply, break them into what truly matters, and rebuild them into systems that help people move with confidence.  
                        Every project is a chance to make something clearer, stronger, and more useful than it was before."
                        </p>
                    </div>
                </div>

                {/* Right Column */ } 
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} className="glass-strong p-6 rounded-2xl animate-fade-in animate-delay-400">
                            <div>
                                <item.icon/>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};