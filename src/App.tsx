import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PastMemories from './components/PastMemories';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Rounds from './components/Rounds';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Navbar />
      <Hero />
      <About />
      <PastMemories />
      <Tracks />
      <Timeline />
      <Rounds />
      <Prizes />
      <Sponsors />
      <FAQ />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
