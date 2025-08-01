// src/services/githubService.js
import axios from 'axios';

// Get the GitHub API key from environment variables
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create an Axios instance with a base URL and authorization header
const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : '',
    'Accept': 'application/vnd.github.v3+json',
  },
});

/**
 * Constructs the query string for the GitHub Search API based on advanced criteria.
 * @param {string} username - The search term for users.
 * @param {string} location - The location to filter by.
 * @param {number} minRepos - The minimum number of public repositories.
 * @returns {string} The formatted query string.
 */
const buildSearchQuery = (username, location, minRepos) => {
  // Start with the main username query
  let query = username.trim();

  // Add location filter if provided
  if (location.trim()) {
    query += `+location:${location.trim()}`;
  }
  
  // Add minimum repositories filter if provided
  if (minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }
  
  return query;
};

/**
 * Searches for GitHub users with advanced criteria.
 * It also handles pagination.
 * @param {{ username: string, location: string, minRepos: number, page: number }} params
 * @returns {Promise<Object>} A promise that resolves to the API response object.
 */
export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  try {
    // Build the query string with all advanced parameters
    const searchQuery = buildSearchQuery(username, location, minRepos);

    if (!searchQuery) {
        // If no search criteria are provided, return an empty result
        return { items: [], total_count: 0 };
    }

    // Make the GET request to the GitHub Search API endpoint
    const response = await githubApi.get(`/search/users?q=${searchQuery}&per_page=10&page=${page}`);
    
    // The response data contains items (users), total_count, and other metadata
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Fetches detailed information for a specific GitHub user.
 * This is needed to get information like location and public repo count,
 * which are not always available in the initial search results.
 * @param {string} username - The username of the GitHub user.
 * @returns {Promise<Object>} A promise that resolves to the user's detail object.
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
        console.warn(`User ${username} not found.`);
        return null;
    }
    console.error(`Error fetching details for user ${username}:`, error);
    throw error;
  }
};

