import React from 'react';
import logoImage from '../assets/logo2.png'; // Update this path based on your project structure

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-img" />
      </div>
      <nav className="nav-links">
        <a href="/home">Home</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Recipes</a>
        <a href="#">Career</a>
        <a href="#">Media</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
