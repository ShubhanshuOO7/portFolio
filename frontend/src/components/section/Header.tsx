import { ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import {motion} from "framer-motion"

const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div
     className="sticky top-0 z-50 w-full border-b border-gray-700/30 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <motion.h1 animate={{y:0}} initial={{y:"-100vh"}} transition={{duration:1}} className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.a animate={{y:0}} initial={{y:"-100vh"}} transition={{duration:1.2}}
              onClick={(e) => { e.preventDefault(); smoothScroll('projects'); }}
              href="#projects" 
              className="relative text-gray-300 hover:text-white transition-colors duration-200 group cursor-pointer"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a animate={{y:0}} initial={{y:"-100vh"}} transition={{duration:1.4}}
              onClick={(e) => { e.preventDefault(); smoothScroll('about'); }}
              href="#about" 
              className="relative text-gray-300 hover:text-white transition-colors duration-200 group cursor-pointer"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a animate={{y:0}} initial={{y:"-100vh"}} transition={{duration:1.6}}
              onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }}
              href="#contact" 
              className="relative text-gray-300 hover:text-white transition-colors duration-200 group cursor-pointer"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.button  animate={{y:0}} initial={{y:"-100vh"}} transition={{duration:1.8}} onClick={() => smoothScroll('contact')} className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Get in touch
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="w-6 h-0.5 bg-gray-400 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/30">
            <nav className="flex flex-col space-y-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScroll('projects'); }} className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                Projects
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('about'); }} className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                About
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }} className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                Contact
              </a>
              <Button onClick={() => smoothScroll('contact')} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-full">
                Get in touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header