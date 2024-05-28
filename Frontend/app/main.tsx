import React from 'react';
import Carousel from './carousel';

const images = [
  'https://picsum.photos/id/2/500',
  'https://picsum.photos/id/12/500',
  'https://picsum.photos/id/321/500',
  'https://picsum.photos/id/32/500',
  'https://picsum.photos/id/45/500'
];

function Gallery() {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#0a192f] to-[#0a192f] hover:to-[#1a2f4f] rounded-lg p-4 sm:p-6 md:p-8 shadow-2xl relative transition duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1" id="gallery">
      <section className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex-1">
          <h2 className="text-[#64ffda] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-white">Gallery</span>
          </h2>
          <p className="text-[#8892b0] mb-8">
            Embark on a visual journey through my gallery. Each image captures a unique moment, a story waiting to be told, a piece of beauty longing to be shared.
          </p>
          <Carousel images={images} />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
