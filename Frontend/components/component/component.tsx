// "use client"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from 'react';
// import Navbar from './navbar'; // Adjustthe path as necessary



// const scrollbarStyles = `

// ::-webkit-scrollbar {
//   width: 6px;
// }

// ::-webkit-scrollbar-track {
//   background: #0a192f; 
// }

// ::-webkit-scrollbar-thumb {
//   background: #64ffda; 
//   border-radius: 3px;                                   
// }
                              
// `;
// export default function Component() {

//   const [expanded1, setExpanded1] = useState(false);
//   const [expanded2, setExpanded2] = useState(false);
//   const [expanded3, setExpanded3] = useState(false);

//   const toggleExpansion1 = () => {
//     setExpanded1(!expanded1);
//     setExpanded2(false);
//     setExpanded3(false);
//   };

//   const toggleExpansion2 = () => {
//     setExpanded2(!expanded2);
//     setExpanded1(false);
//     setExpanded3(false);
//   };

//   const toggleExpansion3 = () => {
//     setExpanded3(!expanded3);
//     setExpanded1(false);
//     setExpanded2(false);
//   };

  
//   function getNavbarHeight() {
//     const navbar = document.querySelector('nav');
//     if (navbar) {
//       return navbar.offsetHeight;
//     }
//     return 0;
//   }
//   function scrollToSection(sectionId: string) {
//     const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const sectionTop = section.offsetTop - navbarHeight;
//       const scrollOptions: ScrollToOptions = {
//         top: sectionTop,
//         behavior: 'smooth'
//       };
//       const delay = 60;
//       setTimeout(() => {
//         window.scrollTo(scrollOptions);
//       }, delay);
//     }
//   }

//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//   }, []);
//   return (


//     <div key="1" className="bg-[#0a192f] min-h-screen flex flex-col text-white">
//      <div>
//             <Navbar />
//             {/* <section id="home" className="h-screen bg-blue-500">Home Section</section>
//             <section id="about" className="h-screen bg-green-500">About Section</section>
//             <section id="gallery" className="h-screen bg-red-500">Gallery Section</section>
//             <section id="skills" className="h-screen bg-yellow-500">Skills Section</section>
//             <section id="blogs" className="h-screen bg-purple-500">Blogs Section</section> */}
        
//       {/* <nav className="sticky top-0 z-10 bg-[#0a192f] bg-opacity-95 flex justify-between items-center py-2 md:py-4 px-8 md:px-12 lg:px-16 shadow-lg shadow-gray-800/50 dark:shadow-gray-800">
        
//         <Link href="#" passHref>
//           <span onClick={() => scrollToSection('home')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//             <HomeIcon className="h-6 w-6 text-[#ccd6f6] hover:text-[#64ffda]" />
//           </span>
//         </Link>
//         <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
//           <Link href="#about" passHref>
//             <span onClick={() => scrollToSection('about')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//               About
//             </span>
//           </Link>

//           <Link href="#gallery" passHref>
//             <span onClick={() => scrollToSection('gallery')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//               Gallery
//             </span>
//           </Link>
//           <Link href="#skills" passHref>
//             <span onClick={() => scrollToSection('skills')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//               Skills
//             </span>
//           </Link>
//           <Link href="#blogs" passHref>
//             <span onClick={() => scrollToSection('blogs')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//               Blogs
//             </span>
//           </Link>

//           <button className="bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] py-3 px-7 rounded-md border border-[#64ffda] transition duration-300">Resume</button>

//         </div>
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button className="md:hidden" variant="icon">
//               <MenuIcon className="h-6 w-6 text-[#ccd6f6] hover:text-[#64ffda]" />
//               <span className="sr-only">Toggle Menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent className="bg-[#0a192f]" side="right">
//             <div className="grid gap-2 py-4 text-right">

//               <Link href="#about" passHref>
//                 <span onClick={() => scrollToSection('about')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//                   About
//                 </span>
//               </Link>

//               <Link href="#gallery" passHref>
//                 <span onClick={() => scrollToSection('gallery')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//                   Gallery
//                 </span>
//               </Link>
//               <Link href="#skills" passHref>
//                 <span onClick={() => scrollToSection('skills')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//                   Skills
//                 </span>
//               </Link>
//               <Link href="#blogs" passHref>
//                 <span onClick={() => scrollToSection('blogs')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//                   Blogs
//                 </span>
//               </Link>
//               {/* <Link href="#projects" passHref>
//         <span onClick={() => scrollToSection('projects')} className="flex w-full items-center py-2 text-lg font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
//           Projects
//         </span>
//       </Link> */}
//               {/* <button className="bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] py-3 px-8 rounded-md border border-[#64ffda] transition duration-300">
//                 Resume
//               </button>
//             </div>

//           </SheetContent>
//         </Sheet>
//       </nav> */} 



//       <div className="h-6 md:h-16" />

//       <div className="container flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-left mt-8 p-4 sm:p-6 md:p-8">

//         {isClient && <h1 className="text-[#64ffda] text-3xl md:text-4xl lg:text-4xl font-bold mb-4">🚀 Welcome! I'm</h1>}
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#a8b2d1] leading-snug md:leading-tight lg:leading-tight">Kamal Banjade.</h2>
//         <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-[#8892b0] leading-snug md:leading-tight lg:leading-tight">19-Year-Old Web Explorer Pursuing BSc.CSIT.</h3>
//         <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 text-[#beccf7] leading-snug md:leading-tight lg:leading-tight">Fueled by Pixels, Driven by Passion: I Craft with Code and Creativity.</h4>
//         <p className="mb-8 text-sm md:text-base lg:text-lg leading-snug md:leading-tight lg:leading-tight text-[#ccd6f6]">Discover my projects, expertise, and journey in my digital realm.</p>

//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//           <Link href="#projects" passHref>
//             <button onClick={() => scrollToSection('projects')} className="bg-[#0a192f] hover:bg-teal-600 text-teal-500 font-semibold py-3 px-6 rounded-md border border-teal-500 transition duration-300">
//               View Projects
//             </button>
//           </Link>
//           <button className="bg-transparent hover:bg-white hover:text-teal-500 text-white font-semibold py-3 px-6 rounded-md border border-white transition duration-300">
//             Contact Me
//           </button>
//         </div>
//       </div>

//       <div className="h-5 md:h-16" />
//       <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform  md:hover:scale-100 lg:hover:scale-100 hover:translate-y-1" id="about" >
//         <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
//           <div className="flex-1">
//             <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
//               <span className="text-white">About me</span>
//             </h2>
//             <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 md:space-x-8">
//               <div className="flex-1">
//                 <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
//                   Hello! My name is Kamal Banjade. I love making stuff for the internet. It all started in 2018 when I built my first form. The rush of excitement I felt sparked a desire to dive deeper into HTML and CSS. Since then, I've been on a journey of learning and exploring everything I can about web development.
//                 </p>
//                 <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
//                   Besides web development, my interests span across various creative pursuits. I'm an avid photographer, followed by a fascination with philosophy and literature. Writing poetry and stories is a cherished pastime, and I find joy in playing musical instruments as well.
//                 </p>
//                 <p className="text-[#8892b0] mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
//                   I pride myself on being a skilled communicator and collaborator. I firmly believe that successful web development goes beyond just writing code. It involves close collaboration with clients, stakeholders, and team members to comprehend their requirements and provide solutions that surpass their expectations.
//                 </p>
//               </div>
//               <div className="flex-shrink-0 w-full sm:w-auto flex justify-center md:justify-start">
//                 <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-lg border border-teal-500 transform hover:scale-105 transition-transform duration-300">
//                   <img loading="lazy" alt="Kamal Banjade" className="object-cover w-full h-full" src='/pp.JPG' />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>


//       {/* <div className="h-5 md:h-16" />
//       <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
//         <Carousel />
//       </div> */}

// <div className="h-6 md:h-16" />
//       <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="gallery">
//         <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
//           <div className="flex-1">
//             <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
//               <span className="text-white">Gallery</span>
//             </h2>
//             <p className="text-[#8892b0] mb-8">
//               Embark on a visual journey through my gallery. Each image captures a unique moment, a story waiting to be told, a piece of beauty longing to be shared.
//             </p>

//             <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4">

//               {/* Repeat this structure for each image */}
//               <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
//                 <img
//                   alt="Gallery 1"
//                   className="rounded-lg object-cover w-full h-full"
//                   src="/placeholder.svg"
//                   style={{
//                     maxWidth: "calc(100% )", // Adjust the value as needed
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
//                   <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     Project Title
//                   </h3>
//                   <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     This is a description of the project, showcasing the work that was done.
//                   </p>
//                 </div>
//               </div>

//               {/* End of repeated structure */}
//               <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
//                 <img
//                   alt="Gallery 1"
//                   className="rounded-lg object-cover w-full h-full"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
//                   <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     Project Title
//                   </h3>
//                   <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     This is a description of the project, showcasing the work that was done.
//                   </p>
//                 </div>
//               </div>
//               <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
//                 <img
//                   alt="Gallery 1"
//                   className="rounded-lg object-cover w-full h-full"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
//                   <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     Project Title
//                   </h3>
//                   <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     This is a description of the project, showcasing the work that was done.
//                   </p>
//                 </div>
//               </div>
//               <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
//                 <img
//                   alt="Gallery 1"
//                   className="rounded-lg object-cover w-full h-full"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
//                   <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     Project Title
//                   </h3>
//                   <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     This is a description of the project, showcasing the work that was done.
//                   </p>
//                 </div>
//               </div>
//               <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
//                 <img
//                   alt="Gallery 1"
//                   className="rounded-lg object-cover w-full h-full"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
//                   <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     Project Title
//                   </h3>
//                   <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     This is a description of the project, showcasing the work that was done.
//                   </p>
//                 </div>
//               </div>
//               <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
//                 <img
//                   alt="Gallery 1"
//                   className="rounded-lg object-cover w-full h-full"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "1/1",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
//                   <h3 className="text-white text-lg font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     Project Title
//                   </h3>
//                   <p className="text-gray-400 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
//                     This is a description of the project, showcasing the work that was done.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>

//       </div>


//       <div className="h-5 md:h-16" />
//       <div className="max-w-6xl lg:mx-14  bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="skills">
//         <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
//           <div className="flex-1">
//             <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-left">
//               <span className="text-white">Skills</span>
//             </h2>
//             <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
//               <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
//                 <h3 className="text-[#64ffda] text-base md:text-lg lg:text-lg font-bold mb-4">Front-End</h3>
//                 <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
//                   <li>HTML5</li>
//                   <li>CSS3</li>
//                   <li>JavaScript</li>
//                   <li>React.js</li>
//                   <li>Next.js</li>
//                 </ul>
//               </div>
//               <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
//                 <h3 className="text-[#64ffda] text-base md:text-lg lg:text-lg font-bold mb-4">Back-End</h3>
//                 <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
//                   <li>Node.js</li>
//                   <li>Express.js</li>
//                   <li>MongoDB</li>
//                   <li>PostgreSQL</li>
//                   <li>RESTful APIs</li>
//                 </ul>
//               </div>
//               <div className="bg-[#112240] rounded-lg p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#0e1a32]">
//                 <h3 className="text-[#64ffda] text-base md:text-lg lg:text-lg font-bold mb-4">Tools</h3>
//                 <ul className="list-disc pl-4 text-sm md:text-base lg:text-base text-[#8892b0]">
//                   <li>Git</li>
//                   <li>GitHub</li>
//                   <li>Figma</li>
//                   <li>Postman</li>
//                   <li>Responsive Design</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="h-2 md:h-6" />
//             <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
//               <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="text-[#ccd6f6] text-xs sm:text-sm md:text-base lg:text-lg font-bold">Front-End</h3>
//                   <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-50">70%</div>
//                 </div>
//                 <div className="mt-1">
//                   <div className="h-1 sm:h-2 w-full rounded-full bg-gray-700">
//                     <div
//                       aria-valuemax={100}
//                       aria-valuemin={0}
//                       aria-valuenow={70}
//                       className="h-full w-[70%] rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
//                       role="progressbar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="text-[#ccd6f6] text-xs sm:text-sm md:text-base lg:text-lg font-bold">Back-End</h3>
//                   <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-50">60%</div>
//                 </div>
//                 <div className="mt-1">
//                   <div className="h-1 sm:h-2 w-full rounded-full bg-gray-700">
//                     <div
//                       aria-valuemax={100}
//                       aria-valuemin={0}
//                       aria-valuenow={60}
//                       className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
//                       role="progressbar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="rounded-lg bg-gray-800 p-3 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="text-[#ccd6f6] text-xs sm:text-sm md:text-base lg:text-lg font-bold">Tools</h3>
//                   <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-50">80%</div>
//                 </div>
//                 <div className="mt-1">
//                   <div className="h-1 sm:h-2 w-full rounded-full bg-gray-700">
//                     <div
//                       aria-valuemax={100}
//                       aria-valuemin={0}
//                       aria-valuenow={80}
//                       className="h-full w-[80%] rounded-full bg-gradient-to-r from-[#77f1d5] to-[#aff7e6] transition-all duration-500 ease-in-out"
//                       role="progressbar"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="h-20" />

//       <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1" id="blogs">
//         <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
//           <div className="flex-1">
//             <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
//               <span className="text-white">Blogs</span>
//             </h2>
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
//               Explore a curated collection of my favorite poems.
//             </p>
//             <div className="h-6" />
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
//               {/* Box 1 */}
//               <div className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expanded1 ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}>
//                 <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">Sunset</h3>
//                 <div className="text-[#ccd6f6] pb-10">
//                   <p className="text-sm mb-4">
//                     As the day gently fades with whispered sighs, <br />
//                     And the sky in evening's colors lies, <br />
//                     Some find solace in twilight's warm embrace, <br />
//                     While others grapple with a different face.
//                   </p>
//                   <p className="text-sm mb-4">
//                     The sky, a canvas of vibrant hue, <br />
//                     A reminder for some of their deep blues, <br />
//                     Dreams unfulfilled, aspirations astray, <br />
//                     In sunset's glow, they silently sway.
//                   </p>
//                   {expanded1 ? (
//                     <>
//                       <p className="text-sm mb-4">
//                         Yearning for connection, warmth, and light, <br />
//                         Amidst the crowd, feeling lost in the fight, <br />
//                         The sunset's beauty sparks dreams anew, <br />
//                         Yet doubts creep in, tearing at what's true.
//                       </p>
//                       <p className="text-sm mb-4">
//                         Gratitude, a virtue, hard to find, <br />
//                         Beneath beauty, life's trials entwined, <br />
//                         Loneliness lurking in shadows near, <br />
//                         In dusk's embrace, longing is clear.
//                       </p>
//                       <p className="text-sm mb-4">
//                         Mental battles hidden, fears untold, <br />
//                         In twilight's quiet, they take hold, <br />
//                         Entwining with sunset's warm embrace, <br />
//                         Revealing stories in shared grace.
//                       </p>
//                       <button
//                         className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
//                         onClick={toggleExpansion1}
//                       >
//                         View Less
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
//                       onClick={toggleExpansion1}
//                     >
//                       continue..
//                     </button>
//                   )}
//                 </div>
//               </div>

//               {/* Box 2 */}
//               <div className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expanded2 ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}>
//                 <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">Sailing Life's Shifting Seas.</h3>
//                 <div className="text-[#ccd6f6] pb-10">
//                   <p className="text-sm mb-4">
//                     In a bustling Nepal Yatayat shuttle's gleam, <br />
//                     I glimpsed a girl, lost in a texting stream.<br />
//                     In a group "Best Friend Forever", her voice found sway,<br />
//                     A moment shared, life's ballet, in its play.
//                   </p>
//                   <p className="text-sm mb-4">
//                     In my mind's vast expanse, a thought took flight,<br />
//                     "Does 'forever' truly endure, or vanish from sight?"<br />
//                     Memories danced, like reels of old,<br />
//                     In groups we typed, our stories told.
//                   </p>
//                   {expanded2 ? (
//                     <>
//                       <p className="text-sm mb-4">
//                         "Best Fellows Forever," our joyful decree,<br />
//                         Sharing laughs, memes, in harmonious spree.<br />
//                         Intentions pure, to brighten each day,<br />
//                         Through giggles and grins, troubles kept at bay.
//                       </p>
//                       <p className="text-sm mb-4">
//                         But time sweeps on, change its constant call,<br />
//                         In memories, we cherish, life's rise and fall.<br />
//                         From laughter-filled moments, to life's grand quest,<br />
//                         We journey together, in trial and test.
//                       </p>
//                       <p className="text-sm mb-4">
//                         In today's whirlwind, schedules tight and grand,<br />
//                         Seeking purpose, in life's shifting sand.<br />
//                         No blame to assign, for the natural drift,<br />
//                         As priorities shift, and perspectives lift.
//                       </p>
//                       <p className="text-sm mb-4">
//                         Good memories sacrificed, as new paths we tread,<br />
//                         A bittersweet choice, life's dance we wed.<br />
//                         Yet, let's not forget, those moments so free,<br />
//                         For they shape who we are, in life's grand decree.
//                       </p>
//                       <button
//                         className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
//                         onClick={toggleExpansion2}
//                       >
//                         View Less
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
//                       onClick={toggleExpansion2}
//                     >
//                       continue..
//                     </button>
//                   )}
//                 </div>
//               </div>

//               {/* Box 3 */}
//               <div className={`bg-gradient-to-r from-[#112240] to-[#0a192f] rounded-lg p-4 sm:p-6 shadow-xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#0e1a32] hover:to-[#112240] ${expanded3 ? 'h-auto' : 'h-[21rem] sm:h-[24rem] lg:h-[26rem]'} sm:mx-8 lg:mx-auto max-w-md`}>
//                 <h3 className="text-[#64ffda] text-center text-lg sm:text-xl lg:text-xl font-bold mb-4">A Determined Quest.</h3>
//                 <div className="text-[#ccd6f6] pb-10">
//                   <p className="text-sm mb-4">
//                     Far away from my parents' embrace, I chase my dreams, <br />
//                     In a lonely city, where no bloodlines gleam.<br />
//                     Demotivation washes over me in a sudden wave,<br />
//                     But I rise above, determined to be brave.
//                   </p>
//                   <p className="text-sm mb-4">
//                     Pollution fills the air, obscuring the sky,<br />
//                     Yet I find solace in nature's gentle sigh. <br />
//                     Academic stress and homesickness weigh me down,<br />
//                     But I seek strength within, wearing resilience as a crown.
//                   </p>
//                   {expanded3 ? (
//                     <>
//                       <p className="text-sm mb-4">
//                         In this foreign realm, I stand tall and strong,<br />
//                         Creating my own path amidst the throng.<br />
//                         With dreams as my compass, I defy the strife,<br />
//                         Navigating the challenges that define my life.
//                       </p>
//                       <p className="text-sm mb-4">
//                         Though far from my parents' arms, love transcends,<br />
//                         As I forge connections with newfound friends.<br />
//                         Through trials and hurdles, I'll persevere,<br />
//                         For my dreams, I'll fight with unwavering cheer.
//                       </p>
//                       <p className="text-sm mb-4">
//                         So in this lonely city, I'll carve my own way,<br />
//                         Embracing challenges, come what may.<br />
//                         With determination as my guiding light,<br />
//                         I'll overcome obstacles, shining bright.
//                       </p>
//                       <button
//                         className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
//                         onClick={toggleExpansion3}
//                       >
//                         View Less
//                       </button>
//                     </>
//                   ) : (
//                     <button
//                       className="absolute right-0 bottom-0 mb-4 mr-4 sm:mr-5 px-4 sm:px-5 py-2 bg-transparent hover:bg-[#0a192f] hover:text-teal-500 font-semibold text-[#64ffda] rounded-md border border-[#64ffda] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
//                       onClick={toggleExpansion3}
//                     >
//                       continue..
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div className="h-20" />
//       <section className="flex-1 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-left mt-8" id="projects">
//         <div className="container">
//           <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-left">
//             <span className="text-white">Projects</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             <div className="bg-[#112240] rounded-lg p-6">
//               <img
//                 alt="Project 1"
//                 className="rounded-lg object-cover w-full h-40 mb-4"
//                 height={300}
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "400/300",
//                   objectFit: "cover",
//                 }}
//                 width={400}
//               />
//               <h3 className="text-[#ccd6f6] text-lg font-bold mb-2">Project 1</h3>
//               <p className="text-[#8892b0] mb-4">
//                 A web application that helps users manage their tasks and projects more efficiently.
//               </p>
//               <div className="flex justify-between">
//                 <Button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">View Project</Button>
//                 <Button className="bg-transparent hover:bg-white hover:text-teal-500 text-white py-2 px-4 rounded-md border border-white">
//                   GitHub
//                 </Button>
//               </div>
//             </div>
//             <div className="bg-[#112240] rounded-lg p-6">
//               <img
//                 alt="Project 2"
//                 className="rounded-lg object-cover w-full h-40 mb-4"
//                 height={300}
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "400/300",
//                   objectFit: "cover",
//                 }}
//                 width={400}
//               />
//               <h3 className="text-[#ccd6f6] text-lg font-bold mb-2">Project 2</h3>
//               <p className="text-[#8892b0] mb-4">
//                 A responsive e-commerce website that allows users to browse and purchase products.
//               </p>
//               <div className="flex justify-between">
//                 <Button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">View Project</Button>
//                 <Button className="bg-transparent hover:bg-white hover:text-teal-500 text-white py-2 px-4 rounded-md border border-white">
//                   GitHub
//                 </Button>
//               </div>
//             </div>
//             <div className="bg-[#112240] rounded-lg p-6">
//               <img
//                 alt="Project 1"
//                 className="rounded-lg object-cover w-full h-40 mb-4"
//                 height={300}
//                 src="/placeholder.svg"
//                 style={{
//                   aspectRatio: "400/300",
//                   objectFit: "cover",
//                 }}
//                 width={400}
//               />
//               <h3 className="text-[#ccd6f6] text-lg font-bold mb-2">Project 3</h3>
//               <p className="text-[#8892b0] mb-4">
//                 A web application that helps users manage their tasks and projects more efficiently.
//               </p>
//               <div className="flex justify-between">
//                 <Button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">View Project</Button>
//                 <Button className="bg-transparent hover:bg-white hover:text-teal-500 text-white py-2 px-4 rounded-md border border-white">
//                   GitHub
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="h-20" />
//       <style jsx>{scrollbarStyles}</style>
//       </div>
//     </div >

//   )

// }

// // const handleRefresh = () => {
// //   window.location.reload(); // Refresh the page
// //   <button onClick={handleRefresh}>Refresh</button>

// // };
// // const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
// //   const router = useRouter();

// //   const handleClick = () => {
// //     router.push("/"); // Navigate to the home page
// //     <MenuIcon onClick={handleClick} />

// //   };

// //   return (
// //     <Link href="/" passHref legacyBehavior>
// //       <svg
// //         {...props}
// //         xmlns="http://www.w3.org/2000/svg"
// //         width="24"
// //         height="24"
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       >
// //         <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
// //         <polyline points="9 22 9 12 15 12 15 22" />
// //       </svg>

// //     </Link>
// //   );
// // };
// // const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
// //   return (
// //     <a>
// //       <svg
// //         {...props}
// //         xmlns="http://www.w3.org/2000/svg"
// //         width="24"
// //         height="24"
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       >
// //         <line x1="4" x2="20" y1="12" y2="12" />
// //         <line x1="4" x2="20" y1="6" y2="6" />
// //         <line x1="4" x2="20" y1="18" y2="18" />
// //       </svg>
// //     </a>
// //   );
// // };
// // const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M5 12h14" />
// //       <path d="m12 5 7 7-7 7" />
// //     </svg>
// //   )
// // };