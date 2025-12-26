const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
    {href: "#experience", label: "Experience"}
]

export const Navbar = () => {
    return <header>
            <nav>
                <a>TP<span>.</span>
                </a>
            <div>
                <div>
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            </nav>
        </header>
};