import { Home, FolderKanban, FileText, Mail } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-sky-900 via-slate-900 to-teal-900 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 text-white">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold flex items-center gap-2 bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent"
        >
          My Portfolio - Raksha T U
        </a>

        {/* Links */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <a
              href="#about"
              className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300"
            >
              <Home size={18} /> About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors duration-300"
            >
              <FolderKanban size={18} /> Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-300"
            >
              <FileText size={18} /> Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail size={18} /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
