import React from 'react';
const Skills: React.FC = () => {
    return (
        <div className="max-w-6xl lg:mx-14  bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="skills">
          <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
            <div className="flex-1">
              <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-left">
                <span className="text-white">Skills</span>
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                  <h3 className="text-[#64ffda] text-base md:text-lg lg:text-lg font-bold mb-4">Front-End</h3>
                  <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                  <h3 className="text-[#64ffda] text-base md:text-lg lg:text-lg font-bold mb-4">Back-End</h3>
                  <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
                  <h3 className="text-[#64ffda] text-base md:text-lg lg:text-lg font-bold mb-4">Tools</h3>
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
                        className="h-full w-[70%] rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
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
                        className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
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
                        className="h-full w-[80%] rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
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