import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>
    </div>
  );
};

export default Header;
