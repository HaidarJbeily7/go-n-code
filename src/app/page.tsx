import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow p-24"></main>
      <Footer />
    </div>
  );
}
