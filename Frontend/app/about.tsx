import React, { useState } from 'react';
import './line.css';

const About: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fadeIn">
      <div className="max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-6 md:p-10 shadow-xl relative transition duration-500 ease-in-out transform hover:translate-y-2" id="about">
        <section className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-10">

          <div className="flex-1">
            <div className="line-container mb-6">
              <div className="line start"></div>
              <h2 className="text-[#64ffda] text-3xl md:text-4xl font-bold title">
                <div className='text-center lg:text-left sm:text-center'>
                  <span className="text-white">About Me</span>
                </div>
              </h2>
              <div className="line end"></div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center lg:space-x-8 md:space-x-10 text-justify">
              <div className="flex-1">
                <p className="text-[#8892b0] mb-6 leading-relaxed text-sm sm:text-base md:text-base pl-2 lg:pl-6 ">
                  Hello! I'm Kamal Banjade, a passionate web creator with a journey that began in 2018, ignited by the thrill of building my very first form. The rush of accomplishment from that moment set me on a path of relentless learning and discovery in the realm of HTML, CSS, and beyond. I've since dedicated myself to learning everything, from the basics of coding to the latest technologies and best practices.
                </p>
                <p className="text-[#8892b0] mb-6 leading-relaxed text-sm sm:text-base md:text-base pl-2 lg:pl-6 ">
                  But my world isn't confined to code alone. A vibrant spectrum of creative interests fuels my imagination and enriches my work. With my camera, I capture the world in a tapestry of colors and viewpoints, reflecting its myriad hues and perspectives. Philosophy and literature are my intellectual playgrounds, offering boundless inspiration and fresh paradigms of thought. Writing poetry and stories is my canvas for emotional and creative expression, while music is my sanctuary, where playing various instruments brings me profound joy and tranquility.
                </p>
                <p className="text-[#8892b0] mb-6 leading-relaxed text-sm sm:text-base md:text-base pl-2 lg:pl-6 ">
                  Collaboration and communication are at the heart of my ethos. I believe that exceptional web development transcends mere coding; it's about forging deep connections with clients, and team members, understanding their visions and needs, and crafting solutions that not only meet but exceed expectations.
                </p>
                <p className="text-[#8892b0] mb-6 leading-relaxed text-sm sm:text-base md:text-base pl-2 lg:pl-6 ">
                  This blend of technical expertise and creative passion defines who I am as a developer and a person, always striving to weave beauty, functionality, and innovation into the fabric of the web.
                </p>
              </div>
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start mb-8 lg:mb-0">
                <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-64 lg:h-64 overflow-hidden rounded-lg shadow-lg transform floating hover-effect relative">
                  <div className="absolute inset-0 bg-[#0a192f] opacity-70 rounded-lg transition-opacity duration-300 ease-in-out z-10 hover:opacity-0"></div>
                  <img loading="lazy" alt="Kamal Banjade" className={`object-cover w-full h-full rounded-lg z-20 ${hovered ? 'object-contain' : ''}`} src='/hehe.png' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
               @keyframes fadeIn {
                0% {
                opacity: 0;
                transform: scale(0.85);
              }
             50% {
              opacity: 0.5;
             transform: scale(1.02);
                 }
                    100% {
                opacity: 1;
            transform: scale(1);
    }
}

.fadeIn {
    animation: fadeIn 1s ease-in-out;
}
            `}</style>
    </div>

  );
}
export default About;
