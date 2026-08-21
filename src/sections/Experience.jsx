import {SectionBackground} from "@/components/Section-Background";

const experience = [
{
    period: "Mar 2026 - Present",
    role: "Student Researcher",
    company: "Data Quality and Survey Methodology Lab",
    description:
        "Designing and evaluating a human-supervised workflow for classifying noisy, open-ended survey responses while preserving human labels, model outputs, and reproducible audit evidence.",
    technologies: ["Python", "Streamlit", "Applied AI Evaluation", "Research Methods"],
    current: true,
},
{
    period: "Expected Dec 2027",
    role: "M.S. Data Science and Analytics Candidate",
    company: "Kennesaw State University",
    description:
        "Strengthening my foundations in statistical methods, programming, model evaluation, and responsible applied data science. Current GPA: 4.00.",
    technologies: ["Python", "R", "SAS", "Statistical Modeling"],
    current: false,
},
{
    period: "Jun 2022 - Feb 2025",
    role: "Advanced Analytics Analyst",
    company: "Ovative Group LLC",
    description:
        "Supported geo-experiment design and analysis across seven-plus retail client accounts and online and offline media channels. Configured an internal R-based geo-testing platform, evaluated iROAS point estimates and one-sided confidence bounds, and helped assess whether budget or duration changes were needed. Prepared and presented findings, uncertainty, and measurement implications to internal analytics teams.",
    technologies: ["R", "Geo Experimentation", "Causal Inference", "Excel"],
    current: false,
},
{
    period: "2019 - 2022",
    role: "Accounting Assistant",
    company: "University of Minnesota - CFAN Department",
    description:
        "Supported financial operations through purchasing reconciliation, budget validation, and streamlined administrative workflows.",
    technologies: ["Excel", "PeopleSoft"],
    current: false,
},
{
    period: "2019",
    role: "Data Analyst Intern",
    company: "Y Venture Group",
    description:
        "Built a U.S. book-sales dashboard with a team of interns to forecast demand and improve inventory planning.",
    technologies: ["Excel", "Python"],
    current: false,
},
{
    period: "2017 - 2022",
    role: "Undergraduate Student",
    company: "University of Minnesota",
    description:
        "Completed a bachelor's degree in Management Information Systems and Supply Chain Operations, with a minor in Business Analytics.",
    technologies: ["Excel", "Python"],
    current: false,
}

]


export const Experience = () => {
    return (
        <section id="experience"
        className="py-22 relative overflow-hidden">
        <SectionBackground image="experience-background-1.jpg" className="bg-gradient-to-r"/>
        <div />
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary text-md font-medium tracking-wider uppercase animate-fade-in animate-delay-100">My Journey</span>
                    <h2
                    className="text-4xl md:text-5xl font-bold mt-4 mb-7 animate-fade-in
                    animate-delay-100 text-secondary-foreground">Experience in
                    <span className="font-serif italic font-normal text-white"> experimentation and applied analytics.</span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animate-delay-200">
                        Professional and academic work spanning geo-experimentation, statistical analysis,
                        and human-supervised AI evaluation.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[3px]
                     bg-gradient-to-b from-primary/80 via-primary/30 to-transparent md:-translate-x-1/2
                     shadow-[0_0_25px_rgb(143, 91, 39, 0.8)]">
                    </div>


                {/* Experience Items */}
                    <div className="space-y-12"> 
                        {experience.map((exp, index) => {
                        // const isStudent = exp.role?.toLowerCase().includes("student");
                        return (
                            <div
                            key={index}
                            className="relative grid md:grid-cols-2 gap-4 animate-fade-in"
                            style={{ animationDelay: `${(index + 2) * 200}ms` }}
                            >

                            {/* Item Dots */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {exp.current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                            </div>
                            {/* Item Content*/}
                            <div
                                className={`pl-8 md:pl-0 ${
                                index % 2 === 0
                                    ? "md:pr-16 md:text-right"   // LEFT
                                    : "md:col-start-2 md:pl-16"  // RIGHT
                                }`}
                            >
                                <div className="group glass-strong p-4 rounded-2xl border border-primary/30 hover:border-primary/50 hover:text-primary hover:bg-muted/50 transition-all duration-500">
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground font-normal text-sm mt-1 italic">{exp.company}</p>
                                <p className="text-muted-foreground mt-4 whitespace-pre-line">{exp.description}</p>

                                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "" }`}>
                                    {exp.technologies.map((tech, techId) => (
                                    <span key={techId} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground group-hover:bg-primary group-hover:text-border transition-all duration-800"
                                    >{tech}</span>
                                    ))}
                                </div>
                                </div>
                            </div>
                            </div>
                        );
                        })}

                    </div>
                </div>


            </div>
        
        </section>
    )
};
