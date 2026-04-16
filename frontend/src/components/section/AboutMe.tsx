import {motion} from "framer-motion"
export default function AboutMe() {

    return (

        <div className="py-20 px-6 bg-black relative">
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10">
                <motion.div
                    animate={{
                        background: [
                            "linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)",
                            "linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)",
                            "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)",
                            "linear-gradient(45deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)"
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                />
            </div>
            
            <motion.div  animate={{x:0}} initial={{x:"-100vw"}} transition={{duration:1.6}} className="max-w-4xl mx-auto relative z-10">
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
                        <div className="pt-8 border-t border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Experience</h3>
                            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-purple-400">Full Stack Developer Intern</h4>
                                        <p className="text-lg text-gray-300">Dehix</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <p className="text-sm font-medium text-pink-400">Aug 2025 - Nov 2025</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Developed full-stack features using Next.js, Fastify, and MongoDB following scalable backend architecture practices.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Implemented authentication workflows using Firebase with secure session handling.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Optimized REST API endpoints and database queries, improving backend performance and response times.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>Deployed applications on AWS EC2 and S3, maintaining reliable cloud infrastructure.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}