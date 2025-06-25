import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Indian Institute of Information Technology, Lucknow (IIIT Lucknow)",
      role: "Undergraduate Research Intern",
      period: "January 2025 - June 2025",
      achievements: [
        "Co-authored and developed a novel 3D localization framework for Wireless Sensor Networks (WSNs) under dynamic, noisy, and humid environmental conditions, addressing critical challenges in accurate 3D localization.",
        "Pioneered a sophisticated multi-stage denoising pipeline, integrating sequential median and 1-D Kalman filtering, followed by humidity-augmented Singular Value Decomposition (SVD) to robustly process RSSI signals and enhance signal quality.",
        "Implemented a hybrid two-stage localization process, leveraging multi-hop Weighted Least Squares (WLS) for initial estimates, significantly refined by an adapted Marine Predator Algorithm (MPA) to minimize weighted range-error in 3D space.",
        "Conducted extensive simulations and benchmarked the framework against established baselines (DML, iterative trilateration, and contemporary schemes), consistently demonstrating MPA's superiority by achieving a significant reduction in mean localization error and maintaining sub-10 meter average error in dense 3D deployments."
      ]
    },
    {
      company: "Zidio (Remote)",
      role: "Software Development Intern",
      period: "December 2023 - March 2024",
      achievements: [
        "Co-engineered and deployed 10+ responsive web projects, collaborating closely with designers to ensure seamless UI/UX integration and pixel-perfect front-end implementation.",
        "Architected and maintained 3+ full-stack web applications from concept to deployment, demonstrating proficiency in both independent development and collaborative team environments."
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