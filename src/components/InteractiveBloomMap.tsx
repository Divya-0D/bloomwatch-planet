import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Flower2, Globe } from "lucide-react";

// Seasonal flowering hotspot data
const floweringData = {
  spring: [
    { lat: 34.05, lng: -118.24, intensity: 0.9, species: "California Poppy", region: "California, USA", type: "wild" },
    { lat: 35.68, lng: 139.65, intensity: 0.95, species: "Cherry Blossom", region: "Tokyo, Japan", type: "temperate" },
    { lat: 52.37, lng: 4.89, intensity: 0.85, species: "Tulip", region: "Netherlands", type: "agricultural" },
    { lat: 30.26, lng: -97.74, intensity: 0.8, species: "Bluebonnet", region: "Texas, USA", type: "wild" },
    { lat: 45.46, lng: 9.19, intensity: 0.7, species: "Almond Blossom", region: "Lombardy, Italy", type: "agricultural" },
  ],
  summer: [
    { lat: 44.5, lng: 11.35, intensity: 0.9, species: "Sunflower", region: "Tuscany, Italy", type: "agricultural" },
    { lat: 43.6, lng: 1.44, intensity: 0.85, species: "Lavender", region: "Provence, France", type: "agricultural" },
    { lat: 49.28, lng: -123.12, intensity: 0.75, species: "Wildflowers", region: "British Columbia, Canada", type: "wild" },
    { lat: 39.74, lng: -104.99, intensity: 0.8, species: "Mountain Wildflowers", region: "Colorado, USA", type: "wild" },
    { lat: 18.52, lng: 73.85, intensity: 0.7, species: "Lotus", region: "Maharashtra, India", type: "tropical" },
  ],
  fall: [
    { lat: 40.71, lng: -74.01, intensity: 0.6, species: "Chrysanthemum", region: "New York, USA", type: "temperate" },
    { lat: 33.45, lng: -112.07, intensity: 0.7, species: "Desert Flowers", region: "Arizona, USA", type: "wild" },
    { lat: 34.69, lng: 135.50, intensity: 0.8, species: "Cosmos", region: "Kyoto, Japan", type: "temperate" },
    { lat: 31.97, lng: 35.94, intensity: 0.65, species: "Saffron Crocus", region: "Iran", type: "agricultural" },
  ],
  winter: [
    { lat: -33.92, lng: 18.42, intensity: 0.8, species: "Protea", region: "Cape Town, South Africa", type: "wild" },
    { lat: -27.47, lng: 153.03, intensity: 0.7, species: "Jacaranda", region: "Queensland, Australia", type: "tropical" },
    { lat: 20.67, lng: -103.35, intensity: 0.75, species: "Poinsettia", region: "Jalisco, Mexico", type: "tropical" },
    { lat: 19.43, lng: -99.13, intensity: 0.8, species: "Poinsettia", region: "Mexico City, Mexico", type: "tropical" },
  ],
};

// National flower markers
const nationalFlowers = [
  { lat: 48.38, lng: 31.17, species: "Sunflower", country: "Ukraine", flag: "🇺🇦" },
  { lat: 36.2, lng: 138.25, species: "Cherry Blossom", country: "Japan", flag: "🇯🇵" },
  { lat: 28.61, lng: 77.2, species: "Lotus", country: "India", flag: "🇮🇳" },
  { lat: 1.35, lng: 103.82, species: "Orchid", country: "Singapore", flag: "🇸🇬" },
  { lat: 52.13, lng: 5.29, species: "Tulip", country: "Netherlands", flag: "🇳🇱" },
  { lat: 38.9, lng: -77.04, species: "Rose", country: "USA", flag: "🇺🇸" },
];

const getColorForIntensity = (intensity: number): string => {
  return intensity > 0.8 ? "#ff1493" : intensity > 0.6 ? "#ff69b4" : intensity > 0.4 ? "#ffb6c1" : "#e6e6fa";
};

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const InteractiveBloomMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const currentMarkers = useRef<L.CircleMarker[]>([]);
  const nationalMarkers = useRef<L.Marker[]>([]);
  const [currentMonth, setCurrentMonth] = useState(3); // April
  const [currentSeason, setCurrentSeason] = useState<keyof typeof floweringData>("spring");
  const [selectedHotspot, setSelectedHotspot] = useState<{ species: string; region: string; intensity: number; type: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState("current");

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([30, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.current);

    updateMapMarkers(currentSeason);
    addNationalFlowerMarkers();

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  const updateMapMarkers = (season: keyof typeof floweringData) => {
    if (!map.current) return;

    // Clear existing markers
    currentMarkers.current.forEach((marker) => map.current?.removeLayer(marker));
    currentMarkers.current = [];

    // Add new markers
    floweringData[season].forEach((location) => {
      const radius = location.intensity * 25;
      const color = getColorForIntensity(location.intensity);

      const marker = L.circleMarker([location.lat, location.lng], {
        color: color,
        fillColor: color,
        fillOpacity: 0.7,
        radius: radius,
      }).addTo(map.current!);

      marker.bindPopup(`
        <div class="p-2">
          <strong class="text-lg">${location.species}</strong><br>
          <span class="text-sm">Region: ${location.region}</span><br>
          <span class="text-sm">Type: ${location.type}</span><br>
          <span class="text-sm">Flowering Intensity: ${Math.round(location.intensity * 100)}%</span>
        </div>
      `);

      marker.on("click", () => {
        setSelectedHotspot(location);
      });

      currentMarkers.current.push(marker);
    });
  };

  const addNationalFlowerMarkers = () => {
    if (!map.current) return;

    nationalFlowers.forEach((flower) => {
      const icon = L.divIcon({
        html: `<div style="background: rgba(255,105,180,0.9); border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">${flower.flag}</div>`,
        className: "",
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([flower.lat, flower.lng], { icon }).addTo(map.current!);

      marker.bindPopup(`
        <div class="p-2">
          <strong class="text-lg">${flower.species}</strong><br>
          <span class="text-sm">National Flower of ${flower.country}</span><br>
          <span class="text-xl">${flower.flag}</span>
        </div>
      `);

      nationalMarkers.current.push(marker);
    });
  };

  const handleMonthChange = (month: number) => {
    setCurrentMonth(month);

    // Update season based on month
    let season: keyof typeof floweringData;
    if (month >= 3 && month <= 5) season = "spring";
    else if (month >= 6 && month <= 8) season = "summer";
    else if (month >= 9 && month <= 11) season = "fall";
    else season = "winter";

    setCurrentSeason(season);
    updateMapMarkers(season);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "current") {
      updateMapMarkers(currentSeason);
    }
  };

  return (
    <div className="space-y-6">
      {/* Seasonal Timeline Slider */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              Seasonal Timeline:
            </label>
            <Badge variant="secondary" className="text-sm">
              {months[currentMonth]} 2024
            </Badge>
          </div>
          <input
            type="range"
            min="0"
            max="11"
            value={currentMonth}
            onChange={(e) => handleMonthChange(parseInt(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Oct</span>
            <span>Dec</span>
          </div>
        </div>
      </Card>

      {/* Map Container */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div ref={mapContainer} className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border" />

          {/* Map Controls */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeFilter === "current" ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterClick("current")}
            >
              <Flower2 className="h-4 w-4 mr-2" />
              Current Bloom
            </Button>
            <Button variant="outline" size="sm">
              Agricultural Flowers
            </Button>
            <Button variant="outline" size="sm">
              Wildflowers
            </Button>
            <Button variant="outline" size="sm">
              National Flowers
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <Card className="p-6 space-y-6">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Live Bloom Hotspots
            </h4>
            <p className="text-sm text-muted-foreground">Click markers to explore active flowering regions</p>
          </div>

          {selectedHotspot ? (
            <div className="space-y-3 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border">
              <h5 className="font-semibold text-lg">{selectedHotspot.species}</h5>
              <p className="text-sm text-muted-foreground">{selectedHotspot.region}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bloom Intensity:</span>
                  <Badge variant="default" className="bg-success">
                    {Math.round(selectedHotspot.intensity * 100)}%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Type:</span>
                  <Badge variant="secondary">{selectedHotspot.type}</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={() => setSelectedHotspot(null)}>
                View All Hotspots
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)} Blooms
              </p>
              {floweringData[currentSeason].slice(0, 5).map((hotspot, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-all hover:scale-105"
                  onClick={() => setSelectedHotspot(hotspot)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{hotspot.species}</p>
                      <p className="text-xs text-muted-foreground">{hotspot.region}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                      style={{
                        backgroundColor: getColorForIntensity(hotspot.intensity) + "40",
                        color: getColorForIntensity(hotspot.intensity),
                      }}
                    >
                      {Math.round(hotspot.intensity * 100)}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--primary));
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};
