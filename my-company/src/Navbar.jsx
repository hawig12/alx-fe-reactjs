// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const navStyles = {
  nav: {
    backgroundColor: '#333',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2em',
    padding: '8px 15px',
    transition: 'background-color 0.3s ease',
  }
};

function Navbar() {
  return (
    <nav style={navStyles.nav}>
      <Link to="/" style={navStyles.link}>Home</Link>
      <Link to="/about" style={navStyles.link}>About</Link>
      <Link to="/services" style={navStyles.link}>Services</Link>
      <Link to="/contact" style={navStyles.link}>Contact</Link>
    </nav>
  );
}

export default Navbar;