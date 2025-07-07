
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface DotPaginationProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  className?: string;
}

const DotPagination = ({ images, className }: DotPaginationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative max-w-7xl mx-auto", className)}>
      {/* Image Display */}
      <div className=" overflow-hidden rounded-2xl shadow-xl">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Dot Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110",
              index === currentIndex
                ? "bg-gradient-to-r from-pink-500 to-purple-500 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default DotPagination;
