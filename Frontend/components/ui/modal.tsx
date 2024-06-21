import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import StarRating from './StarRating'; 
import Cookies from '@/components/js-cookie';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [rating, setRating] = useState(0); // State to store rating
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const maxWidth = window.innerWidth * 0.6;
        const maxHeight = window.innerHeight * 0.6;
        let { width, height } = img;

        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = (maxHeight / height) * width;
          height = maxHeight;
        }

        setImageDimensions({ width, height });
      };

      const savedRating = Cookies.get(`rating-${imageSrc}`);
      if (savedRating) {
        setRating(Number(savedRating));
      }
    }
  }, [isOpen, imageSrc]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleRating = (newRating: number) => {
    setRating(newRating);
    Cookies.set(`rating-${imageSrc}`, newRating.toString(), { expires: 365 });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <style>{`
        .close-button {
          display: block;
        }

        @media (max-width: 640px) {
          .close-button {
            display: none;
          }
        }
      `}</style>
      <div ref={modalRef} className="relative bg-white shadow-lg rounded-lg" style={{ width: imageDimensions.width, height: imageDimensions.height }}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white rounded-full p-1 hover:bg-teal-600 focus:outline-none transition-colors duration-300 close-button"
        >
          <AiOutlineClose className="text-xl sm:text-xs" />
          <span className="sr-only">Close</span>
        </button>
        <img src={imageSrc} alt="Modal view" className="w-full h-full object-contain rounded-t-lg" />
        <div className="absolute bottom-2 left-2 right-2 flex justify-center bg-transparent rounded-b-lg py-2">
          <StarRating rating={rating} onRating={handleRating} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
