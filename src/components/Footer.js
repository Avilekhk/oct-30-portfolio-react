import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/avilekhk/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>Facebook</li>
            <li>Github</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className="copy">&copy; All Right Reserved.</div>
    </footer>
  );
}

export default Footer
