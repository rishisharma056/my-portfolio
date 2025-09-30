import { Calendar, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large React applications with TypeScript and modern tooling.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript"],
    },
    {
      title: "Modern CSS Techniques with Tailwind",
      excerpt: "Exploring advanced Tailwind CSS patterns and creating maintainable design systems.",
      date: "2024-03-10",
      readTime: "6 min read",
      tags: ["CSS", "TailwindCSS"],
    },
    {
      title: "API Design Best Practices",
      excerpt: "Creating RESTful APIs that are intuitive, scalable, and developer-friendly.",
      date: "2024-03-05",
      readTime: "10 min read",
      tags: ["Backend", "API"],
    },
  ];

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Latest Articles
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          Thoughts on web development and technology
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(263_70%_60%/0.2)] group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="group/btn">
                Read More
                <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
