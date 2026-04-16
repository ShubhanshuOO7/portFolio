import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-black text-white py-8 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold mb-2">© 2026 Shubhanshu</p>
                        <p className="text-gray-400 text-sm">Building the future, one line of code at a time</p>
                    </div>
                    
                    <div className="flex gap-6 justify-center">
                         <a href="https://github.com/ShubhanshuOO7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:scale-120 transition-transform duration-200">
                             <FaGithub className="w-8 h-8"/>
                         </a>
                         <a href="https://www.linkedin.com/in/shubh9999/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:scale-120 transition-transform duration-200">
                             <FaLinkedin className="w-8 h-8"/>
                         </a>
                         <a href="https://x.com/Shubhanshu69973" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:scale-120 transition-transform duration-200">
                             <FaSquareXTwitter className="w-8 h-8"/>
                         </a>
                    </div>
                </div>
                
                <div className="text-center mt-8 pt-6 border-t border-gray-800">
                    <p className="text-gray-500 text-sm">
                        Made with ❤️ using React, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </div>
    )
}
