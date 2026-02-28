import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaMusic, FaPause } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/App.css';
import './styles/DarkTheme.css';
import './styles/LightTheme.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('dark');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMusic = () => {
    if (!audioRef.current) {
      const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8f6e35f6d.mp3?filename=forest-lullaby-110624.mp3');
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    }

    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
      return;
    }

    audioRef.current.play().then(() => {
      setIsMusicPlaying(true);
    }).catch(() => {
      setIsMusicPlaying(false);
    });
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div
        className="cursor-glow"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
      <button className="music-toggle" onClick={toggleMusic} aria-label="Toggle calm music">
        {isMusicPlaying ? <FaPause /> : <FaMusic />}
      </button>
      <Navbar theme={theme} />
      <div id="hero"><Hero theme={theme} /></div>
      <div id="about"><About profileImage="/siri.jpeg" theme={theme} /></div>
      <div id="projects"><Projects theme={theme} /></div>
      <div id="skills"><Skills theme={theme} /></div>
      <div id="contact"><Contact theme={theme} /></div>
    </div>
  );
}

export default App;
