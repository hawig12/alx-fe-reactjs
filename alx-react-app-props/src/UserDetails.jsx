
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