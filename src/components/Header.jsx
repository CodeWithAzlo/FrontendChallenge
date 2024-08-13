import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          Udemy
        </a>
        <li>
          <a href="link" class="nav-item1">
            Category
          </a>
        </li>
      </div>
      <div className="search-bar">
        <button type="button" className="search-icon">
          <FaSearch />
        </button>
        <input type="text" placeholder="Search for Anything..." />
      </div>
      <ul class="nav-menu">
        <li>
          <a href="link1" class="nav-item">
            Udemy Business
          </a>
        </li>
        <li>
          <a href="link1" class="nav-item">
            Teach on Udemy
          </a>
        </li>
        <a href="/cart" className="nav-link">
          <FaShoppingCart />
        </a>
        <button className="login">Login In</button>
        <button className="signup">Sign Up</button>
        <button className="btn">
          <a href="/profile" className="nav-link">
            <TbWorld />
          </a>
        </button>
      </ul>
    </header>
  );
};

export default Header;
