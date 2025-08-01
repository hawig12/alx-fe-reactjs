// src/components/Search.jsx
    import React, { useState } from 'react';
    import { searchUsers } from '../services/githubService'; // Import the API service

    function Search({ onSearch }) {
      const [query, setQuery] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const handleSearch = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (!query.trim()) {
          setError("Please enter a username to search.");
          return;
        }

        setLoading(true);
        setError(null); // Clear previous errors

        try {
          // Call the searchUsers function from your service
          const users = await searchUsers(query);
          onSearch(users); // Pass the results back to the parent component (App.jsx)
        } catch (err) {
          console.error("Failed to fetch users:", err);
          setError("Looks like we can't find the user. Please try again.");
          onSearch([]); // Clear results on error
        } finally {
          setLoading(false);
        }
      };

      return (
        <div className="p-4 bg-white rounded-lg shadow-md mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold w-full sm:w-auto"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
        </div>
      );
    }

    export default Search;
    
