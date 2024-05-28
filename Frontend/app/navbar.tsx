import React from 'react';
import Link from 'next/link';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
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

    return (
        <nav className="sticky top-0 z-10 bg-[#0a192f] bg-opacity-95 flex justify-between items-center py-2 md:py-4 px-8 md:px-12 lg:px-16 shadow-lg shadow-gray-800/50 dark:shadow-gray-800">
            <Link href="#Home" passHref>
                <span onClick={() => scrollToSection('home')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                    <HomeIcon className="h-6 w-6 text-[#ccd6f6] hover:text-[#64ffda]" />
                </span>
            </Link>
            <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                <Link href="#about" passHref>
                    <span onClick={() => scrollToSection('about')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                        About
                    </span>
                </Link>
                <Link href="#gallery" passHref>
                    <span onClick={() => scrollToSection('gallery')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                        Gallery
                    </span>
                </Link>
                <Link href="#skills" passHref>
                    <span onClick={() => scrollToSection('skills')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                        Skills
                    </span>
                </Link>
                <Link href="#blogs" passHref>
                    <span onClick={() => scrollToSection('blogs')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                        Blogs
                    </span>
                </Link>
             <button className="bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] py-3 px-7 rounded-md border border-[#64ffda] transition duration-300">
                    Resume
                </button>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="md:hidden" variant="icon">
                        <MenuIcon className="h-6 w-6 text-[#ccd6f6] hover:text-[#64ffda]" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="bg-[#0a192f]" side="right">
                    <div className="grid gap-2 py-4 text-right">
                        <Link href="#about" passHref>
                            <span onClick={() => scrollToSection('about')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                                About
                            </span>
                        </Link>
                        <Link href="#gallery" passHref>
                            <span onClick={() => scrollToSection('gallery')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                                Gallery
                            </span>
                        </Link>
                        <Link href="#skills" passHref>
                            <span onClick={() => scrollToSection('skills')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                                Skills
                            </span>
                        </Link>
                        <Link href="#blogs" passHref>
                            <span onClick={() => scrollToSection('blogs')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                                Blogs
                            </span>
                        </Link>
                        <button className="bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] py-3 px-7 rounded-md border border-[#64ffda] transition duration-300">
                            Resume
                        </button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
};

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
      <a>
        <svg
        
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        </a>
    );
};

export default Navbar;
