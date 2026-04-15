import { useState } from 'react'
import './App.css'
import {motion} from "framer-motion"
import HeroSection from './components/section/HeroSection'
import Header from './components/section/Header'
import AboutMe from './components/section/AboutMe'
import Skills from './components/section/Skills'
import Project from './components/section/Project'
import ContactMe from './components/section/ContactMe'
import Footer from './components/section/Footer'
import GridBackgroundDemo from './components/ui/grid-background-demo'

function App() {

  return (
    <div className=''>
      <Header />
      <GridBackgroundDemo>        
        <HeroSection />
      </GridBackgroundDemo>
       <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white border-t border-purple-500/20 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <motion.div  className="flex items-center font-semibold justify-between text-xl tracking-wider">
                  <span className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-purple-400">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Web Design
                  </span>
                  <span className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-pink-400">
                    <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    APP DESIGN
                  </span>
                  <span className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-blue-400">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    DEVELOPMENT
                  </span>
                  <span className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-green-400">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    WEB FLOW
                  </span>
                  <span className="group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-yellow-400">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    BRANDING
                  </span>
                </motion.div>
              </div>
            </div>
            <AboutMe />
            <Skills/>
            <Project/>
            <ContactMe/>
            <Footer/>
    </div>
  )
}

export default App
