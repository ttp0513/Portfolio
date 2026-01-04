import { Button } from "@/components/Button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
    {href: "#experience", label: "Experience"}
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) ;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        // when users scroll more than 50px, handleScroll functions returns true 
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
    return (
        <header className= {`fixed top-0 left-0 right-0 transition-all duration-600 ${isScrolled ? "glass-strong py-4 border-none" : "bg-transparent py-6"}  z-50`}>
            <nav className = "container mx-auto px-6 flex items-center justify-between">
                <a
                href = "#"
                className = "text-xl font-bold tracking-tight hover:text-primary">TP<span className = "text-primary">.</span>
                </a>

            {/* Desktop menu */}
            <div>
                <div className = "hidden md:flex items-center gap-2">
                        <div className = {`rounded-full px-2 py-1 flex items-center gap-1 transition duration-300 ease-in-out ${isScrolled ? "glass-strong" : ""} `} >
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} className = "px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-primary">
                            {link.label}
                        </a>
                   
                    ))}
                    </div>
                </div>
            </div>
            <div className = "hidden md:block">
                <Button size="sm" className = "glass">
                    Contact Me
                </Button>
            </div>
            

            {/* Mobile menu button */}
            <button 
                className ="md:hidden p-2 text-foreground cursor-pointer" 
                // When the button is clicked, it toggles the mobile menu open/closed.
                onClick = {() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size  ={24} /> : <Menu size  ={24} />}
            </button>
            </nav>

            {/* Mobile menu (hidden by default) */}
            {isMobileMenuOpen && (
            <div className ="md:hidden glass animate-fade-in">
                <div className = "container mx-auto px-6 py-6 flex flex-col gap-4 text-center">
                    {navLinks.map((link, index) => (
                        <a key={index} 
                           href={link.href}
                           onClick = {() => setIsMobileMenuOpen(false)}
                           className = "text-xl text-muted-foreground hover:text-foreground py-2">
                           {link.label}
                        </a>
                   
                    ))}
                    <Button onClick = {() => setIsMobileMenuOpen(false)} className="mx-auto" >Contact Me</Button>
                </div>
            
            </div>)}
            
        </header>
        )
};