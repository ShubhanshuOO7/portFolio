import { useState } from "react";
import axios from "axios"
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { HTTP_ROUTE } from "../../../config";
import { toast } from "sonner";
export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        desc: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e: React.FormEvent) => {
        try {
            e.preventDefault();
            const res = await axios.post(`${HTTP_ROUTE}/api/v1/user/sendMail`,formData)
            if(res.data){
                toast.success(res.data.message)
                setFormData({ name: "", email: "", desc: "" });
            }
            // Here you would typically send the data to a backend service
        } catch (error:any) {
            toast.error(error?.response?.data.message || "Something went wrong")
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                            <p className="text-gray-300 mb-8">
                                I'm always interested in hearing about new projects and opportunities. 
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-purple-400 text-xl" />
                                <span>shubhanshu5320413@example.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhone className="text-purple-400 text-xl" />
                                <span>+91 8868985687</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-purple-400 text-xl" />
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="Desc" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="desc"
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
