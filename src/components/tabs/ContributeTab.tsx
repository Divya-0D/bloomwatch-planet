import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, MapPin, Sparkles, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ContributeTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">Contribute Your Observations</h3>
        <p className="text-muted-foreground">
          Upload photos of flowering plants, use AI-powered species identification, and add your
          data to our global research database.
        </p>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <h4 className="text-sm font-semibold">Image Recognition Integration</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            This demo uses mock AI identification. In production, you can integrate with:
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">PlantNet API</Badge>
            <Badge variant="outline">iNaturalist API</Badge>
            <Badge variant="outline">Google Vision AI</Badge>
            <Badge variant="outline">Plant.id API</Badge>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              AI-Powered BloomID
            </label>
            <div className="mt-2 border-2 border-dashed rounded-lg p-12 text-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="font-semibold mb-1">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">JPG, PNG or HEIC (max 10MB)</p>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Location *
            </label>
            <Input placeholder="Enter location or coordinates" />
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">Notes (Optional)</label>
            <Textarea
              placeholder="Add any observations about bloom stage, color, or conditions..."
              rows={4}
            />
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 gap-2">
              <Camera className="h-4 w-4" />
              Identify Species
            </Button>
            <Button variant="outline" className="flex-1">
              Submit
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-hero">
        <h4 className="font-semibold mb-2">Identification Results</h4>
        <p className="text-sm text-muted-foreground">
          Upload a photo to see AI-powered species identification results here.
        </p>
      </Card>
    </div>
  );
};
