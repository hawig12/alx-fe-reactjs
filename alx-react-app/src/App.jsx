// src/App.jsx
import UserProfile from './components/UserProfile'; // Add this line
import Header from './components/Header'; // From Task 2
import MainContent from './components/MainContent'; // From Task 2
import Footer from './components/Footer'; // From Task 2
import WelcomeMessage from './components/Welcome'; // From Task 1 (or Welcome.js depending on your fix)
// ... other existing imports (useState, reactLogo, viteLogo, App.css)
function App() {
  // ... existing state and other logic

  return (
    <>
      {/* Components from previous tasks (if completed) */}
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />

      {/* Add the UserProfile component here with example props */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Software engineer and gamer" /> {/* You can add more for testing */}


      {/* Rest of the existing App.jsx content (Vite/React logos, count button, etc.) */}
      {/* ... */}
    </>
  );
}

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// Keep your existing import for WelcomeMessage or Welcome.js here as well if needed for task 1
import WelcomeMessage from './components/Welcome'; // Assuming you fixed task 1 and renamed it to Welcome.js
// ... other existing imports (useState, reactLogo, viteLogo, App.css)
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/Welcome';
<WelcomeMessage />
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
