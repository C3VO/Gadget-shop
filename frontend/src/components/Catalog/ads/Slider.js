import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
