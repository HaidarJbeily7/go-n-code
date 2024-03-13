import Footer from "@/components/footer/footer";
import Hero from "@/components/home/hero";
import HomeAboutUs from "@/components/home/home-aboutus";
import HomeContactUs from "@/components/home/home-contacus";
import HomeNews from "@/components/home/home-news";
import HomeProjects from "@/components/home/home-projects";
import HomeServices from "@/components/home/home-services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <HomeAboutUs />
      <HomeServices />
      <HomeProjects />
      {/* <HomeNews /> */}
      {/* <HomeContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
}
