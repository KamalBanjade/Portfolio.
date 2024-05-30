import React from 'react';
const About: React.FC = () => {
  return (
    <div className=" max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl relative transition duration-500 ease-in-out transform md:hover:scale-100 lg:hover:scale-100 hover:translate-y-1" id="about">
      <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex-1 ">
          <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <div className='text-center sm:text-left'>
            <span className="text-white ">About me</span>
            </div>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 md:space-x-8">
            <div className="flex-1">
              <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
                Hello! My name is Kamal Banjade. I love making stuff for the internet. It all started in 2018 when I built my first form. The rush of excitement I felt sparked a desire to dive deeper into HTML and CSS. Since then, I've been on a journey of learning and exploring everything I can about web development.
              </p>
              <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
                Besides web development, my interests span across various creative pursuits. I'm an avid photographer, followed by a fascination with philosophy and literature. Writing poetry and stories is a cherished pastime, and I find joy in playing musical instruments as well.
              </p>
              <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
                I pride myself on being a skilled communicator and collaborator. I firmly believe that successful web development goes beyond just writing code. It involves close collaboration with clients, stakeholders, and team members to comprehend their requirements and provide solutions that surpass their expectations.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center md:justify-start sticky-container">
              <div className="w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-lg shadow-lg border border-teal-500 transform hover:scale-105 transition-transform duration-300 sticky-image">
                <img loading="lazy" alt="Kamal Banjade" className="object-cover w-full h-full" src='/pp.JPG' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
