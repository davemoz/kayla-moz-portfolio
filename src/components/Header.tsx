import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header className="header">
      <div className="branding">Kayla Moz</div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/exhibitions">Exhibitions</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
