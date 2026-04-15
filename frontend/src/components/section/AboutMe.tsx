import {motion} from "framer-motion"
export default function AboutMe() {

    return (

        <div className="py-20 px-6 bg-black">
            <motion.div  animate={{x:0}} initial={{x:"-100vw"}} transition={{duration:1.6}} className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-px w-20 bg-gradient-to-r from-purple-400 to-transparent"></span>
                        <span className="text-sm text-gray-400 font-medium">Who I Am</span>
                        <span className="h-px w-20 bg-gradient-to-l from-pink-400 to-transparent"></span>
                    </div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-800">
                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            I'm a passionate <span className="font-semibold text-purple-400">web developer</span> with a strong interest in 
                            <span className="font-semibold text-violet-400">backend development</span> and 
                            <span className="font-semibold text-pink-400">problem-solving</span>.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            I enjoy building <span className="font-semibold text-white">efficient, scalable applications</span> and understanding 
                            how systems work under the hood. My focus is on creating clean, maintainable code that delivers 
                            exceptional user experiences.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Currently, I'm improving my skills in <span className="font-semibold text-purple-400">DSA (C/C++)</span> and working on 
                            real-world projects to grow as a developer and stay current with industry best practices.
                        </p>
                        <div className="pt-6 border-t border-gray-700">
                            <div className="flex flex-wrap gap-4 justify-center">
                                <span className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium border border-purple-700/30">
                                    Web Development
                                </span>
                                <span className="px-4 py-2 bg-violet-900/30 text-violet-300 rounded-full text-sm font-medium border border-violet-700/30">
                                    Backend Systems
                                </span>
                                <span className="px-4 py-2 bg-pink-900/30 text-pink-300 rounded-full text-sm font-medium border border-pink-700/30">
                                    Problem Solving
                                </span>
                                <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
                                    DSA & Algorithms
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}