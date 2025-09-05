import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen text-center px-6 text-slate-100 overflow-hidden font-poppins"
      style={{
        backgroundImage: "url('/images/img3.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Profile Image with glowing gradient ring */}
      <motion.div
        className="relative z-10 w-44 h-44 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Rotating Gradient Ring */}
        <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 animate-spin-slow"></div>

        {/* Static Photo */}
        <img
          src="/images/Image_Raksha.jpg"
          alt="Raksha"
          className="relative w-full h-full rounded-full object-cover border-4 border-gray-900 shadow-xl"
        />
      </motion.div>

      {/* Intro Text */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4 leading-snug relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Raksha T U
        </span>{" "}
        👋
      </motion.h1>

      {/* Typing Effect */}
      <ReactTyped
        strings={[
          "Full Stack Developer💻",
          "AI & Cloud Enthusiast🤖",
          "Passionate Problem Solver🚀",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
        className="text-xl md:text-2xl text-slate-200 mb-6 relative z-10 font-medium"
      />

      {/* Short Description */}
      <p className="text-lg md:text-xl text-slate-300 max-w-3xl relative z-10 leading-relaxed">
        Final-year{" "}
        <span className="text-sky-400 font-semibold">Computer Science Engineer</span> |  
        Skilled in{" "}
        <span className="font-semibold text-indigo-400">
          C, Java, Python, JavaScript, React, SQL
        </span>{" "}
        | Dedicated to building{" "}
        <span className="text-amber-400 font-semibold">
          scalable and impactful digital solutions
        </span>.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mt-8 relative z-10">
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-amber-400 text-slate-900 font-semibold rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
