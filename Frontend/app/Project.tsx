import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects: React.FC = () => {

    const scrollbarStyles = `
::-webkit-scrollbar {
  width: 6px;
  height: 6px; /* Add height for horizontal scrollbar */
}
::-webkit-scrollbar-track {
  background: #0a192f; 
}
::-webkit-scrollbar-thumb {
  background: #64ffda; 
  border-radius: 3px;                                   
}
`;

    const [activeProject, setActiveProject] = useState<number>(1);
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description for Project 1. This is an extended description to see how the container adjusts dynamically. Here is some additional text to ensure we have more than three lines. Even more text to push it over the limit.',
            image: '/placeholder.svg'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Description for Project 2. This is an extended description to see how the container adjusts dynamically. Here is some additional text to ensure we have more than three lines. Even more text to push it over the limit.',
            image: '/placeholder.svg'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Description for Project 3. This is an extended description to see how the container adjusts dynamically. Here is some additional text to ensure we have more than three lines. Even more text to push it over the limit.',
            image: '/placeholder.svg'
        }
    ];

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = scrollbarStyles;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const toggleExpand = (projectId: number) => {
        setExpandedProject(expandedProject === projectId ? null : projectId);
    };

    return (
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-100" id="projects">
            {/* Projects Header */}
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center sm:text-left">
                Projects
            </h2>

            {/* Projects Section */}
            <section className="flex flex-col sm:flex-row justify-start items-start space-y-6 sm:space-y-0 sm:space-x-12 md:space-x-8">
                {/* Project Navigation */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 sm:justify-center sm:items-start">
                    <div className="p-4 md:p-6 lg:p-12 w-full sm:w-auto overflow-y-auto sm:overflow-x-auto rounded-lg lg:ml-20">
                        <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-2 overflow-x-auto sm:overflow-x-hidden">
                            {/* Map through projects to create buttons */}
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    className={`w-full sm:w-auto text-left px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors duration-300 ease-in-out transform ${activeProject === project.id
                                        ? "bg-teal-500 text-white scale-105"
                                        : "bg-transparent text-gray-300 hover:bg-white hover:text-teal-600 hover:scale-105"
                                        }`}
                                    onClick={() => setActiveProject(project.id)}
                                    style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', transition: 'background-color 0.3s' }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm sm:text-base">{project.id}. {project.title}</span>
                                        <span className="ml-2 text-base sm:text-xl">
                                            {/* No arrow icon for large screens */}
                                        </span>
                                    </div>
                                </button>


                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto lg:ml-20 lg:w-4/5 lg:h-auto sm:w-full sm:mt-4">
                        <div className="max-w-3xl mx-auto">
                            {/* Map through projects to display project details */}
                            {projects.map((project) => (
                                // Display project details if it matches active project
                                activeProject === project.id && (
                                    <div key={project.id} className="bg-[#112240] rounded-lg p-8 shadow-2xl transition duration-500 ease-in-out transform hover:scale-100 w-full flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 animate-fadeIn">
                                        {/* Project Image */}
                                        <img
                                            alt={project.title}
                                            className="rounded-lg object-cover w-32 h-32 sm:w-48 sm:h-48 lg:w-32 lg:h-32 mb-4 sm:mb-0"
                                            src={project.image}
                                        />

                                        {/* Project Description */}
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-[#64ffda] text-lg sm:text-xl md:text-xl lg:text-xl font-bold mb-4">{project.title}</h3>
                                            <p className={`text-[#8892b0] text-sm sm:text-base md:text-lg lg:text-base mb-4 sm:mb-12 ${expandedProject === project.id ? '' : 'line-clamp-3'}`}>
                                                {project.description}
                                            </p>
                                            <button
                                                className="text-teal-500 hover:text-teal-400 transition-colors duration-300"
                                                onClick={() => toggleExpand(project.id)}
                                            >
                                                {expandedProject === project.id ? (
                                                    <>
                                                        Show Less <FaChevronUp />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show More <FaChevronDown />
                                                    </>
                                                )}
                                            </button>

                                            {/* Buttons */}
                                            <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-0 w-full mt-4">
                                                <button className="bg-gradient-to-r from-[#64ffda] to-[#1a2f4f] text-white text-sm md:text-base lg:text-sm py-2 px-6 lg:py-1 lg:px-4 rounded-md border border-transparent transition duration-300 hover:from-[#52d4bb] hover:to-[#112240] shadow-md flex items-center justify-center space-x-2">
                                                    <FaExternalLinkAlt />
                                                    <span>View Project</span>
                                                </button>

                                                <button className="bg-transparent hover:bg-teal-500 text-teal-500 hover:text-white text-sm md:text-base lg:text-sm py-2 px-6 lg:py-1 lg:px-4 rounded-md border border-teal-500 transition duration-300 shadow-md flex items-center justify-center space-x-2 sm:ml-auto">
                                                    <FaGithub />
                                                    <span>GitHub</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
