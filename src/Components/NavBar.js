import React, { useState } from "react";
import "../scss/main.scss";

export default function NavBar() {
  const [toggle, setToggle] = useState({ istoggle: false });

  function toggleMenu() {
    const hamburger = document.querySelector(".menu-btn__burger");
    const nav = document.querySelector(".nav");
    const menuNav = document.querySelector(".menu-nav");
    const navItems = document.querySelectorAll(".menu-nav__item");

    if (!toggle.istoggle) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItems.forEach(item => item.classList.add("open"));
      setToggle({ istoggle: true });
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItems.forEach(item => item.classList.remove("open"));
      setToggle({ istoggle: false });
    }
  }
  return (
    <header>
      <div className="menu-btn" onClick={toggleMenu}>
        <span className="menu-btn__burger"></span>
      </div>
      <nav className="nav">
        <h1>From Subways to Strollers</h1>
        <ul className="menu-nav">
          <li className="menu-nav__item active">
            <a href="index.html" className="menu-nav__link">
              Motherhood
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="about.html" className="menu-nav__link">
              Natural Remedies
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="projects.html" className="menu-nav__link">
              Food
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="contact.html" className="menu-nav__link">
              NYC
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
