

import React from "react"
// import Search from "./search"
import logo from "../images/lp-logo.svg"
var FontAwesome = require("react-fontawesome")

const Header = props => {
  const handleMode = () => {
    return props.mode === "light"
      ? props.setMode("dark")
      : props.setMode("light")
  }
  return (
    <div className="header flex align-center justify-between">
      <div id="logocontainer">
        <a href="/" className="flex">
          <img src={logo} />
        </a>
      </div>
      <div className="flex align-center justify-between gap">
        <div className="flex gap" id="homebuttons">
          <button className="modebtn" onClick={handleMode}>
            <FontAwesome className="fab fa-adjust" name="Adjust" />
          </button>
          <span id="login" className="homebutton">
            <a
              className="flex"
              target="_blank"
              href="https://liveengage.liveperson.net"
            >
              LivePerson login
            </a>
          </span>
        </div>
        {/* <a
          href="https://knowledge.liveperson.com/"
          className="casey flex items-center"
        >
          <img className="caseyPortrait m-0" src="img/open-casey-header.svg" />
          <span className="text-white ml-2">CASEY</span>
        </a> */}
      </div>
    </div>
  )
}

export default Header
