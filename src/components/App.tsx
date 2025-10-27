import Action from './Action';
import Footer from './Footer';
import Hero from './Hero';
import ImageStrip from './ImageStrip';
import Impact from './Impact';
import Navbar from './Navbar';
import Projects from './Projects/Pojects';
import Team from './Team';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageStrip />
      <Impact />
      <Projects />
      <Team />
      <Action />
      <Footer />
    </div>
  );
};

export default App;
