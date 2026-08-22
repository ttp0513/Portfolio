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
        <section id="about" className="relative overflow-hidden">
            <SectionBackground image="/about-background.jpg" className="bg-gradient-to-r" />

        
            <div className="container mx-auto py-22 px-6 relative z-10">

                {/* Left Column */ } 
                <div className="space-y-6 animate-fade-in" >  
                    <div className="grid lg-grid-cols-2 gap-16 items-center">
                        <span className="text-secondary text-md font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    

                    <h2 className="text-4xl md:text-5xl leading-tight font-bold animate-fade-in animate-delay-200 text-secondary-foreground">
                        Clarity through analytics,
                        <span className="font-serif italic font-normal text-white"> built for what’s next </span>
                    </h2>

                    <div className="space-y-4 mb-8 text-muted-foreground animate-fade-in animate-delay-400">
                        <p>
                            I am an M.S. Data Science and Analytics candidate with professional
                            experience supporting geo-experimentation and media-effectiveness
                            measurement for retail clients.
                        </p>

                        <p>
                            My work combines statistical analysis, business intelligence, and
                            applied AI. I focus on building reproducible workflows, evaluating
                            uncertainty honestly, and communicating results in a form stakeholders
                            can use.
                        </p>
                    </div>
                </div>

                <div className="font-medium font-serif italic text-2xl mb-4">Skills</div>

                {/* Right Column */ } 
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} 
                        className="glass p-6 rounded-2xl animate-fade-in cursor-pointer hover:bg-secondary-foreground/20"
                        style={{animationDelay: `${(index+1) * 200}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-border/70 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-primary">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};