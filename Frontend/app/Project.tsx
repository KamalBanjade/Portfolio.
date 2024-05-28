import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
    return (
        <section className="flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-left mt-8" id="projects">
            <div className="container">
                
                <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-left">
                    <span className="text-white">Projects</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-[#112240] rounded-lg p-6">
                        <img
                            alt="Project 1"
                            className="rounded-lg object-cover w-full h-40 mb-4"
                            height={300}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <h3 className="text-[#ccd6f6] text-lg font-bold mb-2">Project 1</h3>
                        <p className="text-[#8892b0] mb-4">
                            A web application that helps users manage their tasks and projects more efficiently.
                        </p>
                        <div className="flex justify-between">
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">View Project</Button>
                            <Button className="bg-transparent hover:bg-white hover:text-teal-500 text-white py-2 px-4 rounded-md border border-white">
                                GitHub
                            </Button>
                        </div>
                    </div>
                    <div className="bg-[#112240] rounded-lg p-6">
                        <img
                            alt="Project 2"
                            className="rounded-lg object-cover w-full h-40 mb-4"
                            height={300}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <h3 className="text-[#ccd6f6] text-lg font-bold mb-2">Project 2</h3>
                        <p className="text-[#8892b0] mb-4">
                            A responsive e-commerce website that allows users to browse and purchase products.
                        </p>
                        <div className="flex justify-between">
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">View Project</Button>
                            <Button className="bg-transparent hover:bg-white hover:text-teal-500 text-white py-2 px-4 rounded-md border border-white">
                                GitHub
                            </Button>
                        </div>
                    </div>
                    <div className="bg-[#112240] rounded-lg p-6">
                        <img
                            alt="Project 1"
                            className="rounded-lg object-cover w-full h-40 mb-4"
                            height={300}
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <h3 className="text-[#ccd6f6] text-lg font-bold mb-2">Project 3</h3>
                        <p className="text-[#8892b0] mb-4">
                            A web application that helps users manage their tasks and projects more efficiently.
                        </p>
                        <div className="flex justify-between">
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">View Project</Button>
                            <Button className="bg-transparent hover:bg-white hover:text-teal-500 text-white py-2 px-4 rounded-md border border-white">
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default Projects