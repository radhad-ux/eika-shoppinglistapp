import React from "react";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <span>©{currentYear} EIKA-Furniture Shop: All rights reserved</span>
    </div>
  );
}
