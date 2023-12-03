import React from "react";
import "../../style/Header.css";
import "../../style/BorderShadow.css";

const HandleSearch = () => {
  const searchName = document.querySelector(".searchName-label");
  console.log("clicado");
  searchName.classList.toggle("show-up");
};

const Header = () => (
  <div className="header-container border-bottom">
    <span className="title-container">
      <h1>Moovie</h1>
      <h4>Your Favourite Finder Movie</h4>
    </span>
    <section className="menu">
      <ul className="menu-options">
        <li>Menu</li>
        <li>Categories</li>
        <li className="search-button-container">
          <label className="searchName-label">As branquelas</label>
          <p className="search-button" onClick={HandleSearch}>
            Search
          </p>
        </li>
        <li>Login</li>
      </ul>
    </section>
  </div>
);

export default Header;
