import { Banner } from "../components/layout/Banner.jsx";
import { CustomerSection } from "../components/layout/CustomerSection.jsx";
import { Navbar } from "../components/layout/Navbar.jsx";
import FeaturesSection from "../components/layout/FeaturesSection.jsx";
import { ServicesSection } from "../components/layout/ServicesSection.jsx";
import TestimonialsSection from "../components/layout/TestimonialsSection.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="my-3 px-10 flex flex-col gap-20">
        <Banner />
        <CustomerSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialsSection /> 
        <Footer /> 
      </main>
    </>
  );
}
