import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PolicyCards from "@/components/PolicyCards";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <PolicyCards />
      <NewsSection />
    </div>
  );
};

export default Index;
