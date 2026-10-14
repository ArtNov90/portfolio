"use client";

const QA = [
  { name: "Tests fonctionnels (recette)", level: 88 },
  { name: "Rédaction cas de test", level: 85 },
  { name: "Tests API REST (Postman)", level: 85 },
  { name: "Rapports de bugs / anomalies", level: 82 },
  { name: "Tests de régression", level: 80 },
  { name: "Tests Salesforce (Apex tests)", level: 80 },
  { name: "CI/CD · GitLab Pipelines", level: 75 },
];

const TECH = [
  { name: "Java / Spring Boot", level: 85 },
  { name: "React / Next.js", level: 82 },
  { name: "MySQL · SQL Server", level: 80 },
  { name: "API REST", level: 85 },
  { name: "Salesforce (Apex, LWC, Flow)", level: 88 },
  { name: "JavaScript (ES6+)", level: 82 },
  { name: "HTML5 / CSS3", level: 80 },
];

const TOOLS = ["Postman", "Git / GitLab", "Jira / Trello", "VS Code", "IntelliJ IDEA", "Agile / Scrum", "GitHub Actions", "Salesforce CLI"];

function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm text-gray-300">{name}</span>
        <span className="font-mono text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#30363d] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: color === "blue"
              ? "linear-gradient(90deg, #0070D2, #0099FF)"
              : "linear-gradient(90deg, #2E7D32, #4CAF50)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center">
          <p className="font-mono text-[#4CAF50] text-sm mb-2 tracking-widest">// 02. skills</p>
          <h2 className="text-3xl font-bold text-white section-line inline-block">Compétences</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* QA */}
          <div className="bg-[#0d1117] rounded-xl border border-[#30363d] p-6 card-hover hover:border-[#0070D2]/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#0070D2]/20 flex items-center justify-center">
                <span className="text-[#0070D2] text-sm font-bold">QA</span>
              </div>
              <h3 className="text-white font-semibold text-lg">Qualité & Tests</h3>
            </div>
            {QA.map((s) => (
              <SkillBar key={s.name} {...s} color="blue" />
            ))}
          </div>

          {/* Tech */}
          <div className="bg-[#0d1117] rounded-xl border border-[#30363d] p-6 card-hover hover:border-[#4CAF50]/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/20 flex items-center justify-center">
                <span className="text-[#4CAF50] text-sm font-bold">DEV</span>
              </div>
              <h3 className="text-white font-semibold text-lg">Stack technique</h3>
            </div>
            {TECH.map((s) => (
              <SkillBar key={s.name} {...s} color="green" />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-[#0d1117] rounded-xl border border-[#30363d] p-6">
          <h3 className="text-gray-400 font-mono text-sm mb-4">
            <span className="text-[#0070D2]">const</span> tools = [
          </h3>
          <div className="flex flex-wrap gap-2 pl-4">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d] font-mono text-xs text-gray-300 hover:border-[#0070D2]/50 hover:text-white transition-all cursor-default"
              >
                "{tool}"
              </span>
            ))}
          </div>
          <p className="text-gray-400 font-mono text-sm mt-3">]</p>
        </div>
      </div>
    </section>
  );
}
