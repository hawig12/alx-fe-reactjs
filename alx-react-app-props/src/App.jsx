import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import WelcomeMessage from './components/Welcome';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './UserProfile'; // Not from components/
import Counter from './components/Counter';
import UserContext from './UserContext'; // ✅ Context import

function App() {
  const [count, setCount] = useState(0);

  // ✅ Define user data to pass through context
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <Header />
      <WelcomeMessage />
      <MainContent />

      {/* ✅ Wrap UserProfile in context provider */}
      <UserContext.Provider value={userData}>
        <UserProfile />
      </UserContext.Provider>

      {/* Optional: keep or remove other user cards if not needed */}
      {/* <UserProfile name="Alice" age={25} bio="..." />
      <UserProfile name="Bob" age={30} bio="..." /> */}

      <Counter />

      <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px dashed #eee', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
