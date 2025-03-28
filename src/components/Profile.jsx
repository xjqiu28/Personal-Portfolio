import { useState, useEffect } from "react";
import "../styles/Profile.css";
import toggleMenu from "../../script";
import profilePicture from "../assets/profile-picture.png";
import resume from "../assets/Xin_Jin_Qiu_Resume.pdf";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

function Profile() {
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "AI & Web Developer",
    "C# & React Engineer",
  ];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [fadeClass, setFadeClass] = useState("fade-in");
  let index = 0;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setFadeClass("fade-out"); // Start fading out

      setTimeout(() => {
        index = (index + 1) % roles.length;
        setCurrentRole(roles[index]);
        setFadeClass("fade-in"); // Fade in new text
      }, 500); // Wait for fade-out before changing text
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="profile">
        <div className="section___pic-container">
          <img src={profilePicture} alt="XJ Profile Picture" class="profile-pic"/>
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Xin Jin Qiu</h1>
          <p className={`section__text__p2 ${fadeClass}`}>{currentRole}</p>
          <div className="btn-container">
            <button
              className="btn resume-button"
              onClick={() => window.open(resume, "_blank")}
            >
              Resume
            </button>
            <button
              className="btn contact-info-button"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="Linkedin Profile"
              class="icon"
              onClick={() =>
                (window.location.href = "https://www.linkedin.com/in/xinjinqiu")
              }
            />
            <img
              src={github}
              alt="Github Repo"
              class="icon"
              onClick={() =>
                (window.location.href = "https://github.com/xjqiu28")
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
