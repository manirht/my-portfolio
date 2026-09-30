import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Tekion Corp",
      role: "Associate Software Engineer — Lead Service Team",
      period: "July 2026 - Present",
      achievements: [
        "Work on arc-crm-leadservice, a Java/Spring Boot microservice powering the full lead lifecycle (sales, service, and parts) for Tekion's ARC CRM, backed by MongoDB, Elasticsearch, Redis, and Kafka (40+ consumers, 10+ producers).",
        "Contributing to the leadservice-rewrite initiative, redesigning lead lifecycle logic around stable identity, provenance, and queryable process state so AI agents can safely act on leads, while closing production gaps like un-audited assignment overwrites and silently dropped compliance events.",
        "Designed and rolled out a per-dealer rate limiter (Bucket4j + Redis-synced token buckets) for a high-traffic CRM endpoint, with a fail-open safety design and an allow-list-scoped pilot rollout to de-risk launch.",
        "Built CRM dashboard and reporting features: Elasticsearch-backed lead filtering, async CSV export pipelines, and sales pipeline-bucket classification.",
        "Integrated OEM lead sources (GM, Hyundai, BMW, and others) and Digital Retail leadstore/concierge services via Feign-based service clients."
      ]
    },
    {
      company: "Tekion Corp",
      role: "Software Engineering Intern — F&I Team",
      period: "January 2026 - June 2026",
      achievements: [
        "Built service-oriented REST APIs across F&I microservices using Java and Spring Boot, and led a lift-and-shift migration extracting deal-sheet processing (DSP) logic out of the Deal Service for reliability improvements.",
        "Investigated and authored root-cause analyses for recurring production incidents in document signing and completion-certificate generation, including race conditions and deal-jacket UI rendering bugs affecting dealer/buyer signatures.",
        "Investigated race conditions in asynchronous AWS S3 upload and retry pipelines.",
        "Developed LLM-agent (T1) integrations for document and e-signature status intents, with structured input/output schemas, and exposed backend capabilities as MCP tools.",
        "Fixed automation-blocking data-test-id issues and verified CI/CD pipelines across services to keep acceptance test suites reliable."
      ]
    },
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