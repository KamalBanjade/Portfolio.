import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

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
        <div ref={skillsRef} className="max-w-6xl lg:mx-14 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="skills">
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
            <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
                <div className="flex-1">
                    <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-left">
                        <div className='text-center sm:text-left'>
                            <span className="text-white">Skills</span>
                        </div>
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                            <h3 className="text-[#64ffda] text-sm sm:text-base md:text-lg lg:text-lg font-bold mb-4 flex justify-between items-center">
                                Front-End <FaLaptopCode className="text-[#8892b0] hover:text-teal-600 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl" />
                            </h3>
                            <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                        <h3 className="text-[#64ffda] text-sm sm:text-base md:text-lg lg:text-lg font-bold mb-4 flex justify-between items-center">
                                Back-End <FaServer className="text-[#8892b0] hover:text-teal-600 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl" />
                            </h3>
                            <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </div>
                        <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                        <h3 className="text-[#64ffda] text-sm sm:text-base md:text-lg lg:text-lg font-bold mb-4 flex justify-between items-center">
                                Tools <FaTools className="text-[#8892b0] hover:text-teal-600 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl" />
                            </h3>
                            <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Figma</li>
                                <li>Postman</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-2 md:h-6" />
                    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                        <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-[#ccd6f6] text-xs sm:text-sm md:text-base lg:text-lg font-bold">Front-End</h3>
                                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-50">70%</div>
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
                                <h3 className="text-[#ccd6f6] text-xs sm:text-sm md:text-base lg:text-lg font-bold">Back-End</h3>
                                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-50">60%</div>
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
                                <h3 className="text-[#ccd6f6] text-xs sm:text-sm md:text-base lg:text-lg font-bold">Tools</h3>
                                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-50">80%</div>
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
