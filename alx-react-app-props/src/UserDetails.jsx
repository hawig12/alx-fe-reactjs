
// src/UserDetails.jsx
import React, { useContext } from 'react'; // Import useContext
import UserContext from './UserContext'; // Import UserContext

function UserDetails() { // No userData prop here anymore
  const userData = useContext(UserContext); // Consume context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
// src/UserDetails.jsx
import React, { useContext } from 'react'; // Import useContext hook
import UserContext from './userContext'; // Import the UserContext (lowercase 'u')

/**
 * UserDetails component.
 * This component displays user details. It now consumes 'userData' directly
 * from the UserContext using the useContext hook, eliminating prop drilling.
 */
function UserDetails() {
  // Use the useContext hook to access the value provided by UserContext.Provider
  const userData = useContext(UserContext);

  return (
    <div>
      {/* Display user's name and email from the consumed userData */}
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
