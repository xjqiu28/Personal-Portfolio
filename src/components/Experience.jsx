import { useState } from "react";
import "../styles/Experience.css";
import aboutMe from "../assets/About-Me.png";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import arrow from "../assets/arrow.png";
import shieldql from "../assets/ShieldQL.png";
import naturalization from "../assets/Naturalization.png";
import mewantfood from "../assets/MeWantFood.png";

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
              <div className="btn-container">
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() => (location.href = "https://www.shieldql.com/")}
                >
                  View
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={naturalization}
                  alt="Naturalization Practice Exam"
                  class="experience-img"
                />
              </div>
              <h2 className="experience-sub-title experience-title">
                Naturalization Practice
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() =>
                    (location.href =
                      "https://xjqiu28.github.io/Naturalization-Test/")
                  }
                >
                  View
                </button>
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() =>
                    (location.href =
                      "https://github.com/xjqiu28/Naturalization-Test")
                  }
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={mewantfood} alt="MeWantFood" class="experience-img" />
              </div>
              <h2 className="experience-sub-title experience-title">
                MeWantFood
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 experience-btn"
                  onClick={() =>
                    (location.href = "https://github.com/Axolotl-41/MeWantFood")
                  }
                >
                  Github
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
