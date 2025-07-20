// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#3366ff', fontSize: '1.8em', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold', color: '#555' }}>{props.age}</span></p>
      <p style={{ fontSize: '1em', lineHeight: '1.5' }}>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
  );
};

export default UserProfile;