import React from 'react'
import projectImg from "../assets/img/project.png"
import userImg from "../assets/img/user1.png"

function Hero() {
  return (
    <section className="section1" id="hero">
      <div className="hero flex">
        <div className="left flex">
          <div className="name">Hi, I am Kiran Gautam</div>
          <div className="tag">Software Engineer</div>
          <div className="sub-tag">I love coding and teaching...</div>
          <button>
            <a href= {projectImg} download>
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </button>
        </div>
        <div className="right flex">
          <img src={userImg} alt="user" />
        </div>
      </div>
    </section>
  );
}

export default Hero