import { motion } from "framer-motion";
import { Document } from "mongoose";
export default function Contact() {

  
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
        className="max-w-xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input id="namefield" type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-800 hover:" />
        <input id="emailfield" type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-800" />
        <textarea placeholder="Your Message" rows="5" id="messagename" className="w-full px-4 py-3 rounded bg-gray-100 dark:bg-gray-800" />
        <motion.button 
          type="submit"
          onClick={ ()=>{
            var name = document.getElementById('namefield').innerHTML;
            var email = document.getElementById('emailfield').innerHTML;
          }}
          className="w-full inline-block px-6 py-3 text-base font-medium text-white rounded-lg hover:bg-[#0f172a] bg-[#1e293b] transition duration-300 shadow-lg shadow-gray-500/50 dark:bg-[#1e293b] dark:text-white dark:shadow-none"
          whileHover={{ scale: 1.03 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
