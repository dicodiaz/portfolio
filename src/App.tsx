import {
  About,
  Contact,
  Headline,
  Navbar,
  Portfolio,
  Skills,
} from "./components";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
