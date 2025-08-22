function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400">Raksha 🚀</h1>

      {/* Links */}
      <ul className="flex space-x-6 text-gray-200 font-medium">
        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#resume" className="hover:text-blue-400 transition">Resume</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
