import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "rs9490268@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/rishisharma056" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          Let's work together on your next project
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out through the form or connect with me on social media.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
