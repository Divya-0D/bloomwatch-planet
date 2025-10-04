import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MapPin, Info } from "lucide-react";

// Sample bloom hotspot data
const bloomHotspots = [
  { name: "California Poppies", coords: [-119.4179, 36.7783], intensity: 95, species: "Eschscholzia californica" },
  { name: "Cherry Blossoms", coords: [139.6503, 35.6762], intensity: 88, species: "Prunus serrulata" },
  { name: "Lavender Fields", coords: [5.0493, 43.9493], intensity: 92, species: "Lavandula angustifolia" },
  { name: "Sunflower Plains", coords: [-101.8313, 47.5515], intensity: 85, species: "Helianthus annuus" },
  { name: "Tulip Gardens", coords: [4.6462, 52.2434], intensity: 90, species: "Tulipa gesneriana" },
  { name: "Amazon Orchids", coords: [-60.0217, -3.4653], intensity: 78, species: "Orchidaceae" },
];

export const InteractiveBloomMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [mapInitialized, setMapInitialized] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<typeof bloomHotspots[0] | null>(null);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      projection: { name: "globe" },
      zoom: 1.5,
      center: [20, 20],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      "top-right"
    );

    map.current.on("style.load", () => {
      map.current?.setFog({
        color: "rgb(186, 210, 235)",
        "high-color": "rgb(36, 92, 223)",
        "horizon-blend": 0.02,
        "space-color": "rgb(11, 11, 25)",
        "star-intensity": 0.6,
      });

      // Add bloom hotspot markers
      bloomHotspots.forEach((hotspot) => {
        const el = document.createElement("div");
        el.className = "bloom-marker";
        el.style.cssText = `
          width: ${hotspot.intensity / 5}px;
          height: ${hotspot.intensity / 5}px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.8), rgba(34, 197, 94, 0.3));
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          cursor: pointer;
          animation: pulse 2s infinite;
        `;

        new mapboxgl.Marker(el)
          .setLngLat(hotspot.coords as [number, number])
          .addTo(map.current!);

        el.addEventListener("click", () => {
          setSelectedHotspot(hotspot);
          map.current?.flyTo({
            center: hotspot.coords as [number, number],
            zoom: 6,
            duration: 2000,
          });
        });
      });
    });

    // Gentle rotation
    let userInteracting = false;
    const secondsPerRevolution = 300;

    function spinGlobe() {
      if (!map.current || userInteracting) return;
      const zoom = map.current.getZoom();
      if (zoom < 3) {
        const center = map.current.getCenter();
        center.lng -= 360 / secondsPerRevolution;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on("mousedown", () => (userInteracting = true));
    map.current.on("mouseup", () => {
      userInteracting = false;
      spinGlobe();
    });
    map.current.on("moveend", spinGlobe);

    spinGlobe();
    setMapInitialized(true);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="space-y-4">
      {!mapInitialized && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            To display the interactive map, enter your Mapbox public token.{" "}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Get your free token here
            </a>
          </AlertDescription>
        </Alert>
      )}

      {!mapInitialized && (
        <Card className="p-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter Mapbox Public Token (pk.xxx...)"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
            />
            <Button onClick={initializeMap} disabled={!mapboxToken}>
              Load Map
            </Button>
          </div>
        </Card>
      )}

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div
            ref={mapContainer}
            className="w-full h-[500px] rounded-lg overflow-hidden shadow-medium"
          />
        </div>

        <Card className="p-6 space-y-4">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Live Bloom Hotspots
            </h4>
            <p className="text-sm text-muted-foreground">
              Click markers to explore active flowering regions
            </p>
          </div>

          {selectedHotspot ? (
            <div className="space-y-3 p-4 bg-gradient-hero rounded-lg">
              <h5 className="font-semibold text-lg">{selectedHotspot.name}</h5>
              <p className="text-sm italic text-muted-foreground">{selectedHotspot.species}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm">Bloom Intensity:</span>
                <Badge variant="default" className="bg-success">
                  {selectedHotspot.intensity}%
                </Badge>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {bloomHotspots.slice(0, 4).map((hotspot, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                  onClick={() => setSelectedHotspot(hotspot)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm">{hotspot.name}</p>
                      <p className="text-xs text-muted-foreground">{hotspot.species}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {hotspot.intensity}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
