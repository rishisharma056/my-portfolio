import { Badge } from "./ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "Vue.js", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          Tools and technologies I work with
        </p>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
