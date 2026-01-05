import {Mail, Phone, MapPin, Send} from "lucide-react";
import {Button} from "@/components/Button";


const contactInfo = [
    {
        icon: Mail,
        label: "Email", 
        value: "johnphanthe@gmail.com",
        href: "mailto:johnphanthe@gmail.com"
    },
    {
        icon: Mail,
        label: "Phone", 
        value: "+1 (651) 206-4261",
        href: "#"
    },
    {
        icon: MapPin,
        label: "Location", 
        value: "Atlanta, GA",
        href: "#"
    },

]

export const Contact = () => {
    return (
        
        <section id="contact" className="py-20 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-higlight/5 rounded-full blur-3xl"></div>
            </div>
            {/*Header */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="space-y-6">
                <span className="text-secondary text-md font-medium tracking-wider uppercase animate-fade-in animate-delay-200">Get In Touch</span>
                <h2 className="mt-4 text-4xl md:text-5xl leading-tight font-bold animate-fade-in animate-delay-200 text-secondary-foreground">Let's build {" "}
                    <span className=" font-serif italic font-normal text-white">something great!</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animate-delay-400 mb-16">I'd love to hear about how we can work together.</p>
                </div>
            
                {/* Contact Form */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="bg-surface/30 p-8 rounded-3xl border border-border animate-fade-in animate-delay-400">
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor ="name"
                                    className="block text-sm font-medium mb-2">Name</label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    required
                                    placeholder="Your Name..."
                                    className="w-full px-4 py-3 rounded-xl
                                    bg-surface/10 border border-primary/30 focus:border-primary 
                                    focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>
                            <div>
                                <label 
                                    htmlFor ="email"
                                    className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    id="email" 
                                    type="email" 
                                    required
                                    placeholder="Your@email.com"
                                    className="w-full px-4 py-3 rounded-xl
                                    bg-surface/10 border border-primary/30 focus:border-primary 
                                    focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>
                            <div>
                                <label 
                                    htmlFor ="message"
                                    className="block text-sm font-medium mb-2" >Message</label>
                                <textarea
                                    id="message" 
                                    type="text" 
                                    placeholder="Let's chat something..."
                                    className="w-full px-4 py-3 rounded-xl
                                    bg-surface/10 border border-primary/30 focus:border-primary 
                                    focus:ring-1 focus:ring-primary outline-none transition-all resize-none "/>
                            </div>
                            <Button className="w-full" type="submit" >
                                Send Message
                                <Send/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};