import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3s82z04", 
        "template_aqlir3r",
        form.current,
        "nJgAjCpdfkcJ3h2to"   
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          alert("Message sent successfully 🚀");
        },
        (error) => {
          console.error("❌ Error:", error.text);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100"
    >
      <div className="container mx-auto text-center px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-6">
          Contact Me
        </h2>
        <p className="text-slate-300 mb-8">
          Let’s connect! Feel free to reach out for opportunities,
          collaborations, or just to say hi 🚀
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto space-y-4 bg-slate-800 p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-slate-100 border border-slate-600 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-8 text-2xl">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-slate-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:rakshau781@gmail.com"
            className="text-pink-400 hover:text-pink-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
