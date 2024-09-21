import { CONTACT } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Title with animation */}
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      {/* Contact details with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center tracking-tight"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">
          <a href="#">{CONTACT.email}</a>
        </p>
        <p className="my-4">
          <a
            className="hover:text-cyan-900 duration-100"
            href="mailto:faresmohmed6872@gnail.com"
          >
            Let's Send Message
          </a>
        </p>
      </motion.div>

      {/* Social icons with staggered animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Delay between each icon animation
            },
          },
        }}
        className="m-8 flex flex-wrap items-center cursor-pointer justify-center gap-4 text-white text-xl"
      >
        {/* Social Media Icons */}
        <motion.a
         target="_blank"
          href="https://github.com/fares-code"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
         target="_blank"
          href="https://www.linkedin.com/in/fares-mohamed-8b3214263/"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/profile.php?id=100010113786842"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SiFacebook />
        </motion.a>
        <motion.a
         target="_blank"
          href="https://x.com/FaresMo47135786"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaSquareXTwitter />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;
