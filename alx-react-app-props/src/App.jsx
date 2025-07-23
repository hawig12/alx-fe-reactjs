// src/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}
export default App;

// src/App.jsx

// Import the ProfilePage component
import ProfilePage from './ProfilePage';

// Import the UserContext (NOTE: Using uppercase 'U' for consistency with file name)
import UserContext from './UserContext';

/**
 * Main application component.
 * This component initializes user data and provides it through the UserContext.
 * It then renders the ProfilePage component, which will consume the context data.
 */
function App() {
  // Define the user data that will be passed down through the context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // UserContext.Provider makes the 'userData' available to all child components
    // that consume this context, without needing to pass it as props.
    // The 'value' prop is crucial for passing the data.
    <UserContext.Provider value={userData}>
      {/* Render the ProfilePage component.
        The 'userData' prop is intentionally removed here,
        as ProfilePage (and its children) will now get data from Context.
      */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

// Export the App component as the default export
export default App;

// src/App.jsx
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Hawi", email: "nabiee1264@gmail.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
// src/App.jsx
// src/App.jsx

// Import the ProfilePage component
import ProfilePage from './ProfilePage';

// Import the UserContext (note the lowercase 'u' for the file name)
import UserContext from './userContext'; // Changed from './UserContext' to './userContext'

/**
 * Main application component.
 * This component initializes user data and provides it through the UserContext.
 * It then renders the ProfilePage component, which will consume the context data.
 */
function App() {
  // Define the user data that will be passed down through the context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // UserContext.Provider makes the 'userData' available to all child components
    // that consume this context, without needing to pass it as props.
    // The 'value' prop is crucial for passing the data.
    <UserContext.Provider value={userData}>
      {/* Render the ProfilePage component.
        The 'userData' prop is intentionally removed here,
        as ProfilePage (and its children) will now get data from Context.
      */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

// Export the App component as the default export
export default App;

// Core React imports
import { useState } from 'react';

// Vite/React default assets
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; // Assuming you still have this CSS file

// Components from previous tasks (adjust paths if your components are not in 'src/components')
import WelcomeMessage from './components/Welcome'; // Assuming WelcomeMessage.jsx was renamed to Welcome.js
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

/**
 * Main application component.
 * This component integrates various features and components developed across different tasks.
 */
function App() {
  // State from the default Vite+React setup
  const [count, setCount] = useState(0);

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
      {/* Header Component (from styling task) */}
      <Header />

      {/* Welcome Message Component (from JSX modification task) */}
      <WelcomeMessage />

      {/* Main Content Component (from styling task) */}
      <MainContent />

      {/* User Profile Component (from props task, now styled) */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography, exploring new cities, and coding." />
      <UserProfile name="Bob" age={30} bio="Software engineer with a passion for gaming and open-source contributions." />

      {/* Counter Application Component (from useState task) */}
      <Counter />

      {/* Original Vite + React default content (optional, can be removed if desired) */}
      <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px dashed #eee', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{ height: '6em', padding: '1.5em', willChange: 'filter', transition: 'filter 300ms' }} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" style={{ height: '6em', padding: '1.5em', willChange: 'filter', transition: 'filter 300ms' }} />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card" style={{
          padding: '1em',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          marginBottom: '10px'
        }}>
          <button onClick={() => setCount((count) => count + 1)} style={{
            padding: '0.6em 1.2em',
            fontSize: '1em',
            fontWeight: '500',
            fontFamily: 'inherit',
            backgroundColor: '#1a1a1a',
            cursor: 'pointer',
            transition: 'border-color 0.25s',
            borderRadius: '6px',
            border: '1px solid transparent',
            color: 'white'
          }}>
            count is {count}
          </button>
          <p style={{ marginTop: '10px' }}>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#888' }}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
