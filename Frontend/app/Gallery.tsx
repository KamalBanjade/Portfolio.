import React, { useState, useEffect, useRef } from 'react';
import { useModal } from '@/components/ui/modalcontext';
import { AiOutlineLeft, AiOutlineRight, AiOutlineEye, AiOutlineClose } from 'react-icons/ai';
import Modal from '@/components/ui/modal';
import { BsCardImage } from 'react-icons/bs';

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

  const slides: Slide[] = [
    {
      images: [
        { src: '/sunset.jpg', title: 'Sunset', description: 'Lalitpur, Kathford College' },
        { src: '/stupa.jpg', title: 'Boudhanath Stupa', description: 'Kathmandu,Boudha ' },
        { src: '/mountains.png', title: 'Mountains', description: 'Arghakhanchi, Arghatosh' }
      ]
    },
    {
      images: [
        { src: '/lights.jpg', title: 'Rainy Street Lights', description: 'Kathmandu, New Baneshwor' },
        { src: '/bulbs.png', title: 'Paper Lanterns', description: 'Butwal, View Complex' },
        { src: '/apartments.png', title: 'Apartments', description: 'Lalitpur, Kathdord ollege' }
      ]
    },
    {
      images: [
        { src: '/parrot.jpg', title: 'A parrot', description: 'Lalitpur, Godawari' },
        {
          src: '/whiteflower.jpg', title: "Nature's Bloom", description: 'Arghakhanchi, Arghatosh'
        },
        { src: '/woods.jpeg', title: "Nature's Roof", description: 'Arghakhanchi, Arghatosh' }
      ]
    },
    {
      images: [
        { src: '/spotlight.png', title: 'Flower Spotlight', description: 'Arghakhanchi, Arghatosh' },
        { src: '/water droplets.png', title: "Nature's Detail", description: 'Arghakhanchi, Arghatosh' },
        { src: '/Butterfly.jpg', title: 'Butterfly', description: 'Arghakhanchi, Arghatosh' }
      ]
    }
  ];

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

  const renderGridItems = () => (
    <div className={`grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-4 ${showOverlay ? 'pointer-events-none' : ''}`}>
      {slides[currentIndex].images.map((image, index) => (
        <div className="relative group" key={index}>
          <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="aspect-[1/1] object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
              <h3 className="text-white text-xs sm:text-base font-semibold mb-1 transform translate-y-4 sm:translate-y-0 transition-transform duration-300 ease-in-out">
                {image.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 transform translate-y-4 sm:translate-y-0 transition-transform duration-300 ease-in-out">
                {image.description}
              </p>
              <button
                onClick={() => handleEyeClick(index)}
                className="absolute top-2 right-2 bg-transparent text-white rounded-full p-1 hover:bg-gray-600 focus:outline-none"
              >
                <AiOutlineEye className="text-base sm:text-lg hover:text-teal-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative" id="gallery" ref={galleryRef}>
      <div className={`max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-xl transition duration-500 ease-in-out transform hover:scale-100 hover:translate-y-1 ${isModalOpen ? 'blur' : ''}`}>
        <style jsx>{`
          .blur {
            filter: blur(10px);
            transition: filter 0.3s ease;
          }
        `}</style>
        <section className="flex flex-col justify-center items-center space-y-6">
          <div className="w-full">
            <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-left">
              <span className="text-white">Gallery</span>
            </h2>
            <p className="text-[#8892b0] mb-8 text-center">
              Embark on a visual journey through my gallery. Each image captures a unique moment, a story waiting to be told, a piece of beauty longing to be shared.
            </p>

            <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
              {showOverlay && (
                <button
                  onClick={() => setShowOverlay(!showOverlay)}
                  className="absolute inset-0 flex justify-center items-center z-20 bg-transparent"
                >
                  <BsCardImage className="text-2xl sm:text-3xl lg:text-4xl text-[#64ffda] hover:text-teal-500 transition duration-300 transform hover:scale-105" />
                </button>
              )}
              <div className="relative">
                {showOverlay && (
                  <div className="absolute inset-0 bg-[#0a192f] bg-opacity-90 pointer-events-none z-10"></div>
                )}
                <div className={`flex transition-transform duration-500 ease-in-out ${showOverlay ? 'pointer-events-none' : ''}`} style={{ transform: `translateX(-${currentIndex * 100}%)`, opacity: isAnimating ? 0.5 : 1 }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      {renderGridItems()}
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
