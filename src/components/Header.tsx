import { Flower2, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
            <Flower2 className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">BloomWatch</h1>
            <p className="text-xs text-muted-foreground">Global Citizen Science Platform</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="gap-2 px-3 py-1.5">
            <Globe className="h-4 w-4" />
            <span className="font-semibold">156 Countries</span>
          </Badge>
          <Badge variant="secondary" className="gap-2 px-3 py-1.5">
            <Users className="h-4 w-4" />
            <span className="font-semibold">12.8K Scientists</span>
          </Badge>
          <Button size="lg">Join Community</Button>
        </div>
      </div>
    </header>
  );
};
