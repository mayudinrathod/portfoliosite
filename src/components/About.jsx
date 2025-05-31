import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white dark:bg-[#0f172a] text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        I'm a passionate Flutter developer with experience in building high-quality mobile apps.
        I specialize in local (Sqflite) and cloud (Firebase) databases, API integration, and version control with Git & GitHub.
        I’ve also worked as a freelancer on Fiverr.
      </motion.p>
    </section>
  );
}
