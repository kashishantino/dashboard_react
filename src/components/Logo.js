import React from 'react';
import logo from '../logo.png';

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{
        width: '400px',
        padding: '8px',
        marginTop: '25px',
        height: '350px',
        marginRight: '14px',
      }}
    />
  );
};

export default Logo;
