import React from 'react';
import logoImg from './logo.svg';
import './style.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo - Watch Checklist" className="logo-img" />
    </div>
  );
}

export default Logo;
