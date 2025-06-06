import { motion } from "framer-motion";
import amsImage from "C:/Users/ASUS/OneDrive/Desktop/my-cv/cv-website-react/src/assets/ams.png";
import gymAppImage from "C:/Users/ASUS/OneDrive/Desktop/my-cv/cv-website-react/src/assets/gymapp.png";
import yummisImage from "C:/Users/ASUS/OneDrive/Desktop/my-cv/cv-website-react/src/assets/screens.png";

const projects = [
  {
    title: "AMS Dentist",
    desc: "Role-based Flutter app for appointment booking, role access, Firebase, and real-time updates.",
    tech: ["Flutter", "Firebase", "Role-Based Access"],
    image: amsImage,
  },
  {
    title: "Gym App UI",
    desc: "Clean and modern gym workout app UI with navigation and animation in Flutter.",
    tech: ["Flutter", "UI/UX"],
    image: gymAppImage,
  },
  {
    title: "Yummis App",
    desc: "Flutter app for online food order and delivery",
    tech: ["Flutter", "SQLite", "API Integration"],
    image: yummisImage,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 bg-white dark:bg-[#0f172a]">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-[#0f172a] dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-white dark:bg-[#1e293b] transition-all duration-300 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0f172a] dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
