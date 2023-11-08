import React, { useState } from "react";

const Slider = () => {
  const images = [
    "/images/ads/2027651.jpg",
    "/images/ads/2029338.jpg",
    "/images/ads/2029766.jpg",
    "/images/ads/2029789.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
