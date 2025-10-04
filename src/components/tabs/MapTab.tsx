import { InteractiveBloomMap } from "@/components/InteractiveBloomMap";

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

      <InteractiveBloomMap />
    </div>
  );
};
