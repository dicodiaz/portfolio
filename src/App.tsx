import { About, Headline, Navbar, Portfolio } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
        <Portfolio />
        <About />
      </main>
    </>
  );
};

export default App;
