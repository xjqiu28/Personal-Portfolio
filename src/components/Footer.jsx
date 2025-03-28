import { useState } from "react";

function Footer() {
  return (
    <>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <p class='back-top' onClick={() => location.href='./#nav'}>Back to Top</p>
        </nav>
        
      </footer>
    </>
  );
}

export default Footer;
