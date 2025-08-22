import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function Hero() {
  // particles init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen text-center px-6 text-slate-100 overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" }, // deep navy slate
          particles: {
            number: { value: 80 },
            color: { value: "#38bdf8" }, // sky blue particles
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 2 },
            links: { enable: true, distance: 150, color: "#e879f9", opacity: 0.4 }, // pink links
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* Profile Image */}
      {/* Profile Image with glowing border */}
{/* Profile Image with glowing gradient ring */}
<motion.div
  className="relative w-44 h-44 rounded-full"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
>
  {/* Rotating Gradient Ring */}
  <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow"></div>

  {/* Static Photo */}
  <img
    src="/images/Image_Raksha.jpg"
    alt="Raksha"
    className="relative w-full h-full rounded-full object-cover border-4 border-gray-900 shadow-xl"
  />
</motion.div>



      {/* Intro Text */}
      <motion.h1
        className="text-5xl font-extrabold mb-4 leading-snug relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent">
          Raksha T U
        </span>{" "}
        👋
      </motion.h1>

      {/* Typing Effect */}
      <ReactTyped
        strings={[
          "💻 Full Stack Developer",
          "🤖 AI & Cloud Enthusiast",
          "🚀 Passionate Problem Solver",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="text-xl text-slate-300 mb-6 relative z-10"
      />

      {/* Short Description */}
      <p className="text-lg text-slate-400 max-w-3xl relative z-10">
        Final-year{" "}
        <span className="text-pink-400">Computer Science Engineer</span> |  
        Skilled in{" "}
        <span className="font-medium text-sky-400">
          C, Java, Python, JavaScript, React, SQL
        </span>{" "}
        | Dedicated to building{" "}
        <span className="text-yellow-400">
          scalable and impactful digital solutions
        </span>.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-8 relative z-10">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-pink-400 to-sky-400 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          🚀 View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-sky-400 to-yellow-400 text-slate-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          📩 Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
