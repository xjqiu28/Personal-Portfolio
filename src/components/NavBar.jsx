import { useState } from "react";
import "../styles/NavBar.css";
import { FaSun, FaMoon } from "react-icons/fa";
import toggleMenu from "../../script";

function NavBar({ darkMode, setDarkMode }) {
  function ToggleDark() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <nav id="desktop-nav">
        <div class="logo">Xin Jin Qiu</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div class="light-dark" onClick={ToggleDark}>
        {darkMode ? <FaSun size={20} color="#FFD700" /> : <FaMoon size={20} color="#555" />}
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div class="logo">Xin Jin Qiu</div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </div>
        <div class="light-dark" onClick={ToggleDark}>
        {darkMode ? <FaSun size={20} color="#FFD700" /> : <FaMoon size={20} color="#555" />}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
