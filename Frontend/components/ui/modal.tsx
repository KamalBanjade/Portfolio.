import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
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
    }
  }, [isOpen, imageSrc]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="relative bg-transparent shadow-lg" style={{ width: imageDimensions.width, height: imageDimensions.height }}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-1 hover:bg-teal-600 focus:outline-none transition-colors duration-300 flex items-center justify-center"
        >
          <AiOutlineClose className="text-xl sm:text-2xl" />
          <span className="sr-only">Close</span>
        </button>
        <img src={imageSrc} alt="Modal view" className="w-full h-full object-contain rounded-lg" />
      </div>
    </div>
  );
};

export default Modal;
