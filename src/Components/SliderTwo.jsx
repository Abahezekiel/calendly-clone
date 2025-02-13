import React from "react";
import Slider from "react-slick";

// Define a component for individual slide content
const SliderItem = ({ index }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg mt-8">
    <a className="flex flex-col items-center" href="#">
      <div className="flex justify-center mb-4">
        <div className="relative w-96 flex justify-center items-center">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
            alt="Vonage Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <p className="text-4xl font-semibold text-blue-950">
          <span className="text-blue-600">160</span>
          <span className="text-blue-600 text-sm">%</span>
        </p>
        <p className="text-lg text-gray-700">more customers reached</p>
      </div>
      <button className="flex items-center justify-center bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
        <span className="mr-2">Read now</span>
      </button>
    </a>
  </div>
);

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const slideData = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Data for the slider items

  return (
    <div className="slider-container bg-red-500">
      <Slider {...settings}>
        {slideData.map((item, index) => (
          <div key={index}>
            <SliderItem index={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
