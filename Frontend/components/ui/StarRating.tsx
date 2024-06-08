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

  const handleClick = (index: number) => {
    onRating(index);
  };

  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index + 1)}
          className="cursor-pointer text-xl sm:text-2xl mx-0.5"
        >
          {hoveredRating !== null ? (
            hoveredRating > index ? (
              <AiFillStar className="text-teal-600" />
            ) : (
              <AiOutlineStar className="text-white" />
            )
          ) : currentRating > index ? ( 
            <AiFillStar className="text-teal-600" />
          ) : (
            <AiOutlineStar className="text-white" />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
