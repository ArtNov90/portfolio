"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("art.novara@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-[#4CAF50] text-sm mb-2 tracking-widest">// 05. contact</p>
        <h2 className="text-3xl font-bold text-white mb-4 section-line inline-block">Me contacter</h2>
        <p className="text-gray-400 mt-6 mb-12 text-base leading-relaxed">
          Ouvert aux opportunités en <span className="text-[#0070D2] font-semibold">Salesforce</span> et <span className="text-[#4CAF50] font-semibold">Fullstack Java/React</span>.
          N'hésite pas à me contacter pour discuter d'un projet ou d'un poste.
        </p>

        {/* Contact card */}
        <div className="bg-[#161b22] rounded-2xl border border-[#30363d] p-8 glow-blue">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* Email */}
            <button
              onClick={copy}
              className="flex items-center gap-3 p-4 bg-[#0d1117] rounded-xl border border-[#30363d] hover:border-[#0070D2]/50 transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0070D2]/10 flex items-center justify-center text-[#0070D2] shrink-0">
                ✉
              </div>
              <div>
                <p className="text-gray-500 text-xs font-mono">email</p>
                <p className="text-white text-sm font-mono group-hover:text-[#0070D2] transition-colors">
                  {copied ? "✓ Copié !" : "art.novara@gmail.com"}
                </p>
              </div>
            </button>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-[#0d1117] rounded-xl border border-[#30363d]">
              <div className="w-10 h-10 rounded-lg bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] shrink-0">
                📍
              </div>
              <div>
                <p className="text-gray-500 text-xs font-mono">location</p>
                <p className="text-white text-sm font-mono">Montpellier, 34000</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/ArtNov90"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0d1117] rounded-lg border border-[#30363d] hover:border-[#0070D2]/50 hover:text-white text-gray-400 transition-all font-mono text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              github.com/ArtNov90
            </a>
            <a
              href="mailto:art.novara@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0070D2] hover:bg-[#005BB5] rounded-lg text-white font-semibold text-sm transition-all glow-blue"
            >
              Envoyer un message →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
