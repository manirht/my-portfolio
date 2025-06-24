import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Zidio (Remote)",
      role: "Software Development Intern",
      period: "December 2023 - March 2024",
      achievements: [
        "Co-engineered 10+ responsive web projects alongside designers, contributing to UI/LIX and frontend integration",
        "Built and maintained over 3 full-stack websites from scratch, both independently and collaboratively"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-10">
          {experiences.map((exp, index) => (
            <div key={index} className="project-card">
              <div className="flex flex-wrap items-baseline mb-2">
                <h3 className="text-xl" style={{ color: 'var(--accent-primary)' }}>{exp.company}</h3>
                <span className="ml-4" style={{ color: 'var(--accent-secondary)' }}>{exp.period}</span>
              </div>
              
              <div className="mb-3">
                <span style={{ color: 'var(--vs-yellow)' }}>{exp.role}</span>
              </div>
              
              <ul className="list-disc pl-6 space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}