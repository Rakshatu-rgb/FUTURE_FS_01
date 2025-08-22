function About() {
  return (
    <section id="about" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        I'm <span className="text-blue-600 font-semibold">Raksha</span>, a passionate 
        <span className="font-semibold"> Full Stack Developer</span> with a love for building 
        clean, scalable, and user-friendly digital solutions. With experience in both frontend and backend technologies, 
        I enjoy solving complex problems and creating impactful projects that blend design with functionality.
      </p>

      {/* Skills Pills */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">React</span>
        <span className="px-4 py-2 bg-green-100 text-green-600 font-medium rounded-full">Node.js</span>
        <span className="px-4 py-2 bg-yellow-100 text-yellow-600 font-medium rounded-full">JavaScript</span>
        <span className="px-4 py-2 bg-purple-100 text-purple-600 font-medium rounded-full">MongoDB</span>
        <span className="px-4 py-2 bg-pink-100 text-pink-600 font-medium rounded-full">TailwindCSS</span>
      </div>
    </section>
  );
}

export default About;
