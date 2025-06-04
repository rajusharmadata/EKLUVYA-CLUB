import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CodingClub from './pages/CodingClub';
import RoboticsClub from './pages/RoboticsClub';
import SpeakersClub from './pages/SpeakersClub';
import HobbiesClub from './pages/HobbiesClub';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<CodingClub />} />
            <Route path="/robotics" element={<RoboticsClub />} />
            <Route path="/speakers" element={<SpeakersClub />} />
            <Route path="/hobbies" element={<HobbiesClub />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
