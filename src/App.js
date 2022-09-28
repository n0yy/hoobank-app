import {
  Navbar,
  Hero,
  Features
} from "./components"
import Stats from "./components/Stats";

function App() {
  return (
      <main className="bg-primary font-poppins px-5 ss:px-24 h-[3000px] overflow-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
      </main>
  );
}

export default App;
