import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: "Competitive Programming Mastery", 
      items: [
        "Secured Specialist status on Codeforces with a 1431 rating, a testament to consistent problem-solving prowess.",
        "Achieved 3-Star on CodeChef, demonstrating strong command over data structures and algorithms.",
        "Ranked globally 68th and 169th in CodeChef's Weekly Coding Contests (175 & 164) among a massive pool of 25,000+ participants, showcasing top-tier algorithmic skills under pressure.",
        "Conquered over 850 challenging problems across elite platforms including Codeforces, CodeChef, GeeksforGeeks, and LeetCode, continuously sharpening my coding toolkit."
      ]
    },
    {
      title: "Hackathon Triumphs", 
      items: [
        "Rose to Semifinalist in Flipkart GRiD 6.0, placing among the top 0.07% of over 484,000+ participants – a testament to rapid prototyping and innovative solution development.",
        "Secured the coveted Blockchain Track victory at Hack-O-Fiesta V4.0 at IIIT Lucknow, successfully outshining 100+ competing teams with a robust and creative blockchain solution."
      ]
    },
    {
      title: "Leadership & Community Impact", 
      items: [
        "Driving innovation as Coordinator for E-Summit, IIIT Lucknow (April 2024 - Present), fostering entrepreneurial spirit and organizing high-impact events.",
        "Shaping the tech community as a Senior Member of Google Developer Groups (GDG) IIIT Lucknow (April 2024 - Present), actively contributing to initiatives that empower student developers."
      ]
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-primary)' }}>
          Beyond the code, these milestones reflect my relentless pursuit of excellence, collaborative spirit, and a drive to make a tangible impact in both competitive and community-driven spheres.
        </p>

        <div className="mt-10 space-y-12">
          {achievements.map((category, index) => (
            <div key={index} className="border-l-4 pl-6 py-1" style={{ borderColor: 'var(--accent-primary)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--accent-primary)' }}>{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}