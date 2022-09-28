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


function App() {

  useEffect(() => {
    document.title = "Hoo Bank"
  }, []);

  return (
      <main className="bg-primary font-poppins px-5 ss:px-24 overflow-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Footer />
      </main>
  );
}

export default App;
