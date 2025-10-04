import { Flower2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Flower2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold">BloomWatch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Open-source Earth observation platform for tracking global flowering patterns through
              citizen science.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Research Partners</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>USDA</li>
              <li>Royal Botanic Gardens</li>
              <li>University Programs</li>
              <li>Ecological Networks</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Data Sources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ESA Sentinel-2 Satellite</li>
              <li>NASA Landsat 8/9</li>
              <li>MODIS Vegetation Index</li>
              <li>NOAA Climate Data</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Contribute Data</li>
              <li>Join Community</li>
              <li>Access API</li>
              <li>View Documentation</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 BloomWatch Earth Observation Project. All data is open-source and available for
          research purposes.
        </div>
      </div>
    </footer>
  );
};
