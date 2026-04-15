import { Check, MoveDown } from "lucide-react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion"
import { reverse } from "dns";
const buttonVariants = {
    hover: {
       scale: 1.1,
       transition: {
        repeat : Infinity,
        repeatType : "reverse" as const,
        duration: 0.5
       }
    }
}
export default function HeroSection() {
    return (
        <div>
              <div className="grid grid-cols-2">
                        <div className="ml-17 pt-10">
                          <motion.div animate={{x:0}} initial={{x:"-100vw"}} transition={{duration:1}} >
                            <span className="text-5xl text-white font-bold">Hello!</span>
                            <span className="text-5xl font-bold ml-5 text-transparent bg-clip-text bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500">I'm <motion.span drag dragConstraints={{left:0,top:0,right:0,bottom:0}}>Shubhanshu</motion.span> </span>
                            <div className="flex items-center text-3xl mt-8 gap-2">
                              <hr className="w-1/4 border-gray-600" />
                              <span className="text-white"><LayoutTextFlip text="I'm a" words={["Full Stack Developer","Frontend Developer","Backend Developer"]}/>
                                
                                </span>
                              
                            </div>
                            <motion.div 
                              className="mt-9 font-light text-gray-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 }}
                            >
                              Hello!I'm Shubhanshu I’m a{" "}
                              <span className="font-bold text-white">
                                developer, creator, and open source contributor.
                              </span>{" "}
                            </motion.div>
                            <motion.div 
                              className="font-light text-gray-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.7 }}
                            >
                              I enjoy turning ideas into real-world, user-focused
                              applications.
                            </motion.div>
                            <motion.div 
                              className="flex flex-col mt-12"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.8 }}
                            >
                              <motion.div 
                                className="flex items-center gap-3 font-semibold text-base text-gray-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.9 }}
                              >
                                <Check size={16} className="text-green-400" />
                                Built scalable web applications
                              </motion.div>
                              <motion.div 
                                className="flex items-center gap-3 font-semibold text-base mt-1 text-gray-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.0 }}
                              >
                                <Check size={16} className="text-green-400" />
                                Implemented authentication, APIs, and databases
                              </motion.div>
                              <motion.div 
                                className="flex items-center gap-3 font-semibold text-base mt-1 text-gray-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.1 }}
                              >
                                <Check size={16} className="text-green-400" />
                                Open source contributor
                              </motion.div>
                            </motion.div>
                            <motion.div 
                              className="flex items-center mt-7 pb-5 gap-5"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.2 }}
                            >
                              <motion.div 
                                className="rounded-2xl p-5 text-sm font-light"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.3 }}
                              >
                                <Button>
                                  Let's Talk
                                </Button>
                              </motion.div>
                              <motion.div 
                                className="border-b border-gray-400 gap-1 w-30"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.4 }}
                              >
                                <a href="/resume.pdf" className="flex items-center text-white hover:text-gray-300 transition-colors" download>
                                  Download Cv <MoveDown size={16} />
                                </a>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        </div>
                        <motion.div className="flex items-center justify-center" animate={{x:0}} initial={{x:"100vw"}} transition={{duration:1}}>
                          <motion.div variants={buttonVariants} whileHover="hover" className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                            <img
                              src="/profiles.jpeg"
                              alt="Profile"
                              className="relative w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-transform duration-300 ease-out"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
                          </motion.div>
                        </motion.div>
                        <div></div>
                </div>
        </div>
    )
}