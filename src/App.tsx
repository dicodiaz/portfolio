import { About, Headline, Navbar, Portfolio, Skills } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
        <Portfolio />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
