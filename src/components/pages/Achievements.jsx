import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: "Competitive Programming",
      items: [
        "Achieved Specialist status on Codeforces (1431 rating)",
        "3 Star on CodeChef",
        "Secured global rank 68 & 169 in Weekly Coding Contest- 175 & 164 on CodeChef among 25000+ Participants",
        "Solved 850+ problems across platforms: Codeforces, CodeChef, GFG and LeetCode"
      ]
    },
    {
      title: "Hackathons",
      items: [
        "Semifinalist in Flipkart GRiD 6.0 - Ranked among the top 0.07% teams out of 484k+",
        "Won Blockchain Track at Hack-O-Fiesta V4.0, IIIT Lucknow, outshining over 100+ teams"
      ]
    },
    {
      title: "Leadership",
      items: [
        "Coordinator, E-Summit, IIIT Lucknow (April 2024 - Present)",
        "Senior Member, Google Developer Groups (GDG) IIIT Lucknow (April 2024 - Present)"
      ]
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="mt-10 space-y-12">
          {achievements.map((category, index) => (
            <div key={index} className="border-l-4 pl-6 py-1" style={{ borderColor: 'var(--accent-primary)' }}>
              <h3 className="text-xl mb-4" style={{ color: 'var(--accent-primary)' }}>{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1" style={{ color: 'var(--accent-secondary)' }}>→</span>
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