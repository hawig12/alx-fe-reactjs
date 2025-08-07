import React from 'react';

/**
 * A profile card component styled with Tailwind CSS.
 * It displays a user's image, name, and a short bio.
 */
function UserProfile() {
  return (
    // Container Styling
    // bg-gray-100: sets a light gray background
    // p-8: adds 8 units of padding inside
    // max-w-sm: sets a maximum width for the card (400px by default)
    // mx-auto: centers the card horizontally
    // my-20: adds vertical margin to center it on the page
    // rounded-lg: applies medium-sized rounded corners
    // shadow-lg: adds a large drop shadow for depth
    // text-center: centers the text content
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      {/* Image Styling */}
      {/* mx-auto: centers the image horizontally */}
      {/* rounded-full: makes the image circular */}
      {/* w-36 h-36: sets the width and height to 144px */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User Profile" 
        className="mx-auto rounded-full w-36 h-36" 
      />
      
      {/* Heading Styling */}
      {/* text-xl: sets a large font size */}
      {/* text-blue-800: sets a deep blue text color */}
      {/* my-4: adds vertical margin */}
      <h1 className="text-xl font-semibold text-blue-800 my-4">John Doe</h1>
      
      {/* Paragraph Styling */}
      {/* text-gray-600: sets a gray text color */}
      {/* text-base: sets the base font size */}
      <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
