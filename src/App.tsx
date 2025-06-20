import Navbar from "@/components/Navbar";
import Button from "@/components/ui/button";
import Headline from "./components/Headline";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
      </main>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  );
};

export default App;
