import React from 'react';

export default function Education() {
  const education = [
    {
      institution: "Indian Institute of Information Technology, Lucknow",
      degree: "Bachelor of Technology in Computer Science",
      period: "November 2022 - June 2026",
      gpa: "GPA: 8.32/10",
      coursework: [
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Operating System",
        "Database Management System",
        "Computer Networks"
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-10">
          {education.map((edu, index) => (
            <div key={index} className="project-card">
              <div className="flex flex-wrap justify-between items-start mb-3">
                <h3 className="text-xl" style={{ color: 'var(--accent-primary)' }}>{edu.institution}</h3>
                <span style={{ color: 'var(--accent-secondary)' }}>{edu.period}</span>
              </div>
              
              <div className="mb-4">
                <span style={{ color: 'var(--vs-yellow)' }}>{edu.degree}</span>
                <span className="mx-3">|</span>
                <span style={{ color: 'var(--vs-green)' }}>{edu.gpa}</span>
              </div>
              
              <div className="mt-5">
                <h4 className="text-lg mb-3" style={{ color: 'var(--accent-primary)' }}>Coursework:</h4>
                <div className="flex flex-wrap gap-3">
                  {edu.coursework.map((course, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-md text-sm"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}