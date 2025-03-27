import { useState } from "react";
import "../styles/Profile.css";
import toggleMenu from "../../script";
import profilePicture from "../assets/profile-picture.png";
import resume from "../assets/Xin_Jin_Qiu_Resume.pdf";

function Profile() {

  return (
    <>
      <section id="profile">
        <div className="section___pic-container">
            <img src={profilePicture} alt="XJ Profile Picture" />
        </div>
        <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Xin Jin Qiu</h1>
            <p className="section__text__p2">FullStack Developer</p>
            <div className="btn-container">
                <button 
                className="btn btn-color-2"
                onClick={()=>window.open(resume,"_blank")}>
                    Resume
                </button>
                <button 
                className="btn btn-color-1"
                onClick={()=>window.location.href = "#contact"}>
                    Contact Me
                </button>
            </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
