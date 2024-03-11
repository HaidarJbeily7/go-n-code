import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import PortfoliosHero from "@/components/portfolio/portfolio-hero";
import PortfolioProjects from "@/components/portfolio/portfolio-projects";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <PortfoliosHero />
      <PortfolioProjects />
      <Footer />
    </div>
  );
}
