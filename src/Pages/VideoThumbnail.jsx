import React, { useState } from "react";

const VideoThumbnail = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleThumbnailClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="flex justify-center items-center">
      {!isVideoVisible ? (
        <img
          src="https://embed-ssl.wistia.com/deliveries/6e6485c077cebb21090f69e9498d6ece.jpg?image_play_button_size=2x&image_crop_resized=960x540&image_play_button=1&image_play_button_color=0a2540e0"
          alt="Video Thumbnail"
          className="rounded-lg shadow-md w-full cursor-pointer h-72"
         
          onClick={handleThumbnailClick} // Handle click to show video
        />
      ) : (
        <video
         
          controls
          className="rounded-lg shadow-md w-full h-72"
          autoPlay
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
};

export default VideoThumbnail;
