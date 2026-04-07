import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--brand-dark)", color: "var(--brand-text)" }}>
      <Header />
      <HeroSection />
      <CatalogSection />
      <FooterSection />
    </div>
  );
};

export default Index;
