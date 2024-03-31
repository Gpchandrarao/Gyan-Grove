import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { IoPerson } from "react-icons/io5";

import "../styles/Header.css";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <header className="header-container">
      <div className="rigth">BookUsNow</div>

      {/* mediel */}
      <div className="medile">
        <div className="categorie-container">
          <IoMdMenu />
          <p className="categorie">Categories</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="DJI  phantom"
            value={inputValue}
            onChange={onChangeInput}
          />
          <CiSearch className="search-icon" />
        </div>
      </div>
      {/* left */}
      <div className="left">
        <CiSearch className="search-icon-mb" />

        <FaHeart />
        <IoPerson className="person-bg" />
        <p className="favorites">Favorites</p>
        <button className="sign-btn" type="button">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
