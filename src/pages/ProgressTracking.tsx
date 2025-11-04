import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Calendar, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProgressTracking = () => {
  const navigate = useNavigate();

  const trackingFeatures = [
    {
      icon: BarChart3,
      title: "Visual Dashboards",
      description: "See your financial progress at a glance with intuitive charts and graphs.",
    },
    {
      icon: TrendingUp,
      title: "Spending Analysis",
      description: "Track where every dollar goes and identify opportunities to save more.",
    },
    {
      icon: Target,
      title: "Goal Monitoring",
      description: "Set financial goals and watch your progress as you get closer to achieving them.",
    },
    {
      icon: Calendar,
      title: "Historical Data",
      description: "Review past performance to understand your financial growth over time.",
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
              Progress Tracking
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Monitor your spending, track savings, and watch your financial health improve with easy-to-understand visualizations.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {trackingFeatures.map((feature, index) => {
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
              Start Tracking Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Begin monitoring your financial progress and watch your savings grow with our powerful tracking tools.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              View Dashboard
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;