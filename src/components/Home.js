import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-intro">
        <p className="greeting">Hi, my name is</p>
        <h1 className="name">Sandeep Vaskuri</h1>
        <h2 className="title">(Software Developer)</h2>
        <p className="description">
          A passionate developer specializing in creating beautiful and
          functional web applications.
        </p>
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/Sandeep12a7"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github.png" alt="GitHub link" height="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sandeep-vaskuri"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin.png" alt="LinkedIn link" height="30" />
            </a>
          </li>
          <li>
            <Link to="/contact" aria-label="Contact">
              <img src="new.png" alt="Contact" height="30" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="home-image">
        <img src="programmer.svg" alt="Illustration of a programmer" />
      </div>
    </section>
  );
};

export default Home;
