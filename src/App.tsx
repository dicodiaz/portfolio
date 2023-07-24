import { FC } from 'react';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Headline from './sections/Headline';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';
import './styles/app.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Headline />
        <Portfolio />
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
