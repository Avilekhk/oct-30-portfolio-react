import React from 'react'

function AboutMe() {
  return (
    <div className="section5" id="about">
      <h2 className="title">About Me</h2>
      <div className="about-container">
        <div className="left">
          <img src="./assets/img/user1.png" alt="User" />
        </div>
        <div className="right">
          <h2>Avilekh Kunwar</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, labore
            eveniet, odio cupiditate iusto dolorum, cum saepe vitae voluptates
            fugit ipsum consectetur sit deserunt illo? Voluptatem aliquam ipsum
            repellat sequi.
          </p>
          <div>
            <div className="tag">
              <h2>Interests</h2>
            </div>
            <div className="interests">
              <span>Coding</span>
              <span>Football</span>
              <span>Movies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe
