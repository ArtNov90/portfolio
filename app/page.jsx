"use client";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="text-center py-6 text-gray-600 text-sm font-mono border-t border-[#30363d]">
        <span className="text-[#0070D2]">arthur.novara</span>
        <span className="text-gray-500"> @ </span>
        <span className="text-[#4CAF50]">dev</span>
        <span className="text-gray-500"> ~ $ </span>
        <span className="text-gray-400">2025</span>
      </footer>
    </main>
  );
}
