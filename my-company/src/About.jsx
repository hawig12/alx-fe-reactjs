// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Optional
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> // Optional
      </div>
    </Router>
  );
}

export default App;
// src/components/About.jsx
const aboutStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '80vh',
  },
  heading: {
    color: '#0056b3',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '20px auto',
  }
};

function About() {
  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>About Us</h1>
      <p style={aboutStyles.paragraph}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
        We are committed to innovation and customer satisfaction.
      </p>
    </div>
  );
}

export default About;