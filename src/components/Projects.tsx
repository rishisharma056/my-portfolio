import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Intership Allocation System",
      description: "AI-Based Smart Allocation Engine for Internships.This project builds an AI/ML-powered smart allocation engine to match students with internship opportunities.",
      tags: ["React", "Node.js", "PostgreSQL", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/rishisharma056/Internship-Allocation",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tags: ["React", "TypeScript", "Firebase", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "Portfolio Generator",
      description: "SaaS platform for creating beautiful portfolio websites with customizable templates.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      title: "AI Content Writer",
      description: "AI-powered content generation tool with SEO optimization and multiple language support.",
      tags: ["React", "OpenAI", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(263_70%_60%/0.2)] group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
