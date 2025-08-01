`/search/users?q=${searchQuery}&per_page=10&page=${page}`
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
  let query = username.trim();
  if (location.trim()) {
    query += `+location:${location.trim()}`;
  }
  if (minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }
  return query;
};

/**
 * Searches for GitHub users with advanced criteria.
 * @param {{ username: string, location: string, minRepos: number, page: number }} params
 * @returns {Promise<Object>} A promise that resolves to the API response object.
 */
export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  try {
    const searchQuery = buildSearchQuery(username, location, minRepos);
    if (!searchQuery) {
        return { items: [], total_count: 0 };
    }
    const response = await githubApi.get(`/search/users?q=${searchQuery}&per_page=10&page=${page}`);
    return response.data; // This now includes 'items', 'total_count', etc.
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Fetches detailed information for a specific GitHub user.
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
