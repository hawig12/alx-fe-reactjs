import React from 'react';

/**
 * A responsive profile card component styled with Tailwind CSS.
 * It displays a user's image, name, and a short bio, with styles
 * that adapt to different device sizes.
 */
function UserProfile() {
  return (
    // Responsive Container Styling
    // The classes are mobile-first, with 'sm' and 'md' prefixes
    // overriding styles for larger screens.
    // bg-gray-100: a light gray background
    // p-4: default padding for small screens
    // md:p-8: overrides to a larger padding on medium screens and above
    // max-w-xs: default max-width for small screens
    // md:max-w-sm: overrides to a larger max-width on medium screens and above
    // mx-auto: centers the card horizontally
    // my-20: adds vertical margin
    // rounded-lg: applies medium-sized rounded corners
    // shadow-lg: adds a large drop shadow
    // text-center: centers text content
    <div className="bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      
      {/* Responsive Image Styling */}
      {/* mx-auto: centers the image horizontally */}
      {/* rounded-full: makes the image circular */}
      {/* w-24 h-24: default size for small screens */}
      {/* md:w-36 md:h-36: overrides to a larger size on medium screens and above */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User Profile" 
        className="mx-auto rounded-full w-24 h-24 md:w-36 md:h-36" 
      />
      
      {/* Responsive Heading Styling */}
      {/* text-lg: default font size for small screens */}
      {/* md:text-xl: overrides to a larger font size on medium screens */}
      {/* text-blue-800: sets a deep blue text color */}
      {/* my-4: adds vertical margin */}
      <h1 className="text-lg md:text-xl font-semibold text-blue-800 my-4">John Doe</h1>
      
      {/* Responsive Paragraph Styling */}
      {/* text-sm: default font size for small screens */}
      {/* md:text-base: overrides to a larger font size on medium screens */}
      {/* text-gray-600: sets a gray text color */}
      <p className="text-sm md:text-base text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;

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
