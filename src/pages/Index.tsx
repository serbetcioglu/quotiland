import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, FileText, Zap, Battery, Calculator, TrendingDown, DollarSign, Sun } from "lucide-react";
import heroImage from "@/assets/hero-battery.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl md:text-3xl font-bold mb-3 text-primary">
              Quotiland
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Calculate Your Battery Storage ROI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're adding batteries to existing solar panels or evaluating a complete solar + battery system, get accurate ROI calculations based on your specific situation.
            </p>
            <Button variant="hero" size="lg" className="text-base md:text-lg">
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Main Inputs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Enter Your Details
            </h2>
            <p className="text-muted-foreground text-lg">
              Start by providing your basic energy information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: "Energy Contract", desc: "Your current rates and tariff structure" },
              { icon: Home, title: "Home Address", desc: "Optional - for accurate solar production estimates with local weather data" },
              { icon: Zap, title: "Energy Consumption", desc: "Your monthly or annual energy usage patterns" },
            ].map((step, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow bg-card">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3 text-lg text-card-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Scenario */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Choose Your Scenario
            </h2>
            <p className="text-muted-foreground text-lg">
              Tell us what you're evaluating
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all bg-card border-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Option 1: Solar + Battery</h3>
              <p className="text-muted-foreground mb-6">
                Don't have solar panels yet? Enter quotes for both solar panels and battery installation to see the complete ROI.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>Solar panel system quote details</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                  <span>Battery storage quote details</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all bg-card border-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                <Battery className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Option 2: Battery Only</h3>
              <p className="text-muted-foreground mb-6">
                Already have solar panels? Enter your existing solar setup and battery quote to calculate ROI for adding storage.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Existing solar panel specifications</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Battery storage quote details</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What to Expect as Results
            </h2>
            <p className="text-muted-foreground text-lg">
              Get a comprehensive analysis tailored to your situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-all bg-card">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-6">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Solar Production Estimate</h3>
              <p className="text-muted-foreground">
                Location-based yearly solar energy production calculations using real weather data for your area.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all bg-card">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-6">
                <TrendingDown className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Consumption Reduction</h3>
              <p className="text-muted-foreground">
                See exactly how much your annual energy consumption will decrease with battery storage added to your system.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all bg-card">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Savings & ROI Report</h3>
              <p className="text-muted-foreground">
                Clear breakdown of your annual savings, payback period, and total return on investment for your battery quote.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center bg-card">
            <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
              Coming Soon
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're putting the finishing touches on our battery ROI calculator. Sign up to be notified when we launch and get priority access to the tool.
            </p>
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              className="max-w-md mx-auto"
            >
              <div className="flex gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-12 px-4 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button type="submit" variant="hero" size="lg" className="text-base">
                  Notify Me
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Quotiland. Making clean energy accessible and affordable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
