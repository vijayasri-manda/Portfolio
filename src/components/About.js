import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../styles/About.css';

const About = ({ profileImage }) => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title"><FaUserCircle className="emoji-fix" /> About Me</h2>
        <div className="tagline">
          <code>Turning Ideas into Intelligent Solutions.</code>
        </div>
        <div className="about-content">
          <div className="about-card">
            <div className="card-inner">
              <p className="intro">
                Hi, I'm <span className="highlight">Vijaya Sri Manda</span> - An aspiring <span className="highlight">AI & Data Science Engineer</span> currently studying at <span className="highlight">Seshadri Rao Gudlavalleru Engineering College</span>.
              </p>
              <p>
                I'm passionate about coding, web development, and problem-solving. I love building sleek, responsive, and user-centric web applications that combine logic with creativity. For me, programming isn't just writing code - it's about solving real-world problems with smart and scalable solutions.
              </p>
              <div className="interests">
                <h3>In the world of technology, I enjoy exploring:</h3>
                <div className="interest-grid">
                  <div className="interest-item">
                    <span className="icon">⚡</span>
                    <span>Modern Web Development</span>
                  </div>
                  <div className="interest-item">
                    <span className="icon">🧠</span>
                    <span>Artificial Intelligence & Data Science</span>
                  </div>
                  <div className="interest-item">
                    <span className="icon">💡</span>
                    <span>Logical & Analytical Problem Solving</span>
                  </div>
                  <div className="interest-item">
                    <span className="icon">🎨</span>
                    <span>Clean UI / UX Design</span>
                  </div>
                </div>
              </div>
              <p className="closing">
                I continuously push myself to learn new technologies, improve performance, and write efficient code. My goal is to grow into a skilled developer who builds impactful digital experiences.
              </p>
              <div className="resume-download">
                <a href="/VijayaSri%20Resume.pdf" download="VijayaSri-Resume.pdf" className="btn-resume">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
          {profileImage && (
            <div className="about-image-container">
              <img src={profileImage} alt="Manda Vijaya Sri" className="about-image" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
