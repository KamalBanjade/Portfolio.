import React, { useState } from 'react';

const About: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform md:hover:scale-100 lg:hover:scale-100 hover:translate-y-2" id="about">
      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        .hover-effect {
          transition-transform: duration-300;
          &:hover {
            transform: scale(1.05);
          }
        }
      `}</style>
      <section className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex-1">
          <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <div className='text-center lg:text-left sm:text-center '>
              <span className="text-white">About me</span>
            </div>
          </h2>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center lg:space-x-6 md:space-x-8 text-justify">
            <div className="flex-1">
              <p className="text-[#8892b0] mb-4 leading-relaxed text-xs sm:text-base md:text-md">
                Hello! I'm Kamal Banjade, a passionate web creator with a journey that began in 2018, ignited by the thrill of building my very first form. The rush of accomplishment from that moment set me on a path of relentless learning and discovery in the realm of HTML, CSS, and beyond. I've since dedicated myself to learning everything, from the basics of coding to the latest technologies and best practices.
              </p>
              <p className="text-[#8892b0] mb-4 leading-relaxed text-xs sm:text-base md:text-md">
                But my world isn't confined to code alone. A vibrant spectrum of creative interests fuels my imagination and enriches my work. With my camera, I capture the world in a tapestry of colors and viewpoints, reflecting its myriad hues and perspectives. Philosophy and literature are my intellectual playgrounds, offering boundless inspiration and fresh paradigms of thought. Writing poetry and stories is my canvas for emotional and creative expression, while music is my sanctuary, where playing various instruments brings me profound joy and tranquility.
              </p>
              <p className="text-[#8892b0] mb-4 leading-relaxed text-xs sm:text-base md:text-md">
                Collaboration and communication are at the heart of my ethos. I believe that exceptional web development transcends mere coding; it's about forging deep connections with clients, and team members, understanding their visions and needs, and crafting solutions that not only meet but exceed expectations.
              </p>
              <p className="text-[#8892b0] mb-4 leading-relaxed text-xs sm:text-base md:text-md">
                This blend of technical expertise and creative passion defines who I am as a developer and a person, always striving to weave beauty, functionality, and innovation into the fabric of the web.
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start mb-6 lg:mb-0">
              <div className="w-48 h-48 sm:w-48 sm:h-52 md:w-64 md:h-60 lg:w-64 lg:h-64 overflow-hidden rounded-lg shadow-lg transform floating hover-effect relative">
                <div className="absolute inset-0 bg-[#0a192f] opacity-55 rounded-lg transition-opacity duration-300 ease-in-out z-10 hover:opacity-0"></div>
                <img loading="lazy" alt="Kamal Banjade" className={`object-cover w-full h-full rounded-lg z-20 ${hovered ? 'object-contain' : ''}`} src='/hehe.png' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
