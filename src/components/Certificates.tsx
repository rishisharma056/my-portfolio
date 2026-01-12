import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const Certificates = () => {
  const certificates = [
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      issueDate: "Feb 2025",
      credentialId: "649fbd67-ff63-462f-80a8-0b4c1394444c",
      credentialUrl: "https://www.credly.com/badges/649fbd67-ff63-462f-80a8-0b4c1394444c/public_url",
      logo: "🏅",
    },
    {
      name: "SkillsBuild - Customer Engagement: Problem Solving and Process Controls",
      issuer: "IBM SkillsBuild",
      issueDate: "Feb 2025",
      credentialId: "322dd326-fbfe-4c41-b06c-4792ae52fb31",
      credentialUrl: "https://www.credly.com/badges/322dd326-fbfe-4c41-b06c-4792ae52fb31/public_url",
      logo: "🎖️",
    },
    {
      name: "SkillsBuild - Customer Engagement: Communication and Personality Dynamics",
      issuer: "IBM SkillsBuild",
      issueDate: "Feb 2025",
      credentialId: "85a91027-0c8a-4774-8734-b2648688aed8",
      credentialUrl: "https://www.credly.com/badges/85a91027-0c8a-4774-8734-b2648688aed8/public_url",
      logo: "🎖️",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
          Licenses & Certifications
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in">
          Professional credentials and achievements
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(263_70%_60%/0.2)] h-full animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-xs mb-3">
                      Issued {formatDate(cert.issueDate)}
                    </p>
                    {cert.credentialId && (
                      <p className="text-muted-foreground text-xs">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm text-primary group-hover:underline">
                  <Award size={16} />
                  <span>Show credential</span>
                  <ExternalLink size={14} className="ml-auto" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
