import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import GridBackgroundDemo from '../ui/grid-background-demo'

const Project = () => {
  return (
    <div className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-20 bg-gradient-to-r from-purple-400 to-transparent"></span>
            <span className="text-sm text-gray-400 font-medium">My Work</span>
            <span className="h-px w-20 bg-gradient-to-l from-pink-400 to-transparent"></span>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
            A curated collection of my work showcasing full-stack development, 
            modern web technologies, and creative problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="group relative">
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-800 hover:border-purple-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/jobPortal.png" alt="JobPortal" className="w-full h-full bg-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">JobPortal</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Modern job board connecting talented professionals with dream opportunities
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-700/30">React</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/30">Node.js</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700/30">Postgres</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-700/30">recoil</span>
                <span className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-700/30">cloudinary</span>
              </div>
              <div className="flex gap-3">
                <a href="https://jobportal-j9vm.onrender.com/" className="flex-1 text-center py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-violet-700 transition-all duration-300">
                  View Project
                </a>
                <a href="https://github.com/ShubhanshuOO7/JobPortal" className="flex-1 text-center py-2 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          
          <div className="group relative">
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-800 hover:border-violet-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-violet-900/20 to-purple-900/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/ideaFlow.png" alt="IdeaFlow" className="w-full h-full bg-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IdeaFlow</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Real-time collaborative whiteboard with instant synchronization
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded-full border border-yellow-700/30">webSockets</span>
                <span className="px-3 py-1 bg-red-900/30 text-red-300 text-xs rounded-full border border-red-700/30">Canvas</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/30">Express</span>
                <span className="px-3 py-1 bg-gray-900/30 text-gray-300 text-xs rounded-full border border-gray-700/30">Nextjs</span>
                <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-700/30">Turborepo</span>
                <span className="px-3 py-1 bg-teal-900/30 text-teal-300 text-xs rounded-full border border-teal-700/30">zustand</span>
              </div>
              <div className="flex gap-3">
                <a href="https://idea-flow-excalidraw-frontend-jepg.vercel.app/" className="flex-1 text-center py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                  View Project
                </a>
                <a href="https://github.com/ShubhanshuOO7/IdeaFlow" className="flex-1 text-center py-2 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          
          <div className="group relative">
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-800 hover:border-pink-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-pink-900/20 to-violet-900/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/bloggingApp.png" alt="BloggingApp" className="w-full h-full bg-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">BloggingApp</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Full-stack blogging platform with rich text editing and authentication
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-700/30">React</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700/30">Postgres</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/30">express</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-700/30">recoil</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-700/30">prisma</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="flex-1 text-center py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                  View Project
                </a>
                <a href="" className="flex-1 text-center py-2 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Project