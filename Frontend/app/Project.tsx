import React from 'react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
    return (
        <div className="max-w-6xl lg:mx-14 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="projects">
            <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <div className="flex-1">
                    <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-left">
                    <div className='text-center sm:text-left'>
                        <span className="text-white">Projects</span>
                        </div>
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                            <img
                                alt="Project 1"
                                className="rounded-lg object-cover w-full h-40 mb-4"
                                src="/placeholder.svg"
                            />
                            <h3 className="64ffda] text-sm md:text-base lg:text-lg font-bold mb-2">Project 1</h3>
                            <p className="text-[#8892b0] text-sm md:text-xs lg:text-sm mb-4">

                            </p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <button className="bg-[#0a192f]  text-teal-500 text-xs md:text-sm lg:text-base py-1 md:py-2 lg:py-2 px-2 md:px-3 lg:px-4 rounded-md mb-2 sm:mb-0 border border-teal-500 transition duration-300">View Project</button>
                                <button className="bg-transparent hover:bg-white hover:text-teal-500 text-white text-xs md:text-sm lg:text-base py-1 md:py-2 lg:py-2 px-2 md:px-3 lg:px-4 rounded-md border border-white">GitHub</button>
                            </div>
                        </div>

                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                            <img
                                alt="Project 1"
                                className="rounded-lg object-cover w-full h-40 mb-4 "
                                src="/placeholder.svg"
                            />
                            <h3 className=" text-sm md:text-base lg:text-lg font-bold mb-2">Project 2</h3>
                            <p className="text-[#8892b0] text-sm md:text-xs lg:text-sm mb-4">

                            </p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <button className="bg-[#0a192f]  text-teal-500 text-xs md:text-sm lg:text-base py-1 md:py-2 lg:py-2 px-2 md:px-3 lg:px-4 rounded-md mb-2 sm:mb-0 border border-teal-500 transition duration-300">View Project</button>
                                <button className="bg-transparent hover:bg-white hover:text-teal-500 text-white text-xs md:text-sm lg:text-base py-1 md:py-2 lg:py-2 px-2 md:px-3 lg:px-4 rounded-md border border-white">GitHub</button>
                            </div>
                        </div>
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                            <img
                                alt="Project 1"
                                className="rounded-lg object-cover w-full h-40 mb-4"
                                src="/placeholder.svg"
                            />
                            <h3 className=" text-sm md:text-base lg:text-lg font-bold mb-2">Project 3</h3>
                            <p className="text-[#8892b0] text-sm md:text-xs lg:text-sm mb-4">

                            </p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <button className="bg-[#0a192f]  text-teal-500 text-xs md:text-sm lg:text-base py-1 md:py-2 lg:py-2 px-2 md:px-3 lg:px-4 rounded-md mb-2 sm:mb-0 border border-teal-500 transition duration-300">View Project</button>
                                <button className="bg-transparent hover:bg-white hover:text-teal-500 text-white text-xs md:text-sm lg:text-base py-1 md:py-2 lg:py-2 px-2 md:px-3 lg:px-4 rounded-md border border-white">GitHub</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
