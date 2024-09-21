import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaServer } from 'react-icons/fa';
import { GrDocker } from "react-icons/gr";
import { animate, motion } from "framer-motion"
const iconVariant =(duration)=>({
    initial:{y:-10},
    animate:{
       y:[-10,10],
       transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
       }

    }
})
const Technologies=()=>{
    return(
        <div className="border-b border-neutral-800 pb-24 "> <motion.h2 
        initial={{
            y:-100,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        transition={{
            duration:0.7,
            delay:0.2
        }}
        className="my-20 text-center text-4xl">Technologies
            </motion.h2>

<motion.div
initial={{
    x:-150,
    opacity:0
}}
whileInView={{
    x:0,
    opacity:1
}}
transition={{
    duration:0.7,
    delay:0.2
}}
className="flex flex-wrap justify-center items-center gap-4">

<motion.div variants={iconVariant(1.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<FaReact className="text-6xl text-cyan-400"/>


</motion.div>




<motion.div 
variants={iconVariant(3.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<FaNodeJs className="text-6xl text-green-800"/>


</motion.div>



<motion.div
variants={iconVariant(4.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<SiMongodb className="text-6xl text-green-500"/>
</motion.div>




<motion.div
variants={iconVariant(5.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<FaServer className="text-6xl text-expressTeal"/>
</motion.div>


<motion.div
variants={iconVariant(6.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<DiRedis className="text-6xl text-red-700"/>
</motion.div>




<motion.div 
variants={iconVariant(7.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<GrMysql className="text-6xl text-cyan-800"/>
</motion.div>
<motion.div 
variants={iconVariant(8.5)} 
initial="initial"
animate="animate"
className="rounded-2xl border-4 border-neutral-800 p-4 ">
<GrDocker className="text-6xl text-blue-600"/>
</motion.div>

</motion.div>






            </div>
    )
}
export default Technologies;