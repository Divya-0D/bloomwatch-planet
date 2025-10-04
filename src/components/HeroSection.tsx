import { Camera, Map, Satellite, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface HeroSectionProps {
  onTabChange: (tab: string) => void;
}

export const HeroSection = ({ onTabChange }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 gap-2 px-4 py-2">
            <Satellite className="h-4 w-4" />
            <span>Earth Observation Platform</span>
          </Badge>

          <h2 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
            Track Global Flowering Patterns{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Through Citizen Science
            </span>
          </h2>

          <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
            Join thousands of citizen scientists using satellite data and AI to monitor flowering
            phenology, contribute to climate research, and document biodiversity worldwide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2" onClick={() => onTabChange("contribute")}>
              <Camera className="h-5 w-5" />
              Start Contributing
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => onTabChange("map")}>
              <Map className="h-5 w-5" />
              Explore Map
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Card className="p-6 backdrop-blur-sm bg-card/50 shadow-soft">
              <div className="text-4xl font-bold">2.4M</div>
              <div className="text-sm text-muted-foreground">Observations</div>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-card/50 shadow-soft">
              <div className="text-4xl font-bold">8,932</div>
              <div className="text-sm text-muted-foreground">Species</div>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-card/50 shadow-soft">
              <div className="text-4xl font-bold">12.8K</div>
              <div className="text-sm text-muted-foreground">Scientists</div>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-card/50 shadow-soft">
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-success">
                <TrendingUp className="h-8 w-8" />
                +24%
              </div>
              <div className="text-sm text-muted-foreground">Growth</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
