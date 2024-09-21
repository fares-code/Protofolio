import AboutImage from "../assets/about.jpg"
import { motion } from "framer-motion"
import { ABOUT_TEXT } from "../constants"
const About = () => {
    return (
        <div className="boredr-b border-neutral-900 pb-4">
            <motion.h2

                initial={{
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 0.4,
                    delay: 0.2
                }}

                className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span> </motion.h2>

            <div className="flex  flex-wrap ">
                <motion.div

                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}

                    transition={{
                        duration: 0.6

                    }}

                    className="w-full lg:w-1/2  lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={AboutImage} className="w-96 rounded-3xl" alt="about me" />
                    </div>

                </motion.div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p initial={{
                            x: 100,
                            opacity: 0
                        }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}

                            transition={{
                                duration: 0.6

                            }} className="my-2 max-w-xl py-6">{ABOUT_TEXT}</motion.p>
                    </div>


                </div>
            </div>





        </div>
    )
}
export default About