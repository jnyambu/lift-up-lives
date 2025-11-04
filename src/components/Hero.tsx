import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community members holding seedlings and coins symbolizing financial growth"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight px-4">
            Empowering Communities
            <br />
            Breaking the Cycle of Poverty
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto px-4">
            Learn essential money skills, budget smarter with AI, and join a community dedicated to financial freedom for all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              size="xl" 
              variant="hero" 
              className="group w-full sm:w-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              onClick={() => navigate("/auth")}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="xl" 
              variant="outline"
              className="w-full sm:w-auto cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              onClick={() => {
                const featuresSection = document.querySelector('section:nth-of-type(2)');
                featuresSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-soft hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Families Empowered</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-soft hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">$2M+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Saved Together</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-5 sm:p-6 shadow-soft hover:shadow-md transition-shadow">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
