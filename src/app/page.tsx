import Footer from "@/components/footer/footer";
import Hero from "@/components/home/hero";
import HomeAboutUs from "@/components/home/home-aboutus";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <HomeAboutUs />
      {/* <Footer /> */}
    </div>
  );
}
