function App() {
  // ... existing state and other logic

  return (
    <>
      <Header />
      <MainContent />
      <Footer />

      {/* Your content from Task 1 and the default Vite + React content should still be here */}
      <WelcomeMessage /> {/* From Task 1 */}

      {/* Rest of the existing App.jsx content (Vite/React logos, count button, etc.) */}
      <div>
        {/* ... */}
      </div>
      <h1>Vite + React</h1>
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
