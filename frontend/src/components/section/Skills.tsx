import { FaCss3, FaDocker, FaHtml5, FaJs, FaNode, FaNodeJs, FaReact, FaTerminal } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiPostgresql, SiRedis, SiTurborepo } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
   

    return (
        <div className="py-16 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        Technical Skills
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-px w-20 bg-gradient-to-r from-purple-400 to-transparent"></span>
                        <span className="text-sm text-gray-400 font-medium">Technologies I Work With</span>
                        <span className="h-px w-20 bg-gradient-to-l from-pink-400 to-transparent"></span>
                    </div>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-800">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 0.5}}><FaHtml5 className="text-5xl text-orange-500  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 0.7}}><FaCss3 className="text-5xl text-blue-500  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 0.9}}><FaJs className="text-5xl text-yellow-500  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 1.1}}><FaNode className="text-5xl text-green-500  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 1.3}}><SiExpress className="text-5xl text-white  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 1.5}}><FaReact className="text-5xl text-sky-500  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 1.7}}><SiNextdotjs className="text-5xl text-white  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 1.9}}><FaDocker className="text-5xl text-sky-500  hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 2.1}}><SiTurborepo className="text-5xl text-pink-500 hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 2.3}}><SiRedis className="text-5xl text-red-500 hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 2.5}}><SiPostgresql className="text-5xl text-blue-500 hover:scale-110 transition duration-300"/></motion.span>
                         <motion.span variants={{
                            hidden: { y: "-100vw", opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }} transition={{duration: 2.7}}><SiMongodb className="text-5xl text-green-500 hover:scale-110 transition duration-300"/></motion.span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
