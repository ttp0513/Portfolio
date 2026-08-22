/* eslint-disable react-hooks/purity */
import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "lucide-react"
import { SectionBackground } from "@/components/Section-Background";

// const skillsList = [
//     "Python",
//     "R",
//     "SAS",
//     "Excel",
//     "Geo Experimentation",
//     "Causal Inference",
//     "Statistical Modeling",
//     "Applied AI Evaluation",
//     "Streamlit"
// ];

export const Hero = () => {
    return (
    <section className="relative flex items-center overflow-hidden">
        
        {/* Background Elements */ }
       <SectionBackground image="/hero-background.jpg" className="bg-gradient-to-l" />

        {/* Falling Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
            <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-80"
            style={{
                backgroundColor: "#ffffff", 
                top: `${Math.random() * 100}%`, // start above the screen
                left: `${Math.random() * 100}%`,
                animation: `star-fall ${3 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: "rotate(45deg)"
            }}
            ></div>
        ))}
        </div>


        {/* Content */ }   
        <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
            <div className = "grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column - Text Content */ }
                <div className="space-y-4">
                    <div className="animate-fade-in">
                        <span 
                        className = "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-l text-white">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                        Experimentation Analytics &amp; Applied Data Science
                        </span>                         
                    </div>
                

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-200">
                            Turning <span className="text-primary glow-text">experiments</span> and data into
                            <span className="font-serif italic font-normal text-primary glow-text"> decision-ready evidence</span>.
                        </h1>

                        <p className = "text-lg text-muted-foreground max-w-2xl animate-fade-in animate-delay-400">
                            I'm Trong Phan, an M.S. Data Science and Analytics candidate with professional experience supporting
                            geo-lift measurement and causal-inference workflows. I use Python, R, statistical modeling, and applied
                            AI to investigate business questions, validate results, and communicate what the evidence supports.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 mx-auto">
                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-600">

                            {/* Contact */}
                            <Button as="a" href="#projects">
                                Explore my Work <ArrowRight className="w-5 h-5" />
                            </Button>

                            {/* Download CV */}
                        <button className = "wrap-text-bottom wrap-text-bottom:hover relative z-10 rounded-full flex items-center justify-center gap-2 cursor-pointer">
                            <Download className="w-5 h-5"/>
                                <a className= "px-2" href="/Trong_Phan_Resume.pdf" download>Download Résumé</a>
                        </button>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center mt-4 gap-4 animate-fade-in animate-delay-800">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                               { icon: Github, href:"https://github.com/ttp0513"},
                               { icon: Linkedin, href:"https://www.linkedin.com/in/trongthephan/"}
                            ].map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                {<social.icon />}
                                </a>
                            )
                            )}
                    </div>
                </div>

                {/* Right Column */ }
                    <div className="relative animate-fade-in animate-delay-600">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 
                            rounded-3xl bg-gradient-to-br from-primary/60 
                            to-primary/10 blur-2xl animate-pulse">
                            </div>

                            {/* Profile Image */ }
                            <div className="relative bg-muted rounded-3xl p-2 glow-border">
                                <img 
                                    src="/profile-test.jpg"
                                    alt="Trong Phan"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                            </div>

                            {/* Employment Badge */ }
                            <div className="absolute -bottom-6 -right-10 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available Spring 2028</span>
                                </div>
                                
                            </div>


                             {/* Experience Badge */ }
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="text-2xl font-bold text-primary text-center">7+</div>
                                <div className="text-sm font-medium">Retail Accounts</div>
                            </div>
                        </div>
                    </div>
            </div>

                {/* Skills Demo */ }
                {/* <div className=" mt-20 animate-fade-in animate-delay-800">
                    <p className="text-lg text-muted-foreground mb-10 text-center">My Tech Stack</p>
                        <div className="relative flex overflow-hidden">
                            <div className="flex relative whitespace-nowrap animate-marquee" >
                            {[...skillsList,...skillsList].map((skill, index) => (
                            <div key={index} 
                                className="flex-shrink-0 px-8">
                                <span 
                                className="mx-2 text-2xl font-semibold text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                {skill}
                                </span>
                            </div>
                            ))}
                            </div>
                        </div>
                </div> */}
  
        </div>
            
    </section>
    )
};
