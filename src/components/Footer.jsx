import React from "react";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="icons">
        <a href="mailto:radhad83@gmail.com" target="blank">
          <i class="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/radhad-ux/eika-shoppinglistapp"
          target="blank"
        >
          <i class="fab fa-fw fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/radhadoreswamy/" target="blank">
          <i class="fab fa-fw fa-linkedin-in"></i>
        </a>
        <a href="https://instagram/radha/" target="blank">
          <i class="fab fa-instagram-square"></i>
        </a>
      </div>
      <span>©{currentYear} EIKA-Furniture Shop: All rights reserved</span>
    </div>
  );
}
