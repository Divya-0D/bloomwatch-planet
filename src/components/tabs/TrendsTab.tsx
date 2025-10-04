import { Card } from "@/components/ui/card";
import { LineChart, TrendingUp, Cloud } from "lucide-react";

export const TrendsTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">Trends & Analytics</h3>
        <p className="text-muted-foreground">
          Visualize bloom patterns over time, analyze environmental correlations, and detect
          anomalies driven by climate change.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <LineChart className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-lg font-semibold">Time-Series Analysis</h4>
          </div>
          <p className="text-muted-foreground">
            Track flowering patterns across seasons and years with comprehensive temporal data
            visualization.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Cloud className="h-5 w-5 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold">Climate Correlations</h4>
          </div>
          <p className="text-muted-foreground">
            Analyze relationships between flowering events and environmental factors like
            temperature and rainfall.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
            <h4 className="text-lg font-semibold">Anomaly Detection</h4>
          </div>
          <p className="text-muted-foreground">
            Identify unusual flowering patterns that may indicate climate change impacts on
            ecosystems.
          </p>
        </Card>

        <Card className="p-6 bg-gradient-hero">
          <div className="text-center py-8">
            <p className="text-6xl font-bold mb-2">+24%</p>
            <p className="text-sm text-muted-foreground">
              Global flowering activity increase this year
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
