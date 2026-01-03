import {Button} from "@/components/Button";
import {ArrowRight, Download} from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react"

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background Elements */ }
        <div className = "absolute inset-0">
            <img src="/hero-background.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background">
            </div>
        </div>

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
        <div className="container mx-auto px-6 pt-32 pb-30 relative z-10">
            <div className = "grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column - Text Content */ }
                <div className="space-y-4">
                    <div className="animate-fade-in">
                        <span 
                        className = "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-l text-white">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> Data Analyst
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> BI Analyst
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> Web Developer
                        </span>                         
                    </div>
                

                    {/* Headline */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Turning <span class="text-primary glow-text">data</span> into decisions with 
                            <span class="font-serif italic font-normal text-primary glow-text"> analytics</span> and 
                            <span class="font-serif italic font-normal text-primary glow-text"> engineering</span>.
                        </h1>

                        <p className = "text-lg text-muted-foreground max-w-xl animate-fade-in animate-delay-400">
                            Hi, I'm Trong, a data analyst specializing in structured, scalable solutions, from data pipelines
                            to interactive dashboards. I bring clear logic and purposeful storytelling to every project I build.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 mx-auto">
                        <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-600">

                            {/* Contact */}
                        <Button >
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>

                            {/* Download CV */}
                        <button className = "wrap-text-bottom wrap-text-bottom:hover relative z-10 rounded-full flex items-center justify-center gap-2 cursor-pointer">
                            <Download className="w-5 h-5"/>
                                <a className= "px-2" href="/public/TTP_cv.pdf" download>Download CV</a>
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
                    <div className="relative animate-fade-in animate-delay-1000">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0
                            rounded-3xl bg-gradient-to-br from-primary/60 
                            to-primary/10 blur-2xl animate-pulse">
                            </div>

                            {/* Profile Image */ }
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                    src="/TTP_self.JPG"
                                    alt="Trong Phan"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                            </div>

                            {/* Employment Badge */ }
                            <div className="absolute -bottom-6 -right-10 glass rounded-xl px-4 py-3 hover:bg-primary animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">Available to work</span>
                                </div>
                            </div>

                             {/* Experience Badge */ }
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="text-2xl font-bold text-primary text-center">3+</div>
                                <div className="text-sm font-medium">Years Exp</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div> 

        </section>
    )
};