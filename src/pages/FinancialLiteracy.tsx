import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BookOpen, DollarSign, PiggyBank, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinancialLiteracy = () => {
  const navigate = useNavigate();

  const topics = [
    {
      icon: DollarSign,
      title: "Understanding Money",
      description: "Learn the basics of income, expenses, and how money flows in your life.",
    },
    {
      icon: PiggyBank,
      title: "Saving Strategies",
      description: "Discover simple yet effective ways to save money every month.",
    },
    {
      icon: TrendingUp,
      title: "Building Wealth",
      description: "Explore strategies to grow your money over time through smart decisions.",
    },
    {
      icon: BookOpen,
      title: "Financial Planning",
      description: "Create a roadmap for your financial future with clear, achievable goals.",
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
              Financial Literacy
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Learn money management through simple, bite-sized lessons designed for everyone, regardless of background or education level.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card
                key={index}
                className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-medium transition-shadow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {topic.description}
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
              Ready to Start Learning?
            </h3>
            <p className="text-muted-foreground mb-6">
              Begin your journey to financial freedom with our interactive lessons and practical exercises.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracy;