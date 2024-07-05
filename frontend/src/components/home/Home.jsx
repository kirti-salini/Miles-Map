import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";
import kirti from "../../assets/images/profile-photos/kirti.jpg";
import Slider from "./slider";
import nameBadge from "../../assets/images/name-tag.png";


const Home = () => {
  return (
    <div className="main-container">
      <main className="home-container">
        <section className="instructions-container">
          <Slider />
        </section>

        <section className="team-container">
          <div className="container">
            <img id="name-badge" src={nameBadge} alt="name-badge" />
            <div className="kirti">
              <div className="photo-container">
                <img src={kirti} alt="kirti's-profile" />
              </div>
              <div className="info">
                <p>Kirti Salini Beuria</p>
                <div className="socials">
                  <a
                    href="https://github.com/kirti-salini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub id="social-link" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kirti-salini-beuria/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin id="social-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
