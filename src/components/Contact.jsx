import { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope } from "react-icons/fa";
import linkedin from "../assets/linkedin.png";

function Contact() {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <FaEnvelope size={40} color="black" className="icon contact-icon" />
            <p>
              <a href="mailto:xinjin.qiu.1@gmail.com">xinjin.qiu.1@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedin}
              alt="Linkedin Profile"
              class="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/xinjinqiu">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
