function Resume() {
  return (
    <section
      id="resume"
      className="py-24 bg-gray-100 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        My Resume
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Download my resume to know more about my skills, experience,
        and projects in detail.
      </p>
      <a
        href="/Raksha_TU_Resume.pdf"
        download
        className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 
                   text-white font-semibold rounded-lg shadow-lg 
                   hover:scale-105 transition-transform duration-300"
      >
        📄 Download Resume
      </a>
    </section>
  );
}

export default Resume;
