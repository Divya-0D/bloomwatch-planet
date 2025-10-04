import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, Thermometer, Droplets, Sun, Satellite, BarChart3 } from "lucide-react";

// Enhanced monthly bloom data with climate correlations
const monthlyBloomData = [
  { month: "Jan", activity: 45, temp: 5, rainfall: 65, trend: "stable", blooms: 1200 },
  { month: "Feb", activity: 52, temp: 7, rainfall: 58, trend: "up", blooms: 1800 },
  { month: "Mar", activity: 68, temp: 12, rainfall: 52, trend: "up", blooms: 3200 },
  { month: "Apr", activity: 85, temp: 16, rainfall: 48, trend: "up", blooms: 5800 },
  { month: "May", activity: 92, temp: 20, rainfall: 45, trend: "up", blooms: 8900 },
  { month: "Jun", activity: 88, temp: 24, rainfall: 38, trend: "stable", blooms: 12400 },
  { month: "Jul", activity: 78, temp: 27, rainfall: 32, trend: "down", blooms: 10200 },
  { month: "Aug", activity: 72, temp: 26, rainfall: 35, trend: "down", blooms: 8600 },
  { month: "Sep", activity: 65, temp: 22, rainfall: 42, trend: "down", blooms: 6400 },
  { month: "Oct", activity: 58, temp: 16, rainfall: 55, trend: "stable", blooms: 4200 },
  { month: "Nov", activity: 48, temp: 10, rainfall: 62, trend: "down", blooms: 2100 },
  { month: "Dec", activity: 42, temp: 6, rainfall: 68, trend: "stable", blooms: 1400 },
];

// Regional bloom trends with comprehensive data
const regionalTrends = [
  { region: "North America", growth: 24, blooms: 15600, species: 342, anomaly: false },
  { region: "Europe", growth: 18, blooms: 12400, species: 289, anomaly: false },
  { region: "Asia", growth: 31, blooms: 21800, species: 456, anomaly: true },
  { region: "South America", growth: 15, blooms: 8900, species: 198, anomaly: false },
  { region: "Africa", growth: -8, blooms: 5200, species: 167, anomaly: true },
  { region: "Oceania", growth: 12, blooms: 4300, species: 134, anomaly: false },
];

// Enhanced climate change anomalies
const climateAnomalies = [
  {
    species: "Cherry Blossom",
    location: "Kyoto, Japan",
    anomaly: "Early bloom by 12 days",
    impact: "High",
    year: "2024",
    historicalAvg: "April 5",
    currentDate: "March 24",
    description: "Earliest bloom recorded in 1,200 years of historical data tracking",
  },
  {
    species: "California Poppy",
    location: "Southern California, USA",
    anomaly: "Superbloom event",
    impact: "Medium",
    year: "2024",
    historicalAvg: "Moderate bloom",
    currentDate: "Extended bloom",
    description: "Rare weather pattern triggered exceptional wildflower display",
  },
  {
    species: "Alpine Wildflowers",
    location: "Swiss Alps, Europe",
    anomaly: "Elevation shift +200m",
    impact: "High",
    year: "2024",
    historicalAvg: "1800m elevation",
    currentDate: "2000m elevation",
    description: "Rising temperatures pushing blooms to higher elevations",
  },
  {
    species: "Amazon Orchids",
    location: "Amazon Basin, Brazil",
    anomaly: "Delayed bloom by 3 weeks",
    impact: "Critical",
    year: "2024",
    historicalAvg: "February bloom",
    currentDate: "March bloom",
    description: "Drought conditions disrupting traditional flowering cycles",
  },
  {
    species: "Arctic Poppies",
    location: "Northern Canada",
    anomaly: "Extended season +18 days",
    impact: "High",
    year: "2024",
    historicalAvg: "60-day bloom window",
    currentDate: "78-day bloom window",
    description: "Arctic warming creating longer growing season",
  },
];

// Satellite data sources with detailed metrics
const satelliteData = [
  { satellite: "Sentinel-2 (ESA)", coverage: 95, resolution: "10m", frequency: "5 days", status: "Active", dataPoints: "856K" },
  { satellite: "Landsat 8/9 (NASA)", coverage: 92, resolution: "30m", frequency: "16 days", status: "Active", dataPoints: "742K" },
  { satellite: "MODIS Terra", coverage: 100, resolution: "250m", frequency: "Daily", status: "Active", dataPoints: "1.2M" },
  { satellite: "NOAA-20 VIIRS", coverage: 88, resolution: "375m", frequency: "Daily", status: "Active", dataPoints: "634K" },
];

// Phenological stages data
const phenologyStages = [
  { stage: "Bud Formation", percentage: 15, color: "bg-blue-500" },
  { stage: "Bud Development", percentage: 22, color: "bg-cyan-500" },
  { stage: "Early Bloom", percentage: 18, color: "bg-green-500" },
  { stage: "Peak Bloom", percentage: 25, color: "bg-pink-500" },
  { stage: "Late Bloom", percentage: 12, color: "bg-purple-500" },
  { stage: "Senescence", percentage: 8, color: "bg-gray-500" },
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-primary" />
            Global Bloom Activity Timeline
          </CardTitle>
          <CardDescription>Monthly flowering intensity correlated with climate data (2024)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {monthlyBloomData.map((data) => (
              <div key={data.month} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-sm font-semibold w-12">{data.month}</span>
                    <Progress value={data.activity} className="flex-1" />
                    <Badge variant={data.activity > 80 ? "default" : "secondary"} className="w-16 justify-center">
                      {data.activity}%
                    </Badge>
                  </div>
                  {data.trend === "up" && <TrendingUp className="h-4 w-4 text-success ml-2" />}
                  {data.trend === "down" && <TrendingDown className="h-4 w-4 text-muted-foreground ml-2" />}
                </div>
                <div className="flex gap-6 ml-16 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Thermometer className="h-3 w-3" /> {data.temp}°C avg
                  </span>
                  <span className="flex items-center gap-1">
                    <Droplets className="h-3 w-3" /> {data.rainfall}mm rainfall
                  </span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-3 w-3" /> {data.blooms.toLocaleString()} observations
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regional Trends Grid */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Regional Bloom Trends</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regionalTrends.map((region) => (
            <Card key={region.region} className={region.anomaly ? "border-warning" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{region.region}</CardTitle>
                  {region.anomaly && <AlertTriangle className="h-5 w-5 text-warning" />}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Annual Growth</span>
                  <Badge variant={region.growth > 0 ? "default" : "destructive"} className="flex items-center gap-1">
                    {region.growth > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {region.growth > 0 ? "+" : ""}
                    {region.growth}%
                  </Badge>
                </div>
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Blooms</span>
                    <span className="font-semibold">{region.blooms.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Species Tracked</span>
                    <span className="font-semibold">{region.species}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Climate Correlations */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-orange-500" />
              Temperature Correlation
            </CardTitle>
            <CardDescription>Impact of temperature changes on bloom timing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>+2°C warming</span>
                <span className="font-semibold text-warning">8-12 days earlier bloom</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Spring frost events</span>
                <span className="font-semibold text-destructive">15% bloom damage</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Heat stress (&gt;30°C)</span>
                <span className="font-semibold text-warning">Shortened bloom period</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-500" />
              Precipitation Correlation
            </CardTitle>
            <CardDescription>Rainfall impact on flowering intensity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Optimal rainfall (40-60mm)</span>
                <span className="font-semibold text-success">Peak bloom quality</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Drought conditions</span>
                <span className="font-semibold text-destructive">35% reduced blooms</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Excessive rain (&gt;100mm)</span>
                <span className="font-semibold text-warning">Delayed bloom onset</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Climate Anomalies */}
      <Card className="border-warning/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Climate Change Anomalies Detected
          </CardTitle>
          <CardDescription>
            Significant deviations from historical bloom patterns indicating climate impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {climateAnomalies.map((anomaly, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/50 border space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-semibold">{anomaly.species}</h5>
                    <p className="text-sm text-muted-foreground">{anomaly.location}</p>
                  </div>
                  <Badge variant={anomaly.impact === "Critical" ? "destructive" : anomaly.impact === "High" ? "default" : "secondary"}>
                    {anomaly.impact} Impact
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Anomaly:</span>
                    <p className="font-semibold text-warning">{anomaly.anomaly}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Year:</span>
                    <p className="font-semibold">{anomaly.year}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">{anomaly.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Phenological Stages */}
      <Card>
        <CardHeader>
          <CardTitle>Current Global Phenological Stages</CardTitle>
          <CardDescription>Distribution of flowering plants across development stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {phenologyStages.map((stage) => (
              <div key={stage.stage} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <span className="text-sm font-semibold">{stage.percentage}%</span>
                </div>
                <div className="relative w-full h-6 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${stage.color} transition-all duration-500`}
                    style={{ width: `${stage.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Satellite Data Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Satellite className="h-5 w-5 text-primary" />
            Satellite Data Integration Status
          </CardTitle>
          <CardDescription>Real-time Earth observation data sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {satelliteData.map((sat) => (
              <div key={sat.satellite} className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold">{sat.satellite}</h5>
                  <Badge variant="default" className="bg-success">
                    {sat.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block mb-1">Coverage</span>
                    <div className="flex items-center gap-2">
                      <Progress value={sat.coverage} className="flex-1 h-2" />
                      <span className="font-semibold text-xs">{sat.coverage}%</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Resolution</span>
                    <p className="font-semibold">{sat.resolution}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Frequency</span>
                    <p className="font-semibold">{sat.frequency}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Data Points</span>
                    <p className="font-semibold">{sat.dataPoints}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
