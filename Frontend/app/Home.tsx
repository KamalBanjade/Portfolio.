import React, { useState, useEffect } from 'react';
import TypingEffect from 'react-typing-effect';
import Cookies from '@/components/js-cookie';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
    const section = document.getElementById(sectionId);
    if (section) {
      let offsetAdjustment = -50;
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        offsetAdjustment = -10;
      }

      const sectionTop = section.offsetTop - navbarHeight + offsetAdjustment;
      const scrollOptions: ScrollToOptions = {
        top: sectionTop,
        behavior: 'smooth'
      };

      window.scrollTo(scrollOptions);
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const windowScrollY = window.scrollY;
      if (windowScrollY < 50) {
        setActiveSection('home');
        return;
      }

      const sections = ['projects', 'contact'];
      let foundActiveSection = false;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight;
          const sectionHeight = section.offsetHeight;

          if (windowScrollY >= sectionTop - 60 && windowScrollY < sectionTop + sectionHeight - 60) {
            setActiveSection(sectionId);
            window.history.replaceState(null, '', `#${sectionId}`);
            foundActiveSection = true;
            break;
          }
        }
      }
      if (!foundActiveSection) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    Cookies.set('activeSection', activeSection);
    window.history.replaceState(null, '', `#${activeSection}`);
  }, [activeSection]);

  return (
    <div className="fadeIn">
      <div className="max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] rounded-lg p-6 md:p-10 relative transition duration-500 ease-in-out transform hover:translate-y-2 hover:scale-100">
        <h1 className="text-[#64ffda] text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
          🚀<TypingEffect
            text={["Hello!","नमस्ते!","¡Hola!", "Bonjour!", "こんにちは!", "Hallo!", "Ciao!", "Olá!"]}
            speed={100}
            eraseSpeed={100}
            eraseDelay={1000}
            typingDelay={100}
          /> I'm
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#a8b2d1] leading-snug md:leading-tight lg:leading-tight">Kamal Banjade.</h2>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-[#8892b0] leading-snug md:leading-tight lg:leading-tight">19-Year-Old Web Explorer Pursuing BSc.CSIT.</h3>
        <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-[#beccf7] leading-snug md:leading-tight lg:leading-tight">Fueled by Pixels, Driven by Passion: I Craft with Code and Creativity.</h4>
        <p className="mb-8 text-sm md:text-base lg:text-lg leading-snug md:leading-tight lg:leading-tight text-[#ccd6f6]">Discover my projects, expertise, and journey in my digital realm.</p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-[#0a192f] hover:bg-teal-600 text-teal-500 font-semibold py-3 px-6 rounded-md border border-teal-500 transition duration-300 transform hover:scale-105"
            style={{ width: '158px', height: '50px' }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent hover:bg-white hover:text-teal-500 text-white font-semibold py-3 px-6 rounded-md border border-white transition duration-300 transform hover:scale-105"
            style={{ width: '158px', height: '50px' }}
          >
            Contact Me
          </button>
        </div>
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
};

export default Home;
