import React from "react";
import logo_image from "../../assets/Images/google-keep-logo.png"
import "./_header.css"

function Header() {
  const logo = (
    <img
    className="logo_img" 
      src={logo_image}
      alt="logo"
    />
  );
  return (
    <div className="header">
      {logo}
      <h1>Keep</h1>
    </div>
  );
}

export default Header;
