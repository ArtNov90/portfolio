"use client";

const PROJECTS = [
  {
    id: "qualitair",
    title: "Qualit'Air",
    subtitle: "Application Web Environnementale",
    description:
      "Application fullstack complète permettant de visualiser la qualité de l'air, la météo et des données de population. API REST Spring Boot, interface React/Next.js, authentification JWT, base de données MySQL.",
    tags: ["Spring Boot", "React", "MySQL", "JWT", "REST API", "JPA/Hibernate"],
    color: "blue",
    github: "https://github.com/ArtNov90",
    icon: "🌍",
    status: "Projet de formation",
  },
  {
    id: "site-maman",
    title: "Site vitrine",
    subtitle: "Projet personnel · Site de ma mère",
    description:
      "Création d'un site vitrine complet de A à Z. Design personnalisé, responsive, optimisé pour le référencement. Une belle occasion de mettre en pratique mes compétences front-end dans un contexte réel.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive", "SEO"],
    color: "green",
    github: null,
    icon: "🌐",
    status: "En ligne",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center">
          <p className="font-mono text-[#4CAF50] text-sm mb-2 tracking-widest">// 03. projects</p>
          <h2 className="text-3xl font-bold text-white section-line inline-block">Projets</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className={`bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden card-hover ${
                p.color === "blue" ? "hover:border-[#0070D2]/60" : "hover:border-[#4CAF50]/60"
              }`}
            >
              {/* Header */}
              <div
                className={`px-6 py-4 border-b border-[#30363d] flex items-center justify-between ${
                  p.color === "blue"
                    ? "bg-gradient-to-r from-[#0070D2]/10 to-transparent"
                    : "bg-gradient-to-r from-[#2E7D32]/10 to-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{p.title}</h3>
                    <p className={`text-sm font-mono ${p.color === "blue" ? "text-[#0070D2]" : "text-[#4CAF50]"}`}>
                      {p.subtitle}
                    </p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-mono border ${
                  p.status === "En ligne"
                    ? "text-[#4CAF50] border-[#4CAF50]/30 bg-[#4CAF50]/10"
                    : "text-gray-500 border-gray-700 bg-gray-800/30"
                }`}>
                  {p.status}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`skill-badge ${p.color === "green" ? "green" : ""} px-2.5 py-1 rounded-md text-xs font-mono text-gray-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-mono border border-[#30363d] hover:border-[#0070D2]/50 px-4 py-2 rounded-lg"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {p.status === "En ligne" && (
                    <span className="flex items-center gap-2 text-sm text-[#4CAF50] font-mono px-4 py-2 rounded-lg border border-[#4CAF50]/20 bg-[#4CAF50]/5">
                      <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
