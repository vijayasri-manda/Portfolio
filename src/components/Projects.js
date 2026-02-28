import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    { 
      title: 'FreshCartExpress', 
      tech: 'React, Node.js, Express, MongoDB', 
      color: '#10b981',
      description: 'A powerful full-stack MERN application revolutionizing online grocery shopping with seamless ordering, real-time inventory management, and personalized user experiences.',
      link: 'https://github.com/vijayasri-manda/FreshCartExpress',
      demo: 'https://drive.google.com/file/d/1KjHwY1T5b4LXJ2ln9w9qjbSLUfk1_3Yq/view'
    },
    { 
      title: 'Digital Literacy Platform', 
      tech: 'React, JavaScript, CSS', 
      color: '#ec4899',
      description: 'An interactive learning platform empowering rural communities with essential digital skills through simple, engaging lessons designed for beginners to bridge the digital divide.',
      link: 'https://github.com/vijayasri-manda/Digital-Literacy',
      demo: 'https://digital-literacy-opal.vercel.app/'
    },
    { 
      title: 'DroneSpotter', 
      tech: 'YOLOv8, FastAPI, HTML/CSS/JS', 
      color: '#6366f1',
      description: 'An intelligent real-time drone detection system leveraging YOLOv8 deep learning model with FastAPI backend for accurate aerial object recognition and tracking.',
      link: 'https://github.com/vijayasri-manda/DroneSpotter',
      demo: 'https://dronespotter-5c87f.web.app/'
    },
    { 
      title: 'HomelyHub', 
      tech: 'MERN, Razorpay, ImageKit', 
      color: '#f59e0b',
      description: 'A feature-rich hotel booking platform inspired by Airbnb, enabling users to discover, book, and list properties with integrated payment processing and cloud-based image management.',
      link: 'https://github.com/vijayasri-manda/Homely-Hub',
      demo: 'https://www.youtube.com/watch?v=ixXSwBKKH_o'
    },
    { 
      title: 'Smart Study Planner', 
      tech: 'HTML, CSS, JavaScript', 
      color: '#8b5cf6',
      description: 'An intelligent productivity tool that transforms learning into achievable milestones by creating personalized study schedules, breaking down complex goals, and providing real-time progress tracking for students and professionals.',
      link: 'https://github.com/vijayasri-manda/Smart-Study-Planner',
      demo: 'https://vijayasri-manda.github.io/Smart-Study-Planner/'
    },
    { 
      title: 'Data Science Projects', 
      tech: 'Python, Pandas, Scikit-learn, NLP', 
      color: '#14b8a6',
      description: 'A comprehensive collection of data science projects including car price prediction models, exploratory data analysis, web scraping automation, natural language processing, and statistical modeling demonstrating end-to-end ML workflows.',
      link: 'https://github.com/vijayasri-manda/Data-Science',
      demo: 'https://www.linkedin.com/posts/vijaya-sri-manda-399a56343_intership-certificate-activity-7347527788037369856-NnG1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFYeZ6UBzENvMensEzeQbxBsnLAxtwqyMwg'
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title projects-title">
          <span className="title-word">Featured</span> <span className="title-word">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--accent-color': project.color }}>
              <h3>{project.title}</h3>
              <p className="tech-stack">{project.tech}</p>
              {project.description && <p className="project-desc">{project.description}</p>}
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link" title="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
              <div className="project-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
