import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, MessageCircle, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CommunitySupport = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Users,
      title: "Connect with Peers",
      description: "Join a supportive community of people on the same financial journey as you.",
    },
    {
      icon: MessageCircle,
      title: "Share Experiences",
      description: "Exchange tips, strategies, and success stories with others who understand.",
    },
    {
      icon: Heart,
      title: "Get Support",
      description: "Receive encouragement and advice during challenging financial times.",
    },
    {
      icon: TrendingUp,
      title: "Celebrate Wins",
      description: "Share your achievements and celebrate milestones together with the community.",
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
              Community Support
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Connect with others on the same journey. Share experiences, get advice, and support each other toward financial freedom.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
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
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
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
              Join Our Community
            </h3>
            <p className="text-muted-foreground mb-6">
              You're not alone on this journey. Connect with thousands of others working toward financial freedom.
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              Join Now
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;