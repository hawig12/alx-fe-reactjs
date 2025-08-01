// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a username to search.");
      setUsers([]); // Clear results
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      // Call the API service to fetch data
      const results = await fetchUserData(query);
      setUsers(results);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Looks like we can't find the user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md mb-6 p-4">
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
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {/* Conditional Rendering for Loading, Error, and Results */}
      {loading && <p className="text-center text-blue-600 mt-4">Searching...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      
      {!loading && !error && users.length === 0 && query.trim() && (
        <p className="text-center text-gray-600 mt-4">No results found.</p>
      )}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center space-x-4 border border-gray-200">
              {/* This is where the avatar and login are displayed */}
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/cccccc/000000?text=NA"; }}
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{user.login}</h3>
                {user.name && <p className="text-gray-600 text-sm">{user.name}</p>}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mt-1 inline-block"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
