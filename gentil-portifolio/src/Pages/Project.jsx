import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive platform to manage student records, grades, attendance, and academic performance with role-based access.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    icon: "🎓",
    gradient: "from-blue-600/20 to-cyan-600/20",
    border: "hover:border-blue-500/50",
    glow: "hover:shadow-blue-500/20",
  },
  {
    title: "Stock Management System",
    description: "Real-time inventory tracking system with automated alerts, purchase orders, and detailed analytics dashboard.",
    tags: ["React", "Node.js", "MySQL"],
    icon: "📦",
    gradient: "from-purple-600/20 to-pink-600/20",
    border: "hover:border-purple-500/50",
    glow: "hover:shadow-purple-500/20",
  },
  {
    title: "Online Quiz System",
    description: "Interactive quiz platform with timed assessments, instant scoring, leaderboards, and detailed result analytics.",
    tags: ["React", "PHP", "MySQL"],
    icon: "📝",
    gradient: "from-green-600/20 to-emerald-600/20",
    border: "hover:border-green-500/50",
    glow: "hover:shadow-green-500/20",
  },
  {
    title: "Food Delivery System",
    description: "Full-featured food ordering app with real-time order tracking, restaurant management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "🍔",
    gradient: "from-orange-600/20 to-red-600/20",
    border: "hover:border-orange-500/50",
    glow: "hover:shadow-orange-500/20",
  },
  {
    title: "Library Management System",
    description: "Digital library solution with book cataloging, member management, borrowing history, and fine calculation.",
    tags: ["PHP", "MySQL", "Tailwind"],
    icon: "📚",
    gradient: "from-indigo-600/20 to-violet-600/20",
    border: "hover:border-indigo-500/50",
    glow: "hover:shadow-indigo-500/20",
  },
  {
    title: "E-Books System",
    description: "Online reading platform with PDF viewer, bookmarks, reading progress tracking, and category-based browsing.",
    tags: ["React", "Node.js", "MySQL"],
    icon: "📖",
    gradient: "from-teal-600/20 to-cyan-600/20",
    border: "hover:border-teal-500/50",
    glow: "hover:shadow-teal-500/20",
  },
  {
    title: "Employee Management System",
    description: "HR management tool for tracking employee data, payroll, leave requests, performance reviews, and reporting.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    icon: "👥",
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "hover:border-pink-500/50",
    glow: "hover:shadow-pink-500/20",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-28 bg-[#0a0a14] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Featured{" "}
            <span className="shimmer-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of projects I've built — each one solving real-world problems with clean code and thoughtful design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`relative group glass rounded-2xl p-6 border border-gray-800/50 ${project.border} card-hover transition-all duration-700 hover:shadow-xl ${project.glow}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                {/* Icon */}
                <div className="text-4xl mb-4">{project.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
