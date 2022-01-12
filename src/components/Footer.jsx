import React from "react";
import github from "../img/github-brands.svg";
import linkedin from "../img/linkedin-brands.svg";
import email from "../img/envelope-open-text-solid.svg";
import logo from "../img/mainlogo.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://github.com/radhad-ux/eika-shoppinglistapp/">
          <img src={github} alt="github-icon" />
        </a>
        <a href="mailto:radhad83@gmail.com">
          <img src={email} alt="email-icon" />
        </a>
        <a href="https://www.linkedin.com/in/radhadoreswamy/">
          <img src={linkedin} alt="linkedin-icon" />
        </a>
      </div>
      <span>
        ©{currentYear} EIKA-Furniture Shop: All rights reserved
        <img className="logo" src={logo} alt="logo" />
      </span>
    </div>
  );
}
