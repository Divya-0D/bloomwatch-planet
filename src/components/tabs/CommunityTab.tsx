import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, MapPin } from "lucide-react";
import cherryBlossomImg from "@/assets/cherry-blossom.jpg";

const posts = [
  {
    id: 1,
    author: "Sarah Chen",
    initials: "SC",
    location: "Kyoto, Japan",
    time: "2 hours ago",
    species: "Japanese Cherry Blossom",
    description: "Found this beautiful sakura tree in full bloom! The pink petals are absolutely stunning this year.",
    image: cherryBlossomImg,
    likes: 234,
    comments: 18,
  },
];

export const CommunityTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">Community Feed</h3>
        <p className="text-muted-foreground">
          Connect with citizen scientists worldwide. Share discoveries, learn from experts, and join
          the global movement.
        </p>
      </div>

      <div className="flex gap-2">
        <Button>Recent</Button>
        <Button variant="outline">Trending</Button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-primary text-white">
                  {post.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {post.location}
                      <span>•</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <Badge className="mb-3">{post.species}</Badge>
              <p className="text-foreground">{post.description}</p>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img src={post.image} alt={post.species} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
