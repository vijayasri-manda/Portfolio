import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      {showWelcome && (
        <div className="welcome-popup" role="status" aria-live="polite">
          <div className="welcome-emoji">{'\u{1F44B}'}</div>
          <div className="welcome-text">Welcome to my portfolio</div>
          <div className="welcome-subtext">Scroll and explore my work</div>
        </div>
      )}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="greeting">Hi, I'm</span> <span className="name-highlight">{'Manda Vijaya Sri'.split('').map((char, index) => (
              <span key={index} className="letter" style={{ animationDelay: `${index * 0.05}s` }}>{char}</span>
            ))}</span>
          </h1>
          <p className="subtitle">
            <span className="typing-text">Full Stack Developer & Creative Designer & Coder</span>
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>View My Work</span>
              <div className="btn-glow"></div>
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span>Contact Me</span>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="grid-overlay"></div>
    </section>
  );
};

export default Hero;
