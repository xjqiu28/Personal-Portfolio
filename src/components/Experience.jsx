import { useState } from "react";
import "../styles/Experience.css";
import aboutMe from "../assets/About-Me.png";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import arrow from "../assets/arrow.png";
import shieldql from "../assets/ShieldQL.png";
import circuitBoard from "../assets/CircuitBoard.png";
import mewantfood from "../assets/MeWantFood.png";
import codethedream from "../assets/CTD.png"

function Experience() {
  return (
    <>
      <section id="experience">
        <h1 className="title">Experiences</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={shieldql} alt="ShieldQL" class="experience-img" />
              </div>
              <h2 className="experience-sub-title experience-title">
                ShieldQL
              </h2>
              <p className="company-name">Developed by <span className="company-highlight">ShieldQL (Open Source)</span></p>
              <div className="tech-stack">
                <p>Technologies Used</p>
                <span className="tech-item">JavaScript (ES6+)</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Express</span>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() => (location.href = "https://www.shieldql.com/")}
                >
                  ShieldQL Product Page
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={circuitBoard}
                  alt="circuit board"
                  class="experience-img"
                />
              </div>
              <h2 className="experience-sub-title experience-title">
                Audition AI
              </h2>
              <p className="company-name">Developed by <span className="company-highlight">Saberin Software</span></p>
              <div className="tech-stack">
                <p>Technologies Used</p>
                <span className="tech-item">C#</span>
                <span className="tech-item">ASP.Net</span>
                <span className="tech-item">Blazor</span>
                <span className="tech-item">Azure</span>
                <span className="tech-item">SQL</span>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() =>
                    (location.href = "https://audition-ai.com/audition.html")
                  }
                >
                  Audition AI Introduction
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={codethedream} alt="Code The Dream" class="experience-img ctd" />
              </div>
              <h2 className="experience-sub-title experience-title">
                Code The Dream
              </h2>
              <div className="tech-stack">
                <p>Technologies Used</p>
                <span className="tech-item">React</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">JWT (JSON Web Token)</span>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() =>
                    (location.href = "https://codethedream.org/")
                  }
                >
                  Company Website
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          src={arrow}
          alt="Arrow Icon"
          className="icon arrow"
          onClick={() => (location.href = "./#contact")}
        />
      </section>
    </>
  );
}

export default Experience;
