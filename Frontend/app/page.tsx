"use client";
import React, { useEffect, useState, useRef } from 'react';
import { ModalProvider, useModal } from '@/components/ui/modalcontext';
import Loader from './loader';
import Navbar from './navbar';
import Home from "./Home";
import About from "./about";
import Gallery from "./Gallery";
import Skills from "./Skills";
import Blogs from "./Blogs";
import Projects from "./Project";
import Contact from './contact';
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
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      const handleClickOutside = (event: MouseEvent) => {
        if (!sectionRefs.current) return;

        for (let ref in sectionRefs.current) {
          if (sectionRefs.current[ref] && !sectionRefs.current[ref]!.contains(event.target as Node)) {
            closeModal();
          }
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [closeModal, loading]);

  useEffect(() => {
    if (!loading) {
      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isModalOpen) {
          closeModal();
        }
      };

      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isModalOpen, closeModal, loading]);

  useEffect(() => {
    if (!loading) {
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
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      sectionsToObserve.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.observe(section);
        }
      });

      return () => {
        sectionsToObserve.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    }
  }, [loading]);

  return (
    <div key="1" className="bg-[#0a192f] min-h-screen flex flex-col text-white flex-1 0 0">
      <style jsx>{scrollbarStyles}</style>

      {loading && <Loader />}
      {!loading && (
        <div ref={el => { sectionRefs.current['app'] = el; }}>
          <Navbar />
          <div className="h-20 md:h-28" />
          <section id="home">
            <Home />
          </section>
          <div className="h-20 md:h-20" />
          <section id="about"><About /></section>
          <div className="h-20 md:h-20" />
          <section id="gallery"><Gallery /></section>
          <div className="h-20 md:h-20" />
          <section id="skills"><Skills /></section>
          <div className="h-20 md:h-20" />
          <section id="blogs"><Blogs /></section>
          <div className="h-20 md:h-20" />
          <section id="projects"><Projects /></section>
          <div className="h-20 md:h-20" />
          <section id="contact"><Contact /></section>
          <Footer />
        </div>
      )}
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
