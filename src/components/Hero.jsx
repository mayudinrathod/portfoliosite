import { motion } from 'framer-motion';
import heroImage from 'C:/Users/ASUS/OneDrive/Desktop/my-cv/cv-website-react/src/assets/hero.png'; // ✅ Correct relative import

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="lg:flex lg:items-center">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Hi, I'm Mayudin Rathod
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate developer specializing in creating dynamic and beautiful web applications. Explore my work and let's connect!
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-base font-medium text-white rounded-lg hover:bg-[#0f172a] bg-[#1e293b] transition duration-300 shadow-lg shadow-gray-500/50 dark:bg-[#1e293b] dark:text-white dark:shadow-none"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="mt-10 lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              className="w-full rounded-lg shadow-lg"
              src={heroImage} // ✅ Use imported image here
              alt="Portfolio showcase"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
