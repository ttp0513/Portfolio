import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-4 transition-colors duration-300 ${
        isScrolled
          ? "glass-strong nav-glass shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#home"
          aria-label="Return to the top of the portfolio"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          TP<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-md text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <a
            href="/Trong_Phan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 text-sm font-medium text-primary transition-colors hover:text-secondary"
          >
            View Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          className="cursor-pointer p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="glass animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-xl text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Trong_Phan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 text-xl font-medium text-primary hover:text-secondary"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
