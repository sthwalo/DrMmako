import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import {AboutPreview} from './components/AboutPreview';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Foundation from './pages/Foundation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-preview" element={<AboutPreview />} />
            <Route path="/services" element={<Services />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;