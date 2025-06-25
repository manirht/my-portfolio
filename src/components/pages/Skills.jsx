import React from 'react';
// IMPORTANT: You will need to install react-icons if you haven't already: npm install react-icons
// Then, import the specific icon components you need from their respective packages.
// Examples are provided below. You'll need to expand this list for all your skills.
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaLinux, FaJava, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiMysql, SiTensorflow, SiScikitlearn, SiExpress, SiFlask } from 'react-icons/si';
// Add more imports from other react-icons sub-libraries (e.g., fi, md, io) if needed for other icons.


export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: ["C", "C++", "Java", "JavaScript", "Python"]
    },
    {
      title: "Web Technologies & Frameworks",
      items: [
        "React.js", "Next.js", "Node.js", "Express.js",
        "Socket.io", "MongoDB", "MySQL", "GitHub", "Flask"
      ]
    },
    {
      title: "Machine Learning & Data Science",
      items: [
        "Machine Learning",
        "TensorFlow", "BERT", "Scikit-learn", "SVD",
        "Numpy", "Pandas"
      ]
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "Linux", "Windows"]
    },
    {
      title: "Core Computer Science Coursework",
      items: [
        "Object-Oriented Programming", "Data Structures and Algorithms",
        "Operating Systems", "Database Management Systems", "Computer Networks"
      ]
    }
  ];

  // Helper function to get an icon component based on the skill name.
  // YOU MUST EXPAND THIS SWITCH STATEMENT to include all the skills
  // for which you want to display an icon.
  const getSkillIcon = (skillName) => {
    switch (skillName) {
      case 'React.js': return <FaReact />;
      case 'Node.js': return <FaNodeJs />;
      case 'Python': return <FaPython />;
      case 'Git': return <FaGitAlt />;
      case 'Linux': return <FaLinux />;
      case 'Java': return <FaJava />;
      case 'MongoDB': return <SiMongodb />;
      case 'MySQL': return <SiMysql />;
      case 'TensorFlow': return <SiTensorflow />;
      case 'Scikit-learn': return <SiScikitlearn />;
      case 'Next.js': return <SiNextdotjs />;
      case 'Express.js': return <SiExpress />;
      case 'Flask': return <SiFlask />;
      // Add more cases here for other skills as you add their icon imports.
      default: return null; // Returns nothing if no specific icon is defined for the skill
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="project-card">
              <h3 className="text-xl mb-4" style={{ color: 'var(--accent-primary)' }}>{category.title}</h3>
              <div className="flex flex-wrap gap-x-2 gap-y-3"> {/* Adjusted gap-x for tighter horizontal spacing when using commas */}
                {category.items.map((skill, idx) => (
                  <React.Fragment key={idx}> {/* Use React.Fragment to group the span and the comma */}
                    <span
                      className="px-4 py-2 rounded-md text-sm flex items-center"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {/* Render the icon if available, followed by a small margin */}
                      {getSkillIcon(skill) && <span className="mr-2">{getSkillIcon(skill)}</span>}

                      {/* Your existing dot. Consider removing this if you're happy with the icons only */}
                      {!getSkillIcon(skill) && <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: 'var(--accent-primary)' }}></span>}

                      {skill}
                    </span>
                    {/* Conditionally render a comma and a space after each item except the last one */}
                    {idx < category.items.length - 1 && (
                      <span style={{ color: 'var(--text-primary)' }}>,</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}