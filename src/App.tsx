import {
  About,
  Contact,
  Headline,
  Navbar,
  Portfolio,
  Skills,
} from "./components";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Headline />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
