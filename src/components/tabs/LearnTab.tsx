import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap } from "lucide-react";
import californiaPoppyImg from "@/assets/california-poppy.jpg";
import cherryBlossomImg from "@/assets/cherry-blossom.jpg";
import lavenderImg from "@/assets/lavender.jpg";
import sunflowerImg from "@/assets/sunflower.jpg";
import orchidImg from "@/assets/orchid.jpg";
import tulipImg from "@/assets/tulip.jpg";

const species = [
  {
    id: 1,
    name: "California Poppy",
    scientific: "Eschscholzia californica",
    region: "Western North America",
    season: "Spring - Summer",
    image: californiaPoppyImg,
  },
  {
    id: 2,
    name: "Cherry Blossom",
    scientific: "Prunus serrulata",
    region: "East Asia",
    season: "Spring",
    image: cherryBlossomImg,
  },
  {
    id: 3,
    name: "Lavender",
    scientific: "Lavandula angustifolia",
    region: "Mediterranean",
    season: "Summer",
    image: lavenderImg,
  },
  {
    id: 4,
    name: "Sunflower",
    scientific: "Helianthus annuus",
    region: "North America",
    season: "Summer - Fall",
    image: sunflowerImg,
  },
  {
    id: 5,
    name: "Orchid",
    scientific: "Orchidaceae",
    region: "Tropical Regions",
    season: "Year-round",
    image: orchidImg,
  },
  {
    id: 6,
    name: "Tulip",
    scientific: "Tulipa gesneriana",
    region: "Central Asia",
    season: "Spring",
    image: tulipImg,
  },
];

export const LearnTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-bold mb-2">Education Hub</h3>
        <p className="text-muted-foreground">
          Learn about flowering phenology, climate science, and biodiversity through articles,
          quizzes, and species spotlights.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h4 className="text-lg font-semibold">Articles</h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Explore educational content on phenology, climate science, and biodiversity research.
          </p>
          <Button variant="outline" size="sm">
            Browse Articles
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            <h4 className="text-lg font-semibold">Quizzes</h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Test your knowledge with interactive quizzes on flowering patterns and climate impacts.
          </p>
          <Button variant="outline" size="sm">
            Take a Quiz
          </Button>
        </Card>
      </div>

      <div>
        <h4 className="text-2xl font-bold mb-6">Species Spotlight</h4>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {species.map((item) => (
            <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-medium transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h5 className="font-semibold mb-1">{item.name}</h5>
                <p className="text-sm text-muted-foreground italic mb-3">{item.scientific}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.region}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {item.season}
                  </Badge>
                </div>
                <Button variant="link" size="sm" className="p-0 h-auto">
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
