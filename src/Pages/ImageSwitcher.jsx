import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';


const ImageSwitcher = () => {
  // Array of objects with images and corresponding paragraphs
  const imageData = [
    {
      src: "https://marketing-assets.calendly.com/_next/static/media/share-booking-page.382f2a71.webp",
      text: "Share your booking page ."
    },
    {
      src: "https://marketing-assets.calendly.com/_next/static/media/reduce-no-shows.a37b2e31.webp",
      text: "Reduce no-shows and stay on track."
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Safely update the index and loop back to 0 if at the end
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 3000); // Change image every 3 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Safe access to current image and text
  const currentImage = imageData[currentImageIndex];

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Link className="w-[80%] relative bg-gray-100 p-4 rounded z-10">
        <p className="py-2 text-blue-950 font-bold text-lg">{currentImage.text}</p>
        {/* Only render if currentImage is valid */}
        {currentImage ? (
          <div className="w-full">
            <img
              src={currentImage.src}
              alt={`image-${currentImageIndex}`}
              className="w-full transition-opacity duration-500 opacity-100"
            />
          </div>
        ) : (
          <p>Loading...</p> // Fallback text if currentImage is undefined
        )}
      </Link>

      {/* Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Circle */}
        <div className="shape circle "></div>
        {/* Square */}
        <div className="shape square"></div>
        {/* Triangle */}
        <div className="shape triangle"></div>
        {/* Ellipse */}
        <div className="shape ellipse"></div>
      </div>
    </div>
  );
};

export default ImageSwitcher;
