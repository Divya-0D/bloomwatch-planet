import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapTab } from "@/components/tabs/MapTab";
import { TrendsTab } from "@/components/tabs/TrendsTab";
import { ContributeTab } from "@/components/tabs/ContributeTab";
import { LearnTab } from "@/components/tabs/LearnTab";
import { CommunityTab } from "@/components/tabs/CommunityTab";
import { ProfileTab } from "@/components/tabs/ProfileTab";
import { Map, LineChart, Camera, BookOpen, Users, User } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection onTabChange={setActiveTab} />
      
      <main className="container flex-1 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="map" className="gap-2">
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Map</span>
            </TabsTrigger>
            <TabsTrigger value="trends" className="gap-2">
              <LineChart className="h-4 w-4" />
              <span className="hidden sm:inline">Trends</span>
            </TabsTrigger>
            <TabsTrigger value="contribute" className="gap-2">
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Contribute</span>
            </TabsTrigger>
            <TabsTrigger value="learn" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Learn</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Community</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map">
            <MapTab />
          </TabsContent>

          <TabsContent value="trends">
            <TrendsTab />
          </TabsContent>

          <TabsContent value="contribute">
            <ContributeTab />
          </TabsContent>

          <TabsContent value="learn">
            <LearnTab />
          </TabsContent>

          <TabsContent value="community">
            <CommunityTab />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
