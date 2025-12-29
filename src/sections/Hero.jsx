export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* Background Elements */ }
        <div className = "absolute inset-0">
            <img src="/hero-image.png" alt="Hero background" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
            </div>
        </div>

        {/* Green Dots */ }
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, index) => (
                <div 
                    className = "absolute w-1.5 h-1.5 rounded-full opacity-50 bg-primary animate-pulse"
                     style = {{
                        backgroundColor: "#2082A6",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 * Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 1}s`
                        }}
                ></div>
            ))}
        </div>
        </section>
    )
};