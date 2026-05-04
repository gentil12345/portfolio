import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React.js",      level: 90, color: "from-cyan-500 to-blue-500" },
  { name: "JavaScript",    level: 88, color: "from-yellow-400 to-orange-500" },
  { name: "Node.js",       level: 82, color: "from-green-500 to-emerald-600" },
  { name: "PHP",           level: 78, color: "from-indigo-500 to-purple-600" },
  { name: "MySQL",         level: 80, color: "from-blue-500 to-cyan-600" },
  { name: "Tailwind CSS",  level: 92, color: "from-teal-400 to-cyan-500" },
  { name: "HTML / CSS",    level: 95, color: "from-orange-500 to-red-500" },
  { name: "Git & GitHub",  level: 75, color: "from-gray-400 to-gray-600" },
];

const stats = [
  { value: "7+",  label: "Projects Built" },
  { value: "2+",  label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-bold text-indigo-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimate(true), 300);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 bg-[#0d0d1a] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            About{" "}
            <span className="shimmer-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio + Stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm">👨‍💻</span>
                Who I Am
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm <span className="text-indigo-400 font-semibold">Gakiza Gentil</span>, a passionate
                Full Stack Developer focused on building clean, user-friendly, and
                high-performance web applications. I enjoy turning complex ideas into
                elegant digital solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With expertise spanning both frontend and backend technologies, I craft
                seamless experiences from pixel-perfect UIs to robust server-side
                architectures. I'm always learning and pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`glass rounded-xl p-5 text-center card-hover transition-all duration-700`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <div className="text-3xl font-extrabold shimmer-text mb-1">{value}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-sm">⚡</span>
                Technical Skills
              </h3>
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
