import React, { useState, useEffect } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface StarRatingProps {
  rating: number;
  onRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRating }) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  // Initialize rating state to 0
  const [currentRating, setCurrentRating] = useState<number>(0);

  useEffect(() => {
    // Update current rating when prop changes
    setCurrentRating(rating);
  }, [rating]);

  const handleMouseEnter = (index: number) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (index: number, event: React.MouseEvent | React.TouchEvent) => {
    event.stopPropagation(); // Stop the event propagation here
    onRating(index);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={(event) => handleClick(index + 1, event)}
          onTouchStart={(event) => handleClick(index + 1, event)}
          className={`cursor-pointer text-sm transition-transform duration-300 transform ${
            hoveredRating !== null ? (hoveredRating > index ? 'scale-125 text-teal-600' : 'text-gray-300') : currentRating > index ? 'scale-125 text-teal-600' : 'text-gray-300'
          }`}
        >
          {hoveredRating !== null ? (
            hoveredRating > index ? (
              <AiFillStar />
            ) : (
              <AiOutlineStar />
            )
          ) : currentRating > index ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
