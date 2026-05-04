import Navbar from "./Pages/Nav";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Project";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="bg-[#0a0a14] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-[#0a0a14] border-t border-gray-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
              GG
            </div>
            <span className="text-gray-400 text-sm">Gakiza Gentil</span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Gakiza Gentil. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-4">
            {["About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
