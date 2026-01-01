import {Button} from "@/components/Button";
import {ArrowRight, Download} from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background Elements */ }
        <div className = "absolute inset-0">
            <img src="/hero-image.png" alt="Hero background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
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
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className = "grid lg:grid-cols-1 gap-12 items-center">
                {/* Left Column - Text Content */ }
                <div className = "space-y-8">
                    <div className="animate-fade-in">
                        <span 
                        className = "inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-l text-white">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> Data Analyst
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> BI Analyst
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/> Web Developer
                        </span>                         
                    </div>
                </div>

                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-200"> 
                        Building end‑to‑end <span class="text-primary glow-text"> data & web solutions </span> 
                        that merge <span class="font-serif italic font-normal text-primary ">analytics</span> with
                        <br/> 
                        <span class="font-serif italic font-normal text-primary"> engineering. 
                        </span> 
                    </h1>
                    <p className = "text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-400">
                        Hi, I'm Trong Phan - an aspiring web developer and an experienced data analyst specializing in business intelligence and data engineering. 
                        I engineer insights and build the web around them.
                    </p>
                </div>

                {/* CTAs */}
                <div>
                <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5"/>
                </Button>
                <button className = "bg-sky-500/100 inline-flex px-8 py-4 text-lg bg-sky rounded-full animated-border:hover">
                    <Download className="w-5 h-5"/>
                    <span className="px-2">
                        Download CV
                    </span>
                </button>
                </div>


            </div>
        </div> 

        </section>
    )
};