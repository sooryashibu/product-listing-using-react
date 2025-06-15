// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Company. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#2e7d32', // nice green color to match your theme
  color: 'white',
  textAlign: 'center',
  padding: '1rem 0',
  marginTop: 'auto',
};

export default Footer;
