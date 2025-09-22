import { Banner } from "../components/layout/Banner.jsx";
import { CustomerSection } from "../components/layout/CustomerSection.jsx";
import { Navbar } from "../components/layout/Navbar.jsx";
import ServicesSection from "../components/layout/ServicesSection.jsx";
import BannerButton from "../components/ui/BannerButton.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="my-3 px-10 ">
        <Banner />
        <CustomerSection />
        <ServicesSection />
      </main>
    </>
  );
}
