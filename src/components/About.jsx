import { useState } from "react";
import "../styles/About.css";
import toggleMenu from "../../script";
import email from "../assets/email.png";
import aboutMe from "../assets/About-Me.png";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import arrow from "../assets/arrow.png";

function About() {

  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More </p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
            <div className="section__pic-container">
                <img src={aboutMe} alt="About Me Picture" className="about-pic"/>
            </div>
            <div className="about-details-containers">
                <div className="about-containers">
                    <div className="details-container">
                        <FaCode size={40} color="black" className="icon"/>
                        <h3>Experience</h3>
                        <p>1+ Years <br />Frontend Development</p>
                    </div>
                    <div className="details-container">
                    <FaGraduationCap size={40} color="black" className="icon"/>
                        <h3>Education</h3>
                        <p>B.Sc. Appled Mathematics and Statisticcs<br />Frontend Development</p>
                    </div>
                </div>
                <div className="text-container">
                    <p>Hi, I'm Xin Jin Qiu, a passionate Software Engineer who loves crafting clean, efficient code and tackling complex problems. When I'm not writing JavaScript or optimizing databases, you'll likely find me playing games or playing musical instruments. In fact, whenever I'm gaming, I can't help but think about how I’d implement certain features if I were the developer—it's a great way to fuel my creativity and problem-solving skills!

With over a year of experience working with React, C#, and web development technologies, I’ve had the chance to work on everything from UI/UX improvements to server-side performance optimization. I hold a B.Sc. in Applied Mathematics and Statistics from Stony Brook University, which provided me with a solid foundation in problem-solving and data analysis.

I'm passionate about continuous learning and believe that coding isn’t just about solving problems—it's about creating experiences that enrich people's lives. Whether it’s through developing new software or just exploring new tech, I’m always excited to learn and grow in this dynamic field.</p>
                </div>
            </div>
        </div>
        <img src={arrow} alt="Arrow Icon" className="icon arrow" onClick={() => location.href='./#experience'}/>
      </section>
    </>
  );
}

export default About;
