import {SectionBackground} from "@/components/Section-Background";

const experience = [
    {
        period: "2025 - Present",
        role: "Student",
        company: "Kennesaw State University",
        description: "Support",
        technologies: ["React", "TypeScript", "Power BI"],
        current: true,
    },
        {
        period: "2022 - 2025",
        role: "Advanced Analytics Analyst",
        company: "Ovative Group LLC",
        description: "Support",
        technologies: ["Excel", "R", "Python", "ClickUp", "Confluence"],
        current: false,
    },
    {
        period: "2019 - 2022",
        role: "Student Accounting Assistant",
        company: "University of Minnesota - CFAN Department",
        description: "Support",
        technologies: ["Excel", "PeopleSoft"],
        current: false,
    },
        {
        period: "2019",
        role: "Data Analyst Intern",
        company: "Y Venture Group",
        description: "Support",
        technologies: ["Excel", "Python"],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section id="experience"
        className="py-22 relative overflow-hidden">
        <SectionBackground image="experience-background-1.jpg" className="bg-gradient-to-l"/>
        <div />
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary text-md font-medium tracking-wider uppercase">My Journey</span>
                    <h2
                    className="text-4xl md:text-5xl font-bold mt-4 mb-7 animate-fade-in
                    animate-delay-100 text-secondary-foreground">Experience that {""}
                    <span className="font-serif italic font-normal text-white"> speaks volume.</span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animate-delay-200">
                        A timeline of my academic and professional growth, from curiosity and experimentation
                        to a mission‑driven career built on clarity, structure, and meaningful impact.
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
                        {experience.map((exp, index) => (
                            <div key={index} 
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{animationDelay: `${(index + 2) * 200}ms`}}>
                                {/* Dots */}

                                <div className="absolute"></div>

                                {/* Items */}
                                <div className= {`pl-8 md:pl-0 ${
                                    index % 2 === 0 
                                    ? "md:pr-16 md:text-right" 
                                    : "md:col-start-2 md:pl-16"}`
                                    }>

                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-muted-foreground mt-4">{exp.description}</p>
                                        <div>
                                            {exp.technologies.map((tech, index) => {
                                                <span>{tech}</span>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        
        </section>
    )
};