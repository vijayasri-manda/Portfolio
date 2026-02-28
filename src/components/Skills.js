import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages & Concepts',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'DSA in Java', 'Algorithms']
    },
    {
      title: 'Web Technologies & Databases',
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js', 'MongoDB', 'SQL']
    },
    {
      title: 'Software & Tools',
      skills: ['Git', 'Firebase', 'GitHub', 'Visual Studio Code', 'PyCharm', 'Google Colab', 'Jupyter Notebook', 'Orange']
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
