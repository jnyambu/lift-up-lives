import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Wallet, Users, Target } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Learn Smart Financial Skills",
    description:
      "Access expert-guided lessons to improve budgeting, saving, and investment habits.",
  },
  {
    icon: Wallet,
    title: "Track & Budget with AI",
    description:
      "Use our intelligent budgeting tools to manage expenses and save automatically.",
  },
  {
    icon: Users,
    title: "Join Supportive Communities",
    description:
      "Connect with people who share your goals and grow financially together.",
  },
  {
    icon: Target,
    title: "Achieve Financial Freedom",
    description:
      "Apply your new knowledge and tools to reach your savings and empowerment goals.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-20 bg-gradient-to-b from-background via-card/50 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We make financial empowerment simple, interactive, and community-driven.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="hover:shadow-lg transition-shadow bg-card/60 backdrop-blur-sm border-none h-full">
                <CardHeader>
                  <step.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold shadow-soft hover:scale-105 transition-transform"
            onClick={() => {
              const heroSection = document.querySelector("section:nth-of-type(1)");
              heroSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
