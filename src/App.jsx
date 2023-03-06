import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Cover from './components/main/Cover';
import Portfolio from './components/main/Portfolio';
import Skills from './components/main/Skills';

const App = () => (
  <>
    <Header />
    <main>
      <Cover />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
