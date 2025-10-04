import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Award, Camera, TrendingUp, MapPin } from "lucide-react";

export const ProfileTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">Your Profile</h3>
        <p className="text-muted-foreground">
          Track your contributions, earn achievements, and see your impact on global research.
        </p>
      </div>

      <Card className="p-6">
        <div className="flex items-start gap-6 mb-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback className="bg-gradient-primary text-white text-2xl">
              YN
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-1">Your Name</h4>
            <p className="text-muted-foreground mb-3">Citizen Scientist</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Award className="h-3 w-3 mr-1" />
                Early Contributor
              </Badge>
              <Badge variant="secondary">
                <Camera className="h-3 w-3 mr-1" />
                First Upload
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 rounded-lg bg-gradient-hero">
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-sm text-muted-foreground">Observations</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-hero">
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-sm text-muted-foreground">Species Found</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-hero">
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Your Impact
        </h4>
        <p className="text-muted-foreground">
          Start contributing observations to see your impact on global flowering research and help
          scientists track climate change patterns.
        </p>
      </Card>

      <Card className="p-6">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-secondary" />
          Recent Activity
        </h4>
        <p className="text-muted-foreground">
          Your recent observations and contributions will appear here.
        </p>
      </Card>
    </div>
  );
};
