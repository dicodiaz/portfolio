import {
  About,
  Contact,
  Footer,
  Headline,
  Navbar,
  Portfolio,
  Skills,
} from "./components";

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
