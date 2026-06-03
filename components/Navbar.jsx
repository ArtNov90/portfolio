"use client";
import { useState, useEffect } from "react";

const links = ["Compétences", "Projets", "Expérience", "Contact"];
const ids   = ["competences", "projets", "experience", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/95 backdrop-blur border-b border-[#30363d]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span className="font-mono text-sm">
          <span className="text-[#0070D2]">arthur</span>
          <span className="text-gray-500">.</span>
          <span className="text-[#4CAF50]">dev</span>
          <span className="text-[#0070D2] cursor animate-pulse">_</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(ids[i])}
              className="text-sm text-gray-400 hover:text-white transition-colors font-mono"
            >
              <span className="text-[#0070D2]">./</span>{label}
            </button>
          ))}
          <a
            href="https://github.com/ArtNov90"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded border border-[#0070D2] text-[#0070D2] text-sm font-mono hover:bg-[#0070D2] hover:text-white transition-all"
          >
            GitHub
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#161b22] border-b border-[#30363d] px-6 pb-4">
          {links.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollTo(ids[i])}
              className="block w-full text-left py-3 text-gray-400 hover:text-white font-mono text-sm border-b border-[#30363d] last:border-0"
            >
              <span className="text-[#0070D2]">./</span>{label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
