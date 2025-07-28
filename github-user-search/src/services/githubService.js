 // src/services/githubService.js
    import axios from 'axios';

    // Function to get the GitHub API key from environment variables
    // VITE_APP_GITHUB_API_KEY should be defined in your .env file
    const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

    // Create an Axios instance with a base URL and authorization header
    const githubApi = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        'Authorization': GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : '', // Use a Personal Access Token if available
        'Accept': 'application/vnd.github.v3+json', // Recommended GitHub API header
      },
    });

    /**
     * Searches for GitHub users based on a query.
     * @param {string} query - The search term for users.
     * @returns {Promise<Array>} A promise that resolves to an array of user objects.
     */
    export const searchUsers = async (query) => {
      try {
        const response = await githubApi.get(`/search/users?q=${query}`);
        return response.data.items; // GitHub API returns search results in 'items' array
      } catch (error) {
        console.error('Error searching users:', error);
        throw error; // Re-throw to allow component to handle the error
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
        console.error(`Error fetching details for user ${username}:`, error);
        throw error;
      }
    };

    // You can add more functions here for repositories, gists, etc.
    
