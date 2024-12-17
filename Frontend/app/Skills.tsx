import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import './line.css';

const Skills: React.FC = () => {
    const skillsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.progress-bar');
                        progressBars.forEach((bar) => {
                            // Type assertion to ensure bar is an HTMLElement
                            const htmlBar = bar as HTMLElement;
                            // Force reset the animation
                            htmlBar.classList.remove('animate-progress');
                            // Trigger a reflow, flushing the CSS changes
                            void htmlBar.offsetWidth;
                            // Re-add the class to restart the animation
                            htmlBar.classList.add('animate-progress');
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div ref={skillsRef} className="max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-6 md:p-10 shadow-xl relative transition duration-500 ease-in-out transform hover:translate-y-2" id="skills">
            <style>
                {`
                @keyframes progress {
                    from { width: 0; }
                    to { width: var(--progress-width); }
                }

                .animate-progress {
                    animation: progress 2s ease-in-out forwards;
                }

                .progress-bar {
                    --progress-width: 0%;
                }

                .progress-bar-70 {
                    --progress-width: 70%;
                }

                .progress-bar-60 {
                    --progress-width: 60%;
                }

                .progress-bar-80 {
                    --progress-width: 80%;
                }
                `}
            </style>
            <section className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-10">
                <div className="flex-1">
                    <div className="line-container mb-6">
                        <div className="line start"></div>
                        <h2 className="text-[#64ffda] text-3xl md:text-4xl font-bold title">
                            <div className='text-center lg:text-left sm:text-center'>
                                <span className="text-white">Skills</span>
                            </div>
                        </h2>
                        <div className="line end"></div>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4">
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32] my-30">
                            <h3 className="text-customs mb-4 flex justify-between items-center">
                                Front-End <FaLaptopCode className=" hover:text-teal-600 transition duration-300 text-custom" />
                            </h3>
                            <ul className="list-disc pl-2 md:pl-4 lg:pl-6 text-xs md:text-base lg:text-base text-[#8892b0]">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32] sm:my-30">
                            <h3 className="text-customs mb-4 flex justify-between items-center">
                                Back-End <FaServer className=" hover:text-teal-600 transition duration-300 text-custom " />
                            </h3>
                            <ul className="list-disc pl-2 md:pl-4 lg:pl-6 text-xs md:text-base lg:text-base text-[#8892b0]">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </div>
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32] my-30">
                            <h3 className="text-customs font-bold mb-4 flex justify-between items-center">
                                Tools <FaTools className=" hover:text-teal-600 transition duration-300 text-custom" />
                            </h3>
                            <ul className="list-disc pl-2 md:pl-4 lg:pl-6 text-xs md:text-base lg:text-base text-[#8892b0]">
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Figma</li>
                                <li>Postman</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-2 md:h-4" />
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4 ">
                        <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700 ">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-custom">Front-End</h3>
                                <div className="text-custom ]">70%</div>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 sm:h-2 w-full rounded-full bg-gray-700">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={70}
                                        className="h-full w-0 progress-bar progress-bar-70 rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
                                        role="progressbar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-custom">Back-End</h3>
                                <div className="text-custom">60%</div>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 sm:h-2 w-full rounded-full bg-gray-700">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={60}
                                        className="h-full w-0 progress-bar progress-bar-60 rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
                                        role="progressbar"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-custom">Tools</h3>
                                <div className="text-custom">80%</div>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 sm:h-2 w-full rounded-full bg-gray-700">
                                    <div
                                        aria-valuemax={100}
                                        aria-valuemin={0}
                                        aria-valuenow={80}
                                        className="h-full w-0 progress-bar progress-bar-80 rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
                                        role="progressbar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
