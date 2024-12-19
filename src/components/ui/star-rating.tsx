import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
}

export function StarRating({ rating, size = 16 }: StarRatingProps) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`${
            star <= rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300 fill-gray-300'
          }`}
        />
      ))}
    </div>
  );
}