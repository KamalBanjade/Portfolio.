// import { useEffect } from 'react';

// const useFadeInOnScroll = () => {
//   useEffect(() => {
//     // Adding the CSS styles dynamically
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .fade-in {
//         opacity: 0;
//         transform: translateY(20px);
//         transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//       }
      
//       .fade-in.visible {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     `;
//     document.head.appendChild(style);

//     const handleScroll = () => {
//       const elements = document.querySelectorAll('.fade-in');
//       elements.forEach((element) => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           element.classList.add('visible');
//         } else {
//           element.classList.remove('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial call to handle already visible elements

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.head.removeChild(style); // Clean up the style element
//     };
//   }, []);
// };

// export default useFadeInOnScroll;
