import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const MapTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">Interactive Bloom Map</h3>
        <p className="text-muted-foreground">
          Explore global flowering patterns using satellite Earth observation data. Track seasonal
          changes and identify bloom hotspots with advanced filtering.
        </p>
      </div>

      <Card className="p-8">
        <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
            <p className="text-lg font-semibold mb-2">Interactive Map Coming Soon</p>
            <p className="text-muted-foreground">
              Global flowering visualization with satellite data integration
            </p>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          <Button>View Detailed Analysis</Button>
          <Button variant="outline">Filter by Region</Button>
        </div>
      </Card>
    </div>
  );
};
