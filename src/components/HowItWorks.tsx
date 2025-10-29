import { Card } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: BookOpen,
      step: "Step 1",
      title: "Learn the Basics",
      description: "Start with simple financial literacy modules that teach budgeting, saving, and money management in plain language.",
    },
    {
      icon: Target,
      step: "Step 2",
      title: "Set Your Goals",
      description: "Define your financial goals and let our AI create a personalized plan that fits your income and lifestyle.",
    },
    {
      icon: TrendingUp,
      step: "Step 3",
      title: "Track Progress",
      description: "Monitor your spending, track savings, and watch your financial health improve with easy-to-understand visualizations.",
    },
    {
      icon: Users,
      step: "Step 4",
      title: "Join the Community",
      description: "Connect with others, share experiences, and celebrate milestones together on the path to financial freedom.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Journey to Financial Freedom
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your financial future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 relative overflow-hidden group hover:shadow-medium transition-all duration-300 bg-card border-border"
              >
                {/* Step number background */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="text-sm font-semibold text-secondary mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
