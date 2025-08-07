 // src/App.jsx
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

    // Placeholder components for routing
    const HomePage = () => (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to GitHub User Search!</h2>
        <p className="text-lg text-gray-600">Use the navigation to explore.</p>
      </div>
    );
    const SearchPage = () => (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Search GitHub Users</h2>
        <p className="text-lg text-gray-600">This is where your search input and results will go.</p>
      </div>
    );
    const AboutPage = () => (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About This App</h2>
        <p className="text-lg text-gray-600">A simple application to search GitHub profiles.</p>
      </div>
    );

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gray-100 font-sans">
            {/* Navigation Bar */}
            <nav className="bg-blue-600 p-4 shadow-md">
              <ul className="flex justify-center space-x-6">
                <li>
                  <Link to="/" className="text-white hover:text-blue-200 text-lg font-medium transition duration-300 ease-in-out">Home</Link>
                </li>
                <li>
                  <Link to="/search" className="text-white hover:text-blue-200 text-lg font-medium transition duration-300 ease-in-out">Search</Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-blue-200 text-lg font-medium transition duration-300 ease-in-out">About</Link>
                </li>
              </ul>
            </nav>

            {/* Main Content Area */}
            <main className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Fallback for undefined routes */}
                <Route path="*" element={<div className="text-center p-8 text-red-500">404 - Page Not Found</div>} />
              </Routes>
            </main>
          </div>
        </Router>
      );
    }

    export default App;
    
