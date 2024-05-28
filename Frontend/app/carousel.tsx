import React, { useRef, useEffect, useState } from 'react';

function Carousel({ images }: { images: string[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const imagesToShow = 3;
  const imageWidth = 520;

  useEffect(() => {
    updateCarouselImages();
  }, [currentIndex]);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - imagesToShow + totalImages) % totalImages);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + imagesToShow) % totalImages);
  };

  const updateCarouselImages = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clear existing images
    while (carousel.firstChild) {
      carousel.removeChild(carousel.firstChild);
    }

    // Add new set of images based on current index
    for (let i = 0; i < imagesToShow; i++) {
      const imgIndex = (currentIndex + i) % totalImages;
      const newImage = createImageElement(images[imgIndex]);
      carousel.appendChild(newImage);
    }
  };

  const createImageElement = (src: string) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'carousel-image';
    img.classList.add('carousel-image');
    img.style.width = `${imageWidth}px`;
    return img;
  };

  return (
    <div className="carousel-container">
      <button className="arrow-button left-arrow" onClick={handleLeftArrowClick}><span>&#8249;</span></button>
      <div className="carousel" ref={carouselRef}></div>
      <button className="arrow-button right-arrow" onClick={handleRightArrowClick}><span>&#8250;</span></button>
    </div>
  );
}

export default Carousel;
