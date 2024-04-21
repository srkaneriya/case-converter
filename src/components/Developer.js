import React from "react";
import "./Developer.css";
import Footer from "./Footer";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import profile from "./Profile.png"
function Developer() {
  return (
    <>
      <div className="mybox">
        <div className="card-container">
          <img className="round" src={profile} alt="user" />
          <h3>Samir Kaneriya</h3>
          <h6>Ahmedabad</h6>
          <p>
            Front-End Developer
          </p>

          <ul class="social-icons">
            <li>
              <a href="https://github.com/srkaneriya">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/samir_kaneriya/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/samir-kaneriya-70219b2bb">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Developer;
