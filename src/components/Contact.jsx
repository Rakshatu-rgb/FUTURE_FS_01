function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <p className="text-gray-600 mb-8">
        Let’s connect! Feel free to reach out for opportunities or collaborations.
      </p>

      {/* Contact Form */}
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Links */}
      <div className="mt-8 flex justify-center gap-6">
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" className="text-gray-800 hover:underline">
          GitHub
        </a>
        <a href="mailto:youremail@example.com" className="text-red-600 hover:underline">
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
