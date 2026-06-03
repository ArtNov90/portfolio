"use client";

const EXPERIENCES = [
  {
    title: "Développeur Salesforce",
    company: "CGI · ESN",
    period: "Mars 2024 – Oct. 2025",
    type: "CDI",
    bullets: [
      "Développement et maintenance d'applications CRM sous Salesforce (Apex, Flow, LWC)",
      "Implémentation de règles métiers complexes sur objets standard et personnalisés",
      "Déploiements multi-environnements via GitLab CI/CD (sandbox → staging → prod)",
      "Collaboration en équipe Agile Scrum, revues de code, documentation technique",
    ],
    color: "blue",
  },
  {
    title: "Développeur Web Fullstack",
    company: "Inde Educ'Action",
    period: "Oct. 2023 – Mars 2024",
    type: "Stage/Alternance",
    bullets: [
      "Développement d'interfaces web front & back avec le framework Symfony/PHP",
      "Gestion et structuration de bases de données relationnelles",
      "Maintenance corrective et évolutive de l'application",
    ],
    color: "green",
  },
];

const FORMATIONS = [
  {
    title: "Concepteur Développeur d'Applications (RNCP 6)",
    school: "Diginamic · Montpellier",
    period: "2024 – 2025",
  },
  {
    title: "Développeur Web et Web Mobile (RNCP 5)",
    school: "ENI École Informatique · Montpellier",
    period: "2023 – 2024",
  },
  {
    title: "Bachelor Management",
    school: "ESCA Sup · Montpellier",
    period: "2009 – 2012",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center">
          <p className="font-mono text-[#4CAF50] text-sm mb-2 tracking-widest">// 04. experience</p>
          <h2 className="text-3xl font-bold text-white section-line inline-block">Expérience & Formation</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiences */}
          <div>
            <h3 className="text-gray-400 font-mono text-sm mb-6">
              <span className="text-[#0070D2]">const</span> experience = [
            </h3>
            <div className="space-y-6 border-l-2 border-[#30363d] pl-6">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 ${
                    exp.color === "blue"
                      ? "border-[#0070D2] bg-[#0070D2]/20"
                      : "border-[#4CAF50] bg-[#4CAF50]/20"
                  }`} />

                  <div className={`bg-[#0d1117] rounded-xl border border-[#30363d] p-5 card-hover ${
                    exp.color === "blue" ? "hover:border-[#0070D2]/50" : "hover:border-[#4CAF50]/50"
                  }`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-white font-semibold">{exp.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded font-mono shrink-0 ${
                        exp.color === "blue"
                          ? "text-[#0070D2] bg-[#0070D2]/10"
                          : "text-[#4CAF50] bg-[#4CAF50]/10"
                      }`}>{exp.type}</span>
                    </div>
                    <p className={`font-mono text-sm mb-1 ${exp.color === "blue" ? "text-[#0070D2]" : "text-[#4CAF50]"}`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-600 text-xs font-mono mb-3">{exp.period}</p>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-gray-400 text-sm flex gap-2">
                          <span className={exp.color === "blue" ? "text-[#0070D2]" : "text-[#4CAF50]"}>›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-gray-400 font-mono text-sm mb-6">
              <span className="text-[#0070D2]">const</span> formation = [
            </h3>
            <div className="space-y-4">
              {FORMATIONS.map((f, i) => (
                <div key={i} className="bg-[#0d1117] rounded-xl border border-[#30363d] p-5 card-hover hover:border-[#0070D2]/30">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-1">{f.title}</h4>
                      <p className="text-[#0070D2] font-mono text-xs">{f.school}</p>
                    </div>
                    <span className="text-gray-600 font-mono text-xs shrink-0">{f.period}</span>
                  </div>
                </div>
              ))}

              {/* Engagements */}
              <div className="mt-8">
                <h3 className="text-gray-400 font-mono text-sm mb-4">
                  <span className="text-[#4CAF50]">const</span> engagements = [
                </h3>
                <div className="space-y-3">
                  <div className="bg-[#0d1117] rounded-xl border border-[#30363d] p-4 card-hover hover:border-[#4CAF50]/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white text-sm font-semibold">Séjour pro. États-Unis</p>
                        <p className="text-gray-500 text-xs mt-0.5">Cuisine, service & animation en environnement anglophone</p>
                      </div>
                      <span className="text-gray-600 font-mono text-xs">Mai – Oct. 2012</span>
                    </div>
                  </div>
                  <div className="bg-[#0d1117] rounded-xl border border-[#30363d] p-4 card-hover hover:border-[#4CAF50]/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white text-sm font-semibold">Bénévolat SINGA</p>
                        <p className="text-gray-500 text-xs mt-0.5">Communication & organisation d'événements pour l'intégration des réfugiés</p>
                      </div>
                      <span className="text-gray-600 font-mono text-xs">2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
