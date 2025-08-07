// src/components/Header.jsx
import React from 'react'; // Good practice to include

function Header() {
  return (
    <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center', padding: '15px', borderRadius: '8px' }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}
export default Header;