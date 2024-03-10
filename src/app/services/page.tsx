import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import ServicesHero from "@/components/services/hero";
import ServicesList from "@/components/services/services-list";

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServicesHero />
      <ServicesList />
      <Footer />
    </div>
  );
}
