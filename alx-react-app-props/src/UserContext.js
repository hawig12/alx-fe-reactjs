// src/UserContext.js
import React from 'react';

// Initialize a Context.
// The argument passed to createContext (here, null) is the default value
// that consumers will receive if they don't have a matching Provider above them
// in the component tree.
const UserContext = React.createContext(null);

// Export the created context.
// This allows other components (like App.jsx and UserDetails.jsx)
// to import and use this specific context.
export default UserContext;
