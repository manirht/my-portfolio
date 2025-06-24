import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: ["C", "C++", "Java", "JavaScript", "Python"]
    },
    {
      title: "Tools",
      items: ["Git", "Linux", "Windows"]
    },
    {
      title: "Technologies & Frameworks",
      items: [
        "React.js", "Next.js", "Socket.io", "Node.js", "Express", 
        "MongoDB", "MySQL", "GitHub", "Numpy", "Pandas", 
        "Flask", "Machine Learning"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="project-card">
              <h3 className="text-xl mb-4" style={{ color: 'var(--accent-primary)' }}>{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 rounded-md text-sm flex items-center"
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}