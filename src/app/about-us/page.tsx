import Hero from "@/components/about-us/hero";
import Team from "@/components/about-us/team";
import WhoWeAre from "@/components/about-us/who-we-are";
import WhyToChoose from "@/components/about-us/why-to-choose";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <WhoWeAre />
      <WhyToChoose />
      <Team />
      <Footer />
    </div>
  );
}
