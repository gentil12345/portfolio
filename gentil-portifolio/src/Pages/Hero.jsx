import { useEffect, useState } from "react";
import profile from "../assets/gentil.jpg";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const socials = [
    { label: "GitHub", href: "#", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
    { label: "LinkedIn", href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { label: "Twitter", href: "#", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a14]"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Side */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-indigo-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </div>

          <p className="text-indigo-400 font-medium mb-2 tracking-widest text-sm uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-white">Gakiza </span>
            <span className="shimmer-text">Gentil</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 mb-6 h-10">
            <span className="text-xl sm:text-2xl font-semibold text-gray-300">
              {displayed}
            </span>
            <span className="w-0.5 h-7 bg-indigo-400 animate-pulse rounded-full" />
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Full Stack Developer specialized in{" "}
            <span className="text-indigo-400 font-medium">React</span>,{" "}
            <span className="text-purple-400 font-medium">Node.js</span>,{" "}
            <span className="text-pink-400 font-medium">PHP</span> &{" "}
            <span className="text-cyan-400 font-medium">MySQL</span>. I build
            modern, scalable, and beautiful web applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full glass text-white font-semibold hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        >
          <div className="relative animate-float">
            {/* Spinning ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-500/30 animate-spin-slow" />
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-purple-600/40 rounded-2xl blur-2xl" />
            {/* Image */}
            <div className="relative animate-pulse-glow rounded-2xl overflow-hidden">
              <img
                src={profile}
                alt="Gakiza Gentil"
                className="relative w-64 h-72 sm:w-80 sm:h-96 object-cover rounded-2xl"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent rounded-2xl" />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-semibold text-indigo-300 animate-bounce-in shadow-lg">
              💻 Full Stack
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-xs font-semibold text-purple-300 shadow-lg">
              🚀 7+ Projects
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <span>Scroll down</span>
        <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
