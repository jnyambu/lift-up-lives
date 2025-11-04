import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Brain, Calculator, LineChart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIBudgeting = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Smart Analysis",
      description: "AI analyzes your spending patterns and identifies areas where you can save money.",
    },
    {
      icon: Calculator,
      title: "Personalized Budgets",
      description: "Get custom budget recommendations tailored to your income and lifestyle needs.",
    },
    {
      icon: LineChart,
      title: "Spending Insights",
      description: "Understand where your money goes with clear, visual breakdowns of expenses.",
    },
    {
      icon: Sparkles,
      title: "Automatic Optimization",
      description: "Our AI continuously learns and suggests improvements to help you save more.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              AI-Powered Budgeting
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Get personalized budget recommendations based on your income and spending patterns. Our AI helps you save more effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-medium transition-shadow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 sm:p-10 bg-muted/50">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Try AI Budgeting Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Let our AI create a personalized budget plan that fits your unique financial situation.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Create My Budget
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIBudgeting;