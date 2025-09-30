import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development without compromising quality",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong communication and teamwork skills",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
            Passionate developer with expertise in building modern web applications
          </p>

          <div className="bg-card rounded-2xl p-8 mb-12 border border-border animate-scale-in">
            <p className="text-lg leading-relaxed mb-6">
              Hi! I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly applications. 
              With several years of experience in web development, I specialize in React, TypeScript, and modern backend technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
              When I'm not coding, you'll find me contributing to open-source projects or writing technical articles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(263_70%_60%/0.2)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
