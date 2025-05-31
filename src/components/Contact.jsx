import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Send this data to an API or service like EmailJS, Formspree, or your backend
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white dark:bg-[#0f172a] text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-800"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-800"
        />
        <motion.button
          type="submit"
          className="w-full inline-block px-6 py-3 text-base font-medium text-white rounded-lg hover:bg-[#0f172a] bg-[#1e293b] transition duration-300 shadow-lg shadow-gray-500/50 dark:bg-[#1e293b] dark:text-white dark:shadow-none"
          whileHover={{ scale: 1.03 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
