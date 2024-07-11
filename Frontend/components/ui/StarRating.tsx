import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
  onRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRating }) => {
  const [hover, setHover] = useState<number | null>(null);

  const handleRating = (newRating: number) => {
    onRating(newRating);
  };

  return (
    <div className="flex space-x-1 relative">
      {Array.from({ length: 5 }, (_, index) => {
        const ratingValue = index + 1;
        return (
          <div key={index} className="relative flex items-center">
            <FaStar
              className={`cursor-pointer transition-colors duration-300 transform hover:scale-110 ${
                ratingValue <= (hover || rating) ? 'text-teal-600' : 'text-gray-400'
              }`}
              onClick={() => handleRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={20}
              aria-label={`Rating ${ratingValue}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
