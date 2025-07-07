import React from 'react';

const ContactButton = () => {
  const handleClick = () => {
    window.location.href = 'mailto:yourname@example.com?subject=Contact%20Request&body=Hi%20there,';
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
