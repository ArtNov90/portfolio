"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "Développeur Salesforce",
  "Développeur Fullstack Java/React",
  "Apex · LWC · Flow Builder",
  "Spring Boot · React · MySQL",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    if (!deleting && displayed.length < full.length) {
      const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === full.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0070D2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        {/* Terminal prompt */}
        <div className="font-mono text-sm text-gray-500 mb-6 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-4 text-[#4CAF50]">arthur@portfolio</span>
          <span className="text-gray-600">:</span>
          <span className="text-[#0070D2]">~/dev</span>
          <span className="text-gray-400">$</span>
          <span className="text-gray-300">whoami</span>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-[#4CAF50] text-sm mb-3 tracking-widest uppercase">
              // Bonjour, je suis
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Arthur<br />
              <span className="gradient-text">Novara</span>
            </h1>
            <div className="h-8 mb-6">
              <p className="font-mono text-[#0070D2] text-lg">
                {displayed}
                <span className="cursor text-[#4CAF50]">|</span>
              </p>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              Développeur basé à <span className="text-white">Montpellier</span>, spécialisé Salesforce et Fullstack Java/React.
              Passionné par la création de solutions robustes et bien architecturées.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-[#0070D2] hover:bg-[#005BB5] text-white font-semibold rounded-lg transition-all glow-blue"
              >
                Voir mes projets →
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-[#30363d] hover:border-[#4CAF50] text-gray-300 hover:text-white rounded-lg transition-all font-mono text-sm"
              >
                Me contacter
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Salesforce", "Java", "React", "Spring Boot", "MySQL", "CI/CD"].map((t) => (
                <span key={t} className="skill-badge px-3 py-1 rounded-full text-xs font-mono text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal card */}
          <div className="hidden md:block">
            <div className="bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden glow-blue">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#21262d] border-b border-[#30363d]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-xs text-gray-500">arthur.json</span>
              </div>
              <pre className="p-6 font-mono text-sm leading-relaxed text-left overflow-auto">
{`{
  `}<span className="text-[#0070D2]">"name"</span>{`: `}<span className="text-[#4CAF50]">"Arthur Novara"</span>{`,
  `}<span className="text-[#0070D2]">"location"</span>{`: `}<span className="text-[#4CAF50]">"Montpellier, FR"</span>{`,
  `}<span className="text-[#0070D2]">"specialties"</span>{`: [
    `}<span className="text-[#4CAF50]">"Salesforce"</span>{`,
    `}<span className="text-[#4CAF50]">"Java / Spring Boot"</span>{`,
    `}<span className="text-[#4CAF50]">"React / Next.js"</span>
{`  ],`}
  <span className="text-[#0070D2]">"experience"</span>{`: `}<span className="text-orange-400">2</span>{` years,
  `}<span className="text-[#0070D2]">"certifications"</span>{`: [
    `}<span className="text-[#4CAF50]">"RNCP 6"</span>{`, `}<span className="text-[#4CAF50]">"RNCP 5"</span>
{`  ],`}
  <span className="text-[#0070D2]">"available"</span>{`: `}<span className="text-green-400">true</span>
{`}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 text-gray-600 animate-bounce">
            <span className="font-mono text-xs">scroll</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
