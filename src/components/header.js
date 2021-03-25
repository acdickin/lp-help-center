import React from "react";
import Search from './search/'
import { Link } from "react-router-dom";
import logo from "../images/lp-logo.svg";
import LanguageSelector from "./language-selector";
require("dotenv").config({
  path: `../.env`,
})
var FontAwesome = require("react-fontawesome");

const Header = ({ setMode, mode, setLanguage, language, lookupTable }) => {

  const handleMode = () => {
    return mode === "light" ? setMode("dark") : setMode("light");
  };
  const handleSetLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <div className="header flex align-center justify-between column-mobile">
      <div id="logocontainer">
        <Link to="/" className="flex">
          <img alt="liveperson logo" src={logo} />
        </Link>
      </div>
      <div className="flex align-center justify-between gap">
        <Search language={language} lookupTable={lookupTable} />
        <LanguageSelector
          handleSetLanguage={handleSetLanguage}
          language={language}
        />
        <div className="flex gap" id="homebuttons">
          <button className="modebtn" onClick={handleMode}>
            <FontAwesome className="fab fa-adjust" name="Adjust" />
          </button>
          <span id="login" className="homebutton">
            <a
              className="flex button"
              target="_blank"
              rel="noreferrer"
              alt="liveperson login"
              href="https://liveengage.liveperson.net"
            >
              LivePerson login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
