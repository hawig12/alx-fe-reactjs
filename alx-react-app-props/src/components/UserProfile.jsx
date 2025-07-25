// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

const UserProfile = () => {
  // Pull userData from context
  const userData = useContext(UserContext);

  // Now pass it into UserInfo (or render directly)
  return <UserInfo userData={userData} />;
};

export default UserProfile;
