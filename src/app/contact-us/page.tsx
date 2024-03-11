import ContactUsForm from "@/components/contact-us/contact-us-form";
import ContactUsHero from "@/components/contact-us/contact-us-hero";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactUsHero />
      <ContactUsForm />
      <Footer />
    </div>
  );
}
