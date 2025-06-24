import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "RoadIntel",
      date: "July 2024",
      description: "Deep Learning Traffic Signs Classification",
      technologies: ["Deep Learning", "OpenCV", "NumPy", "scikit", "matplotlib", "TensorFlow"],
      achievements: [
        "Developed and fine-tuned a deep learning CV model for real-time traffic signs classification, achieving a 25% reduction in misclassification errors",
        "Attained a 98% accuracy rate, boosting traffic management efficiency by 40%",
        "Processed and classified over 500,000 real-world traffic signal images"
      ]
    },
    {
      title: "ChatterBox",
      date: "April 2024",
      description: "Stay in sync. Speak in real time",
      technologies: ["Socket.IO", "NodeJS", "ExpressJS", "JavaScript", "MongoDB", "ReactJS"],
      achievements: [
        "Collaborated with a 2-person team to design and develop a full-stack chat platform enabling seamless real-time communication",
        "Designed and deployed RESTful APIs for user authentication, message handling, and chatroom management"
      ]
    },
    {
      title: "Journey Quest",
      date: "December 2023",
      description: "Book. Explore. Repeat",
      technologies: ["JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      achievements: [
        "Built and scaled a full-stack tour booking platform with end-to-end RESTful integration",
        "Architected and deployed RESTful APIs to fetch, filter, and manage tour packages"
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl" style={{ color: 'var(--accent-primary)' }}>{project.title}</h3>
                <span style={{ color: 'var(--vs-green)' }}>{project.date}</span>
              </div>
              
              <p style={{ color: 'var(--accent-secondary)' }}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 my-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {project.achievements.map((achievement, idx) => (
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