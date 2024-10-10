import React, { useState, useEffect } from "react"; 
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change sponsor every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel relative">
      {images.map((image, index) => (
        <div
          key={image.name}
          className={`absolute w-full h-full flex justify-center items-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } ${index === currentIndex ? "animate-slide-up" : ""}`}
        >
          <img src={image.image} alt={image.name} className="w-48 h-auto" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
