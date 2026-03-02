import React from "react";
import booksImage from "../../assets/books.avif"; // your stack books image
import searchIcon from "../../assets/search.png"; // your search icon image
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Welcome to <br /> Our Library
          </h1>
          <p>Manage and explore books effectively</p>

          <div className="search-bar">
            <img src={searchIcon} alt="search" className="search-icon" />
            <input type="text" placeholder="Search books..." />
            <button>Search</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={booksImage} alt="Books" />
        </div>
      </div>
    </div>
  );
};

export default Hero;