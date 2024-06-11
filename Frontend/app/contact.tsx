import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaExternalLinkAlt, FaEnvelope, } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';
const Contact: React.FC = () => {
    return (
        <div className="container min-h-[300px] sm:min-h-[400px] max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="contact">
            <section className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <div className="flex-1 ">
                <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ">
                        <span className="text-white">Get In Touch</span>
                    </h2>
                    <div className="max-w-6xl mx-auto sm:mx-0 text-[#8892b0] text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        <p className="mb-4 ">
                            Thanks for stopping by! Let's connect and explore together. I have always loved exploring new ideas and opportunities. Feel free to reach out. Looking forward to hearing from you!
                        </p>
                        <div className="flex flex-col items-center">
                            <a href="mailto:kamal_banjade@icloud.com" className=" mt-8 py-2 px-4 text-lg text-[#64ffda] border-2 border-[#64ffda] rounded transition duration-300 ease-in-out hover:bg-[#64ffda] hover:bg-opacity-10 font-bold hover:-translate-y-1 hover:shadow-lg flex items-center justify-center hover:scale-110">
                                Say Hello! <span className="ml-2"><FaEnvelope /></span>
                            </a>
                            <br/>
                            <div className="flex justify-center space-x-3 mt-1">
                                <a href="https://github.com/KamalBanjade" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transform transition duration-300 ease-in-out hover:scale-125 hover:text-[#64ffda] text-white">
                                    <FaGithub size={27} />
                                </a>
                                <a href="https://instagram.com/kamal.banjade_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform transition duration-300 ease-in-out hover:scale-125 hover:text-[#64ffda] text-white">
                                    <FaInstagram size={27} />
                                </a>
                                <a href="https://twitter.com/kamalbanjade20" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transform transition duration-300 ease-in-out hover:scale-125 hover:text-[#64ffda] text-white">
                                    <FaXTwitter size={27} />
                                </a>
                                <a href="https://linkedin.com/in/kamal-banjade-554198254" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform transition duration-300 ease-in-out hover:scale-125 hover:text-[#64ffda] text-white">
                                    <FaLinkedin size={27} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;