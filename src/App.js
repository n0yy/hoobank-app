import {
  Navbar,
  Hero,
  Features,
  Billing,
  CardDeal,
  Testimonials,
  Footer,
  Stats
} from "./components"
import { useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";


function App() {

  useEffect(() => {
    document.title = "Hoo Bank"
  }, []);

  return (
    <SkeletonTheme baseColor="#ffffff" highlightColor="#4f4f4f">
      <main className="bg-primary font-poppins px-7 md:px-24 overflow-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Footer />
      </main>
    </SkeletonTheme>
  );
}

export default App;
