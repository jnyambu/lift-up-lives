import { Card } from "@/components/ui/card";
import educationIcon from "@/assets/education-icon.jpg";
import budgetIcon from "@/assets/budget-icon.jpg";
import communityIcon from "@/assets/community-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: educationIcon,
      title: "Financial Literacy",
      description: "Learn money management through simple, bite-sized lessons designed for everyone, regardless of background or education level.",
      alt: "Open book with financial symbols representing financial education",
    },
    {
      icon: budgetIcon,
      title: "AI-Powered Budgeting",
      description: "Get personalized budget recommendations based on your income and spending patterns. Our AI helps you save more effectively.",
      alt: "Smartphone displaying budget charts and AI features",
    },
    {
      icon: communityIcon,
      title: "Community Support",
      description: "Connect with others on the same journey. Share experiences, get advice, and support each other toward financial freedom.",
      alt: "People holding hands in circle around heart symbolizing community",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and resources designed to help you break free from financial challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="w-20 h-20 rounded-lg shadow-soft"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
