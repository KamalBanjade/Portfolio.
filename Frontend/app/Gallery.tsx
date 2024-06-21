import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '@/components/ui/modalcontext';
import { AiOutlineLeft, AiOutlineRight, AiOutlineEye } from 'react-icons/ai';
import Modal from '@/components/ui/modal';
import { BiImage } from 'react-icons/bi';
import './line.css';

interface Slide {
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

const Gallery: React.FC = () => {
  const { openModal, closeModal, isModalOpen } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [showOverlay, setShowOverlay] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<Slide[]>([]);
  const bigScreenSlides: Slide[] = [
    {
      images: [
        { src: '/sunset.jpg', title: 'Golden Dawn', description: 'A Symphony of Light and Flight' },
        { src: '/stupa.jpg', title: 'The Watching Eye', description: 'Awakened Serenity Beneath the Sunlit Skies ' },
        { src: '/mountains.png', title: 'Golden Horizon', description: "The Majestic Peaks Bathed in Dawn's Light" }
      ]
    },
    {
      images: [
        { src: '/bulbs.png', title: 'Whispers of Radiance', description: 'A Glowing Tapestry of Paper Lanterns' },
        { src: '/lights.jpg', title: 'Rainy Midnight Melodies ', description: 'Streetlamp Symphony in Raindrop Ripples' },
        { src: '/traffic.png', title: 'Urban Serenity at Dusk', description: 'Evening City Street, Serene Moment' }
      ]
    },
    {
      images: [
        { src: '/parrot.jpg', title: 'Emerald Majesty', description: 'A Jewel of Elegance in the Verdant Canopy' },
        { src: '/whiteflower.jpg', title: "Blossoms in Full Glory", description: 'White Blossoms In Spring Sunlight'},
        { src: '/woods.jpeg', title: "Nature's Symphony ", description: 'A Sprawling Canopy in a Peaceful Glade' }
      ]
    },
    {
      images: [
        { src: '/spotlight.png', title: 'Vibrant Glow', description: "Nature's Spotlight on Petal Perfection" },
        { src: '/water droplets.png', title: "Petals of Elegance", description: 'A Dew-Kissed Rose in Full Bloom' },
        { src: '/Butterfly.jpg', title: 'Golden Wings', description: 'The Delicate Dance in golden Haven' }
      ]
    }
  ];

  const smallScreenSlides: Slide[] = [
    {
      images: [
        { src: '/sunset.jpg', title: 'Golden Dawn', description: 'A Symphony of Light and Flight' },
        { src: '/stupa.jpg', title: 'The Watching Eye', description: 'Awakened Serenity Beneath the Sunlit Skies ' },
        { src: '/mountains.png', title: 'Golden Horizon', description: "The Majestic Peaks Bathed in Dawn's Light" },
        { src: '/bulbs.png', title: 'Whispers of Radiance', description: 'A Glowing Tapestry of Paper Lanterns' }
      ]
    },
    {
      images: [
        { src: '/lights.jpg', title: 'Rainy Midnight Melodies ', description: 'Streetlamp Symphony in Raindrop Ripples' },
        { src: '/traffic.png', title: 'Urban Serenity at Dusk', description: 'Evening City Street, Serene Moment' },
        { src: '/parrot.jpg', title: 'Emerald Majesty', description: 'A Jewel of Elegance in the Verdant Canopy' },
        { src: '/whiteflower.jpg', title: "Blossoms in Full Glory", description: 'White Blossoms In Spring Sunlight'}
      ]
    },
    {
      images: [
        { src: '/woods.jpeg', title: "Nature's Symphony ", description: 'A Sprawling Canopy in a Peaceful Glade' },
        { src: '/spotlight.png', title: 'Vibrant Glow', description: "Nature's Spotlight on Petal Perfection" },
        { src: '/water droplets.png', title: "Petals of Elegance", description: 'A Dew-Kissed Rose in Full Bloom' },
        { src: '/Butterfly.jpg', title: 'Golden Wings', description: 'The Delicate Dance in golden Haven' }
      ]
    }
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlides(smallScreenSlides);
      } else {
        setSlides(bigScreenSlides);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    const handleScroll = () => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.bottom <= 0) {
          setShowOverlay(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimating, currentIndex]);

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (!isAnimating && currentIndex !== index) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 700);
    }
  };

  const handleEyeClick = (index: number) => {
    setModalImageSrc(slides[currentIndex].images[index].src);
    openModal();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
    const startCoords = { x: touchStartX, y: touchStartY };

    const handleTouchMove = (ev: TouchEvent) => {
      const touchEndX = ev.touches[0].clientX;
      const touchEndY = ev.touches[0].clientY;
      const endCoords = { x: touchEndX, y: touchEndY };

      handleSwipe(startCoords, endCoords);
    };

    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleSwipe = (startCoords: { x: number; y: number }, endCoords: { x: number; y: number }) => {
    const dx = endCoords.x - startCoords.x;
    const dy = endCoords.y - startCoords.y;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx > absDy && absDx > 30) {
      if (dx > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
  };

  const renderGridItems = (images: { src: string; title: string; description: string; }[]) => (
    <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4 ${showOverlay ? 'pointer-events-none' : ''}`}>
      {images.map((image, index) => (
        <div className="relative group" key={index}>
          <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="aspect-[1/1] object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
              <h3 className="text-white text-xs sm:text-base font-semibold mb-1 transform translate-y-4 sm:translate-y-0 transition-transform duration-300 ease-in-out">
                {image.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 transform translate-y-4 sm:translate-y-0 transition-transform duration-300 ease-in-out">
                {image.description}
              </p>
            </div>
            <button
              onClick={() => handleEyeClick(index)}
              className="absolute top-2 right-2 bg-[#0a192f] bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none transition duration-300 animate-pulse"
            >
              <AiOutlineEye className="text-sm sm:text-lg hover:text-teal-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative" id="gallery" ref={galleryRef}>
      <div className={`max-w-auto mx-auto sm:mx-auto md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-16 bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#12233d] rounded-lg p-6 md:p-10 shadow-xl relative transition duration-500 ease-in-out transform hover:translate-y-2 ${isModalOpen ? 'blur' : ''}`}>
        <style jsx>{`
          .blur {
            filter: blur(10px);
            transition: filter 0.3s ease;
          }
        `}</style>
        <section className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-10">
          <div className="flex-1">
            <div className="line-container mb-6">
              <div className="line start"></div>
              <h2 className="text-[#64ffda] text-3xl md:text-4xl font-bold title">
                <div className='text-center lg:text-left sm:text-center'>
                  <span className="text-white">Gallery</span>
                </div>
              </h2>
              <div className="line end"></div>
            </div>
            <p className="text-[#8892b0] mb-8 leading-relaxed text-sm sm:text-base md:text-md text-center pl-7">
              Embark on a visual journey through my gallery. Each image captures a unique moment, a story waiting to be told, a piece of beauty longing to be shared.
            </p>
            <div className="w-full max-w-auto mx-auto overflow-hidden relative" onTouchStart={handleTouchStart}>
              {showOverlay && (
                <button
                  onClick={() => setShowOverlay(!showOverlay)}
                  className="absolute inset-0 flex justify-center items-center z-20 bg-transparent text-[#64ffda] font-bold animate-pulse"
                  title="Tap me to see Images"
                >
                  <BiImage className="text-2xl sm:text-3xl lg:text-4xl text-[#64ffda] mr-1 hover:text-teal-500 transition duration-300 transform hover:scale-105 animate-pulse w-7" /> Explore
                </button>
              )}
              <div className="relative">
                {showOverlay && (
                  <div className="absolute inset-0 bg-[#0a192f] bg-opacity-90 pointer-events-none z-10"></div>
                )}
                <div className={`flex transition-transform duration-500 ease-in-out ${showOverlay ? 'pointer-events-none' : ''}`} style={{ transform: `translateX(-${currentIndex * 100}%)`, opacity: isAnimating ? 0.5 : 1 }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      {renderGridItems(slide.images)}
                    </div>
                  ))}
                </div>
              </div>
              {!showOverlay && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#64ffda] to-[#8892b0] p-2 lg:p-3 shadow-lg hover:bg-gradient-to-l hover:from-[#aaffee] hover:to-[#a9bcc6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] dark:bg-gradient-to-r dark:from-[#64ffda] dark:to-[#8892b0] dark:hover:bg-gradient-to-l dark:hover:from-[#aaffee] dark:hover:to-[#a9bcc6] transition-transform duration-300 ease-in-out transform hover:scale-105 z-20"
                  >
                    <AiOutlineLeft className="h-3 w-3 sm:h-5 sm:w-5 lg:h-5 lg:w-5 text-teal-600" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#64ffda] to-[#8892b0] p-2 lg:p-3 shadow-lg hover:bg-gradient-to-l hover:from-[#aaffee] hover:to-[#a9bcc6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] dark:bg-gradient-to-r dark:from-[#64ffda] dark:to-[#8892b0] dark:hover:bg-gradient-to-l dark:hover:from-[#aaffee] dark:hover:to-[#a9bcc6] transition-transform duration-300 ease-in-out transform hover:scale-105 z-20"
                  >
                    <AiOutlineRight className="h-3 w-3 sm:h-5 sm:w-5 lg:h-5 lg:w-5 text-teal-600" />
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mb-0 flex space-x-2 z-20">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full ${currentIndex === index ? 'bg-[#64ffda]' : 'bg-gray-500'} transition-colors duration-300 ease-in-out`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImageSrc} />
    </div>
  );
};

export default Gallery;