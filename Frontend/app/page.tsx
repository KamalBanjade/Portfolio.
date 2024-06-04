"use client"
import React, { useEffect } from 'react';
import { ModalProvider, useModal } from '@/components/ui/modalcontext';
import Loader from './loader';
import Navbar from './navbar';
import Home from "./Home";
import About from "./about";
import Gallery from "./Gallery";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Projects from "./Project";
import GetInTouch from './contact';
import Footer from './footer';

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

const sectionsToObserve = ['projects', 'contact'];

const App: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const windowScrollY = window.scrollY;
  
      for (let sectionId of sectionsToObserve) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - navbarHeight;
          const sectionHeight = section.offsetHeight;
  
          if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
            console.log("Currently in view:", sectionId);
            window.history.replaceState(null, '', `#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionsToObserve]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div key="1" className="bg-[#0a192f] min-h-screen flex flex-col text-white">
      <style jsx>{scrollbarStyles}</style>
      <div>
        <Loader />
      </div>
      <div>
        <Navbar />
        <div className="h-12 md:h-16" />
        <section><Home /></section>
        <div className="h-20 md:h-16" />
        <section><About /></section>
        <div className="h-20 md:h-16" />
        <section><Gallery /></section>
        <div className="h-20 md:h-16" />
        <section><Skills /></section>
        <div className="h-20 md:h-16" />
        <section><Blogs /></section>
        <div className="h-20 md:h-16" />
        <section><Projects /></section>
        <div className="h-20 md:h-16" />
        <section><GetInTouch /></section>
        <div className="fade-in"><Footer /></div>
      </div>
    </div>
  );
};

const WrappedApp: React.FC = () => {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  );
};

export default WrappedApp;
