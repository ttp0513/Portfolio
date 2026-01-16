import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "johnphanthe@gmail.com",
    href: "mailto:johnphanthe@gmail.com",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Atlanta, GA",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false); // send message, show loading

  const [submitStatus, setSubmitStatus] = useState({
    // show status of the message ? successful submit
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text ||
          "Oops...Seems the form is not working correctly. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-higlight/5 rounded-full blur-3xl"></div>
      </div>

      {/*Header */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-6">
          <span className="text-secondary text-md font-medium tracking-wider uppercase animate-fade-in animate-delay-200">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight font-bold animate-fade-in animate-delay-200 text-secondary-foreground">
            Let's build{" "}
            <span className=" font-serif italic font-normal text-white">
              something great!
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-400 mb-16">
            I'd love to hear about how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-22 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-surface/30 p-8 rounded-3xl border border-border animate-fade-in animate-delay-400">
            <h3 className="text-xl font-semibold mb-6">Contact Form</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name..."
                  className="w-full px-4 py-3 rounded-xl
                                    bg-surface/10 border border-primary/30 focus:border-primary 
                                    focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your@email.com"
                  className="w-full px-4 py-3 rounded-xl
                                    bg-surface/10 border border-primary/30 focus:border-primary 
                                    focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  type="text"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Let's chat something..."
                  className="w-full px-4 py-3 rounded-xl
                                    bg-surface/10 border border-primary/30 focus:border-primary 
                                    focus:ring-1 focus:ring-primary outline-none transition-all resize-none "
                />
              </div>

              <Button className="w-full" type="submit" disable={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 green-red-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animateion-delay-400">
            <div className="bg-surface/30 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-prumary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Card */}
              <div className="bg-surface/30 rounded-3xl px-8 py-4 border border-primary/30 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium">Currently Available</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  - I’m currently pursuing a full‑time master’s degree in Data
                  Science and Analytics at Kennesaw State University. Even with
                  a demanding course load, I’m actively open to internships,
                  part‑time roles, and meaningful project collaborations.
                  <p>
                    - If you’re looking to connect or
                    bring on an intern or freelancer, I’d love to talk.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
