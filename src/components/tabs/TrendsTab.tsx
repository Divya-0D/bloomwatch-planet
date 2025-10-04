import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, TrendingUp, Cloud, Calendar, Thermometer, Droplets, AlertTriangle } from "lucide-react";

const monthlyData = [
  { month: "Jan", blooms: 1200, avgTemp: 5, rainfall: 45 },
  { month: "Feb", blooms: 1800, avgTemp: 7, rainfall: 52 },
  { month: "Mar", blooms: 3200, avgTemp: 12, rainfall: 48 },
  { month: "Apr", blooms: 5800, avgTemp: 16, rainfall: 55 },
  { month: "May", blooms: 8900, avgTemp: 21, rainfall: 62 },
  { month: "Jun", blooms: 12400, avgTemp: 25, rainfall: 45 },
  { month: "Jul", blooms: 10200, avgTemp: 28, rainfall: 38 },
  { month: "Aug", blooms: 8600, avgTemp: 27, rainfall: 42 },
];

const regionalTrends = [
  { region: "North America", change: "+18%", color: "text-success" },
  { region: "Europe", change: "+24%", color: "text-success" },
  { region: "Asia", change: "+31%", color: "text-success" },
  { region: "South America", change: "-5%", color: "text-destructive" },
  { region: "Africa", change: "+12%", color: "text-success" },
  { region: "Oceania", change: "+8%", color: "text-success" },
];

const climateAnomalies = [
  {
    title: "Early Spring Blooms",
    description: "Cherry blossoms in Japan bloomed 2 weeks earlier than historical average",
    severity: "moderate",
    region: "East Asia",
  },
  {
    title: "Delayed Wildflowers",
    description: "California superbloom delayed due to extended drought conditions",
    severity: "high",
    region: "North America",
  },
  {
    title: "Extended Bloom Season",
    description: "European lavender fields showing 3-week longer flowering period",
    severity: "low",
    region: "Mediterranean",
  },
];

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

      {/* Monthly Bloom Activity */}
      <Card className="p-6">
        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Monthly Bloom Activity (2025)
        </h4>
        <div className="space-y-4">
          {monthlyData.map((data, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold w-16">{data.month}</span>
                <div className="flex-1 mx-4">
                  <div className="h-8 bg-gradient-primary rounded-lg relative overflow-hidden"
                       style={{ width: `${(data.blooms / 12400) * 100}%` }}>
                    <div className="absolute inset-0 flex items-center justify-end pr-2">
                      <span className="text-xs font-semibold text-white">
                        {data.blooms.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-muted-foreground w-32">
                  <span className="flex items-center gap-1">
                    <Thermometer className="h-3 w-3" />
                    {data.avgTemp}°C
                  </span>
                  <span className="flex items-center gap-1">
                    <Droplets className="h-3 w-3" />
                    {data.rainfall}mm
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Regional Growth Trends */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-lg font-semibold">Regional Trends</h4>
          </div>
          <div className="space-y-3">
            {regionalTrends.map((trend, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm">{trend.region}</span>
                <Badge variant="secondary" className={trend.color}>
                  {trend.change}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
              <Cloud className="h-5 w-5 text-secondary" />
            </div>
            <h4 className="text-lg font-semibold">Climate Impact</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Temperature Correlation</p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-accent" style={{ width: "78%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">78% correlation</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Rainfall Impact</p>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-accent" style={{ width: "64%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">64% correlation</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-hero">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-3 text-success" />
            <p className="text-5xl font-bold mb-2">+24%</p>
            <p className="text-sm text-muted-foreground">
              Global flowering activity increase this year
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Compared to 2024 average
            </p>
          </div>
        </Card>
      </div>

      {/* Climate Anomalies */}
      <Card className="p-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-accent" />
          Climate Change Anomalies
        </h4>
        <div className="space-y-4">
          {climateAnomalies.map((anomaly, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border bg-card hover:shadow-soft transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-semibold">{anomaly.title}</h5>
                <Badge
                  variant={
                    anomaly.severity === "high"
                      ? "destructive"
                      : anomaly.severity === "moderate"
                      ? "default"
                      : "secondary"
                  }
                >
                  {anomaly.severity}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{anomaly.description}</p>
              <p className="text-xs text-muted-foreground">Region: {anomaly.region}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Satellite Data Integration */}
      <Card className="p-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <LineChart className="h-5 w-5 text-primary" />
          Satellite Vegetation Index (NDVI)
        </h4>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold mb-3">Data Sources</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ESA Sentinel-2</span>
                <Badge variant="outline">Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">NASA Landsat 8/9</span>
                <Badge variant="outline">Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">MODIS</span>
                <Badge variant="outline">Active</Badge>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Latest Updates</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last Refresh</span>
                <span className="font-semibold">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data Points</span>
                <span className="font-semibold">2.4M observations</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coverage</span>
                <span className="font-semibold">156 countries</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
