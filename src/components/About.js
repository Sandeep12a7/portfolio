import React, { useState } from "react";
import "./About.css";

const technologies = [
  {
    name: "JavaScript",
    description: "A high-level, versatile programming language.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    image: "logo192.png",
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-1-226034.png?f=webp&w=256",
  },
  {
    name: "CSS",
    description:
      "A stylesheet language used for describing the presentation of a document written in HTML.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256",
  },
  {
    name: "HTML",
    description: "The standard markup language for creating web pages.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-html-3521493-2944937.png?f=webp&w=256",
  },
  {
    name: "MongoDB",
    description: "A document-based, NoSQL database.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256",
  },
  {
    name: "Express.js",
    description: "A minimal and flexible Node.js web application framework.",
    image:
      "https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=256",
  },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="about">
      <h2>Technologies</h2>
      <div className="card-container">
        {technologies.map((tech, index) => (
          <div
            className="card"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
            {hoveredIndex === index && (
              <div
                className="tech-image"
                style={{
                  backgroundImage: `url(${tech.image})`,
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
