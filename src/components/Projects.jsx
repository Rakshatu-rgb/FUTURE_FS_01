import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React, Tailwind CSS, and animations using Framer Motion.",
      image: "/images/projects/portfolio.png", // 🔹 replace with your actual image
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack store with cart, authentication, and checkout simulation.",
      image: "/images/projects/ecommerce.png",
      github: "https://github.com/yourusername/ecommerce",
      demo: "#",
    },
    {
      title: "Blog Platform",
      description: "Blog system with user authentication and CRUD posts.",
      image: "/images/projects/blog.png",
      github: "https://github.com/yourusername/blog",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-center text-slate-100">
      <motion.h2
        className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-sky-300">
                {project.title}
              </h3>
              <p className="text-slate-300 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-start gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
