import { HERO_CONTENT } from "../constants/index";
import profilepicture from '../assets/faresMohamedProfile.jpg';
import { motion } from "framer-motion";
import resumePDF from '../assets/Fares_CV.pdf'; // Add your PDF file

const container = (delay) => ({
    hidden: { 
        x: -100, 
        opacity: 0 
    },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: delay
        }
    }
});

const Image = (delay) => ({
    hidden: { 
        x: 100, 
        opacity: 0 
    },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: delay
        }
    }
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                         className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                            Fares Mohamed
                        </motion.h1>

                        <motion.span variants={container(0.4)} initial="hidden"
                        animate="visible" 
                        className="bg-gradient-to-r inline from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-3xl tracking-tight text-transparent">
                            Full Stack Developer 
                            
                        </motion.span>
                          {/* Add Download PDF Button */}
                          <motion.a 
                          variants={container(1.2)}
                          initial="hidden"
                          animate="visible"
                          href={resumePDF} // Path to your PDF
                          download="Fares_Mohamed_Resume.pdf" // Filename for download
                          className="px-4 py-2  inline mt-2 bg-blue-950  text-white rounded-md hover:bg-cyan-600 transition-all duration-200">
                            Download Resume
                        </motion.a>
                        <motion.p variants={container(0.9)} initial="hidden"
                        animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>

                      
                    </div>
                </div>

                <motion.div variants={Image(1.2)} initial="hidden"
                        animate="visible"  className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilepicture} className="w-96 rounded-3xl" alt="profile" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;
