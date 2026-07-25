import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PastMemories from './components/PastMemories';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Navbar />
      <Hero />
      <About />
      <PastMemories />
      <Tracks />
      <Timeline />
    </div>
  );
}

export default App;
