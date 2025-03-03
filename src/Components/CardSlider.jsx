import React, { useState } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Import icons for navigation
import VonageCard from "./VonageCard";

const CardSlider = () => {
  const cards = [
    {
      imageSrc: "https://images.ctfassets.net/k0lk9kiuza3o/1ofedJdNCvuUawxTPCMH5X/e7de389fb655b08e4bfe013e0b3b263c/hackerone-customer-logo.svg",
      logoSrc: "https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg",
      number: "160%",
      color: "blue-500",
      text: "more customers reached",
      linkText: "Read now",
    },
    {
      imageSrc: "https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg",
      logoSrc: "https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg",
      number: "22x",
      color: "yellow-500",
      text: "interviews scheduled",
      linkText: "Read now",
    },
    {
      imageSrc: "https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg",
      logoSrc: "https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg",
      number: "323%",
      color: "blue-500",
      text: "return on investment",
      linkText: "Read now",
    },
    {
      imageSrc: "https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg",
      logoSrc: "https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg",
      number: "50%",
      color: "green-500",
      text: "conversion increase",
      linkText: "Read now",
    },
    {
      imageSrc: "https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg",
      logoSrc: "https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg",
      number: "5x",
      color: "red-500",
      text: "client retention",
      linkText: "Read now",
    },
    {
      imageSrc: "https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg",
      logoSrc: "https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg",
      number: "200%",
      color: "purple-500",
      text: "increased productivity",
      linkText: "Read now",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative m-14 flex gap-10 pt-10">
      {/* Navigation Buttons Container */}
      <div className="absolute top-0 right-0 z-10 flex gap-3">
        <button
          onClick={prevSlide}
          className="bg-white p-2 rounded-full shadow-md"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white p-2 rounded-full shadow-md"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Slider */}
      <div className="flex overflow-hidden gap-6 w-full">
        {/* Render the cards based on the current index */}
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <VonageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
