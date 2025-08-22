import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/400x250.png?text=Portfolio+Project",
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      title: "E-Commerce Store",
      description: "Mini online store with cart and checkout simulation.",
      image: "https://via.placeholder.com/400x250.png?text=E-Commerce+Project",
      github: "https://github.com/yourusername/ecommerce",
      demo: "#",
    },
    {
      title: "Blog Platform",
      description: "Blog system with user authentication and CRUD posts.",
      image: "https://via.placeholder.com/400x250.png?text=Blog+Project",
      github: "https://github.com/yourusername/blog",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-10"
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
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
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
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
