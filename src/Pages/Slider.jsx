import React from "react";
import "./Slider.css"; // Import the custom CSS file for the animation

const Slider = () => {
  const images = [
    "https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/ee7cc3f3ca0ed78752db06ce662a95f8/compass-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/4ILKtyUxeFLLrcKYTDJCDI/500c6c102fba1f345571d7282f5bd409/Loreal.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/24dae32ff49baaf8feecf9471804420d/zendesk-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/b98f4d8da30cfff0a87e8dce2bced46e/dropbox-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/GHRKNEZzkpc1oTM6LoqE5/9d721c69136d48216029728235378338/Bit.ly_Logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6ijOBKg2TK8bv06ue2lKQR/370fcc82cb8b05b66bde06bb7e892394/G2_Crowd_logo_1__Traced_.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6uZEcOnBdmUELQgHDU5sCh/5ac167058dcb5a4fbe5910afdd1ca894/Pendo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/a33ef976df35d4e240246d5e08bcb610/crocs-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6fo1ntHspDIwlAN45IgxRU/fbba98755d036e6d87631d0c5eccab25/doordash-customer-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/b9f3e2557c598b1ea51bb4e55f507833/lyft-customer-logo.svg"
  ];

  return (
    <div className="overflow-hidden relative w-full">
      <div className="slider-wrapper">
        <div className="slider-content">
          {/* First set of images */}
          {images.map((src, index) => (
            <img key={index} src={src} alt="customer-logo" className="w-28 mx-4" />
          ))}
          {/* Duplicate the images for seamless looping */}
          {images.map((src, index) => (
            <img key={index + 10} src={src} alt="customer-logo" className="w-28 mx-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
