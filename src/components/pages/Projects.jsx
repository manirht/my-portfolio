import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "DistriKV",
      date: "2026",
      description: "A distributed, crash-safe key-value store built from scratch",
      technologies: ["Java,", " gRPC,", " Raft (hand-written),", " Gradle"],
      achievements: [
        "Built a distributed KV store bottom-up: append-only local storage engine, gRPC layer, and a hand-written Raft consensus protocol — no Raft library, no embedded storage engine",
        "Added compaction, TTL, and chaos testing; 100,000 acknowledged writes survived a SIGKILL crash test with byte-for-byte recovery",
        "Benchmarked ~460,000 writes/sec under relaxed durability, with a 1GB / 1M-key store reopening in 420ms from a warm cache"
      ]
    },
    {
      title: "IC Engine RAG System",
      date: "2026",
      description: "High-accuracy RAG system for answering questions over technical PDFs",
      technologies: ["Python,", " FAISS,", " sentence-transformers,", " Groq (Llama 3.3 70B)"],
      achievements: [
        "Built a retrieval-augmented generation pipeline over Internal Combustion Engine documentation using semantic chunking, local embeddings, and a FAISS vector store",
        "Added a cross-encoder reranking stage to improve retrieval accuracy before passing context to the LLM",
        "Implemented an automated LLM-as-judge evaluation loop to score generated answers against ground truth with reasoning"
      ]
    },
    {
      title: "RBAC Policy Engine",
      date: "2025",
      description: "AI-powered RBAC policy engine with a natural-language interface",
      technologies: ["Python,", " FastAPI,", " Streamlit,", " Claude API"],
      achievements: [
        "Built a conversational interface for defining role-based access control policies in plain English, with real-time policy preview as it's built",
        "Implemented multi-layer validation against available roles/resources/permissions and contextual conditions (environment, time, MFA status)",
        "Added clarifying-question handling for ambiguous instructions and a policy evaluation/testing mode against simulated access requests, backed by 63 passing tests"
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