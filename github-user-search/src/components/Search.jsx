// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData, getUserDetails } from '../services/githubService';

function Search() {
  // State for advanced search form inputs
  const [usernameQuery, setUsernameQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [minRepos, setMinRepos] = useState('');

  // State for search results and metadata
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Combines all search parameters into a single object
  const getSearchParams = () => ({
    username: usernameQuery,
    location: locationQuery,
    minRepos: parseInt(minRepos, 10) || 0,
  });

  const handleSearch = async (e) => {
    e.preventDefault();

    const { username, location, minRepos } = getSearchParams();

    if (!username.trim() && !location.trim()) {
      setError("Please enter a username or location to search.");
      setUsers([]);
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);
    setCurrentPage(1);

    try {
      const response = await fetchUserData({ username, location, minRepos, page: 1 });
      setTotalCount(response.total_count);

      // Fetch additional details for each user in parallel
      const detailedUsers = await Promise.all(
        response.items.map(user => getUserDetails(user.login))
      );
      setUsers(detailedUsers.filter(user => user !== null));
    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Looks like we cant find the user"); 
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    setError(null);
    const nextPage = currentPage + 1;
    const { username, location, minRepos } = getSearchParams();

    try {
      const response = await fetchUserData({ username, location, minRepos, page: nextPage });
      
      const detailedUsers = await Promise.all(
        response.items.map(user => getUserDetails(user.login))
      );
      setUsers(prevUsers => [...prevUsers, ...detailedUsers.filter(user => user !== null)]);
      setCurrentPage(nextPage);
    } catch (err) {
      console.error("Failed to load more users:", err);
      setError("Looks like we cant find the user"); 
    } finally {
      setLoading(false);
    }
  };

  const hasMoreResults = users.length < totalCount;
  const isSearchActive = usernameQuery.trim() || locationQuery.trim();

  return (
    <div className="p-4">
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md mb-6 p-4">
        <form onSubmit={handleSearch} className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              value={usernameQuery}
              onChange={(e) => setUsernameQuery(e.target.value)}
              placeholder="Enter GitHub username"
              className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <input
              type="text"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              placeholder="Filter by location"
              className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Min repos"
              className="w-full sm:w-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold w-full sm:w-auto self-center"
            disabled={loading}
          >
            {loading && currentPage === 1 ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {/* Conditional Rendering for Loading, Error, and Results */}
      {loading && currentPage === 1 && <p className="text-center text-blue-600 mt-4">Searching...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      
      {!loading && !error && users.length === 0 && isSearchActive && (
        <p className="text-center text-gray-600 mt-4">No results found.</p>
      )}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-start space-y-2 border border-gray-200">
              <div className="flex items-center space-x-4 w-full">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/cccccc/000000?text=NA"; }}
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">{user.login}</h3>
                  {user.name && <p className="text-gray-600 text-sm">{user.name}</p>}
                </div>
              </div>
              {user.location && (
                <p className="text-gray-600 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {user.location}
                </p>
              )}
              {user.public_repos !== undefined && (
                <p className="text-gray-600 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                  </svg>
                  {user.public_repos} Repositories
                </p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-2 inline-block"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
      
      {/* Load More Button for Pagination */}
      {users.length > 0 && hasMoreResults && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 font-semibold"
            disabled={loading}
          >
            {loading && currentPage > 1 ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
