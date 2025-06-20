import { Headline, Navbar, Portfolio } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
        <Portfolio />
      </main>
    </>
  );
};

export default App;
