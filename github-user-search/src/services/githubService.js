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
 * Searches for GitHub users based on a query, as a replacement for the fetchUserData function.
 * @param {string} query - The search term for users.
 * @returns {Promise<Array>} A promise that resolves to an array of user objects.
 */
export const fetchUserData = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Fetches details for a specific GitHub user.
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
