import React from "react";
import "./Abouts.css";

const Abouts = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="bio">
          <h2>Education</h2>
          <p>
            My name is Sandeep Vaskuri, currently pursuing my final year of
            B.Tech in Information Technology at Vishnu Institute of Technology,
            Bhimavaram, with a CGPA of 8.25. I completed my intermediate
            education at Sri Chaitanya Junior College with a percentage of 95.1
            and my schooling at Dr.KKR Gowtham [E.M] School with a percentage of
            88.6.
          </p>
        </div>

        <div className="skills">
          <h2>Technical Skills</h2>
          <p>
            Over the past four years, I have acquired skills in programming
            languages such as Java, C, and Python, along with full-stack web
            development. I am proficient with databases like MongoDB and
            Firebase. Additionally, I have experience with frameworks like
            React.js and Bootstrap, tools such as Weka and Git, and have gained
            knowledge in DevOps through a workshop.
          </p>
        </div>

        <div className="projects">
          <h2>Projects</h2>
          <p>
            I have built several projects including a Chat app web application,
            food donation web application and waste recycle web application(as a
            team member). These projects have helped me hone my problem-solving
            skills and apply my technical knowledge effectively.
          </p>
        </div>

        <div className="goals">
          <h2>Goals</h2>
          <p>
            My short-term goal is to secure a position in a reputable company,
            while my long-term goal is to reach a leadership role within the
            organization. I am passionate about my career and dedicated to
            continuous learning and improvement.
          </p>
        </div>

        <div className="hobbies">
          <h2>Personal Interests</h2>
          <p>
            In my free time, I enjoy playing cricket and reading newspapers,
            which helps me stay updated and maintain a balanced lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
