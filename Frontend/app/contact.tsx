import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaExternalLinkAlt, FaEnvelope, } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';
import './line.css';
const Contact: React.FC = () => {
    return (
        <div className="max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-6 md:p-10 shadow-xl relative transition duration-500 ease-in-out transform hover:translate-y-2" id="contact">
            <section className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-10">
                <div className="flex-1">
                    <div className="line-container mb-6">
                        <div className="line start"></div>
                        <h2 className="text-[#64ffda] text-3xl md:text-4xl font-bold title">
                            <div className='text-center lg:text-left sm:text-center'>
                                <span className="text-white">Get In Touch</span>
                            </div>
                        </h2>
                        <div className="line end"></div>
                    </div>
                    <div className="max-w-6xl mx-auto sm:mx-0 text-[#8892b0] text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        <p className="mb-4 pl-7">
                        Thanks for stopping by! I love exploring new ideas and opportunities, and I’m always open to connecting with others who share similar interests. If any of our hobbies align, please feel free to reach out. I look forward to hearing from you!😃
                        </p>
                        <div className="flex flex-col items-center">
                            <a href="mailto:kamal_banjade@icloud.com" className=" mt-8 py-2 px-4 text-lg text-[#64ffda] border-2 border-[#64ffda] rounded transition duration-300 ease-in-out hover:bg-[#64ffda] hover:bg-opacity-10 font-bold hover:-translate-y-1 hover:shadow-lg flex items-center justify-center hover:scale-110">
                                Say Hello! <span className="ml-2"><FaEnvelope /></span>
                            </a>
                            <br />
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