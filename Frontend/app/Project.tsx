import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects: React.FC = () => {
    const scrollbarStyles = `
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
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
            listTitle: 'Project 1',
            title: 'Secure MERN Stack Authentication System.',
            description: 'Dive into a full-stack application where the MERN stack shines on both the frontend and backend. This project showcases a seamless registration and login system, securely storing user data in MongoDB as hashed values. But that\'s not all—users can reset their passwords through an email link that includes an expiring token, ensuring top-notch security. Should a password be updated, our robust system ensures the changes reflect instantly in the database, allowing for effortless and secure logins with the new credentials.',
            image: '/form.png',
            githubLink: 'https://github.com/KamalBanjade/Sign_In_Form.git',
            projectLink: '#'
        },
        {
            id: 2,
            listTitle: 'Project 2',
            title: 'BookBase: Efficient Book CRUD Application.',
            description: 'Explore the capabilities of the MERN stack with this comprehensive Book CRUD application. Dive into a seamless experience where users can create new book entries by filling out a detailed form including fields for the book name, ISBN (International Book Serial Number), author, description, published date, and publisher date. Users can effortlessly view their submitted entries and browse through a list of all books. Editing and updating book information is made simple, with all changes meticulously stored in MongoDB, ensuring data integrity and up-to-date records.',
            image: '/placeholder.svg',
            githubLink: 'https://github.com/KamalBanjade/CRUD-mern-.git',
            projectLink: '#'
        },
        {
            id: 3,
            listTitle: 'Project 3',
            title: 'Personal Portfolio',
            description: 'This is my personal portfolio, crafted with meticulous attention to detail using Next.js. It features a comprehensive and modern design, incorporating everything a typical website should have. The portfolio is highly responsive, ensuring a seamless user experience across various devices. It includes well-defined buttons and intuitive navigation, allowing visitors to effortlessly explore different sections. The URLs dynamically update according to the section being viewed, providing a smooth browsing experience. Advanced event handlers enhance interactivity, making the portfolio engaging and user-friendly. Additionally, it includes sections for showcasing projects, skills, contact information, and more, all neatly organized to present my work and achievements effectively.',
            image: '/logo.png',
            githubLink: 'https://github.com/KamalBanjade/Portfolio..git',
            projectLink: '#'
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
        <div className="max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-6 md:p-10 shadow-xl relative transition duration-500 ease-in-out transform hover:translate-y-2" id="projects">
            <div className="line-container mb-6">
                <div className="line start"></div>
                <h2 className="text-[#64ffda] text-3xl md:text-4xl font-bold title">
                    <div className='text-center lg:text-left sm:text-center'>
                        <span className="text-white">Projects</span>
                    </div>
                </h2>
                <div className="line end"></div>
            </div>
            <p className="text-[#8892b0] mb-4 leading-relaxed text-xs sm:text-base md:text-md pl-7">
                Below are some of my recent projects utilizing the MERN stack. Additional side projects can be found on my&nbsp;
                <a
                    href="https://github.com/KamalBanjade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:text-teal-400 transition-colors duration-300"
                >
                    GitHub
                </a>.
            </p>

            <section className="flex flex-col sm:flex-row justify-start items-start space-y-6 sm:space-y-0 sm:space-x-12 md:space-x-8">
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 sm:justify-center sm:items-start">
                    <div className="p-4 md:p-6 lg:p-12 w-full sm:w-auto overflow-y-auto sm:overflow-x-auto rounded-lg lg:ml-20">
                        <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-2 overflow-x-auto sm:overflow-x-hidden">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    className={`w-full sm:w-auto text-left px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors duration-300  ease-in-out transform ${activeProject === project.id
                                        ? "bg-teal-500 text-white transform:scale-105"
                                        : "bg-transparent text-gray-300 hover:bg-white hover:text-teal-600 hover:scale-105"
                                        }`}
                                    onClick={() => setActiveProject(project.id)}
                                    style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', transition: 'background-color 0.3s' }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm sm:text-base">{project.listTitle}</span>
                                        <span className="ml-2 text-base sm:text-xl"></span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto lg:ml-20 lg:w-4/5 lg:h-auto sm:w-full sm:mt-4 relative transition duration-500 ease-in-out transform md:hover:scale-105 lg:hover:scale-105 hover:translate-y-1 bg-gray-transparent rounded-lg">
                        <div className="max-w-3xl mx-auto">
                            {projects.map((project) => (
                                activeProject === project.id && (
                                    <div
                                        key={project.id}
                                        className="bg-[#112240] rounded-lg p-8 shadow-2xl transition duration-500 ease-in-out transform hover:scale-100 w-full flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 animate-fadeIn"
                                        onClick={() => toggleExpand(project.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {/* Project Image */}
                                        <img
                                            alt={project.title}
                                            className="rounded-lg object-cover w-34 h-32 sm:w-48 sm:h-48 lg:w-30 lg:h-30 mb-4 sm:mb-0"
                                            src={project.image}
                                        />

                                        <div className="flex-1 text-center sm:text-left ">
                                            <h3 className="text-[#64ffda] text-lg sm:text-xl md:text-xl lg:text-md font-bold mb-4">{project.title}</h3>
                                            <p className={`text-[#8892b0] text-sm sm:text-base md:text-lg lg:text-sm mb-4 ${expandedProject === project.id ? '' : 'line-clamp-4'}`}>
                                                {project.description}
                                            </p>
                                            <button
                                                className="text-teal-500 hover:text-teal-400 transition-colors duration-300 flex items-center text-sm"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleExpand(project.id);
                                                }}
                                            >
                                                {expandedProject === project.id ? (
                                                    <>
                                                        Show Less <FaChevronUp className="ml-1" />
                                                    </>
                                                ) : (
                                                    <>
                                                        Show More <FaChevronDown className="ml-1" />
                                                    </>
                                                )}
                                            </button>

                                            {/* Buttons */}
                                            <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-0 w-full mt-4">
                                                <a
                                                    href={project.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gradient-to-r from-[#64ffda] to-[#1a2f4f] text-white text-sm md:text-base lg:text-md py-2 px-6 lg:py-1 lg:px-4 rounded-md border border-transparent transition duration-300 transform hover:scale-105 hover:translate-y-1 shadow-md flex items-center justify-center space-x-2"
                                                >
                                                    <FaExternalLinkAlt />
                                                    <span>View Project</span>
                                                </a>

                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-transparent hover:bg-teal-500 text-teal-500 hover:text-white text-sm md:text-base lg:text-md py-2 px-6 lg:py-1 lg:px-4 rounded-md border border-teal-500 transition duration-300 transform hover:scale-105 hover:translate-y-1 shadow-md flex items-center justify-center space-x-2 sm:ml-auto "
                                                >
                                                    <FaGithub />
                                                    <span>GitHub</span>
                                                </a>
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
