import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { FaBars } from 'react-icons/fa';
import Cookies from '@/components/js-cookie';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const sections = ['about', 'gallery', 'skills', 'blogs'];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop - navbarHeight;
            const scrollOptions: ScrollToOptions = {
                top: sectionTop,
                behavior: 'smooth'
            };
            const delay = 60;
            setTimeout(() => {
                window.scrollTo(scrollOptions);
            }, delay);
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

            let foundActiveSection = false;

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop - navbarHeight;
                    const sectionHeight = section.offsetHeight;

                    if (windowScrollY >= sectionTop && windowScrollY < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
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
    }, [sections]);

    useEffect(() => {
        Cookies.set('activeSection', activeSection);
        window.history.replaceState(null, '', `#${activeSection}`);
    }, [activeSection]);

    return (
        <nav className="sticky top-0 z-10 bg-[#0a192f] bg-opacity-95 flex justify-between items-center py-2 md:py-4 px-8 md:px-12 lg:px-16 shadow-lg shadow-gray-800/50 dark:shadow-gray-800 ">
            <Link href="#home" passHref>
                <button
                    id="homeButton"
                    className="home-button"
                    title="Home"
                    onClick={(event) => {
                        if (event.detail === 1) {
                            scrollToSection('homeButton');
                        } else if (event.detail === 2) {
                            window.location.reload();
                        }
                    }}
                >
                    <span
                        className={`flex w-full items-center py-2 text-lg font-semibold ${activeSection === 'home' ? 'text-[#64ffda]' : 'text-[#ccd6f6]'}`}
                    >
                        <svg className="w-8 h-8 hex-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="hexagon" points="50,10 85,32 85,68 50,90 15,68 15,32" fill="none" stroke={activeSection === 'home' ? '#64ffda' : '#ccd6f6'} strokeWidth="5" />
                            <text className="hex-text" x="50" y="53" textAnchor="middle" alignmentBaseline="middle" fill={activeSection === 'home' ? '#64ffda' : '#ccd6f6'} fontSize="30px" fontWeight="bold">
                                K
                            </text>
                        </svg>
                    </span>
                </button>
            </Link>
            <style jsx>{`
                .home-button .hex-svg:hover .hexagon {
                    stroke: #64ffda !important;
                }
                .home-button .hex-svg:hover .hex-text {
                    fill: #64ffda !important;
                }
            `}</style>

            <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                {sections.map(sectionId => (
                    <Link key={sectionId} href={`#${sectionId}`} passHref>
                        <span
                            onClick={() => scrollToSection(sectionId)}
                            className={`flex w-full items-center py-2 text-lg font-semibold transition-transform duration-200 transform-gpu hover:scale-105 ${activeSection === sectionId ? 'text-[#64ffda]' : 'text-[#ccd6f6]'} hover:text-[#64ffda]`}
                        >
                            {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                        </span>
                    </Link>
                ))}
                <button className="bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] py-3 px-7 rounded-md border border-[#64ffda] transition duration-300 transform hover:scale-105">
                    Resume
                </button>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="md:hidden" variant="icon">
                        <div style={{ fontSize: '1.5em' }} className="h-6 w-10 text-[#ccd6f6] hover:text-[#64ffda]">
                            <FaBars />
                        </div>
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>

                <SheetContent className="bg-[#0a192f] transform transition-transform duration-300 ease-in-out">
                    <div className="grid gap-2 py-4">
                        {sections.map(sectionId => (
                            <Link key={sectionId} href={`#${sectionId}`} passHref>
                                <span
                                    onClick={() => scrollToSection(sectionId)}
                                    className={`flex w-full items-center py-2 text-lg font-semibold transition-transform duration-200 transform-gpu hover:scale-105 ${activeSection === sectionId ? 'text-[#64ffda]' : 'text-[#ccd6f6]'} hover:text-[#64ffda] text-left`}
                                    style={{ textAlign: 'left' }}
                                >
                                    {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                                </span>
                            </Link>
                        ))}
                        <button className="bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] py-3 px-7 rounded-md border border-[#64ffda] transition duration-300 transform hover:scale-105">
                            Resume
                        </button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default Navbar;
