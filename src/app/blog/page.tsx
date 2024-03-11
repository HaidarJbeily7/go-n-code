import BlogList from "@/components/blog/blog-list";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFDFDFD]">
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
}
