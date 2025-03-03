import React, { useEffect, useState } from "react";
import VonageCard from "../Components/VonageCard";

const VonageImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [divsVisible, setDivsVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("vonageSection");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      for (let i = 0; i < 3; i++) {
        timeouts.push(
          setTimeout(() => {
            setDivsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[i] = true;
              return newVisibility;
            });
          }, i * 250)
        );
      }

      return () => timeouts.forEach((timeout) => clearTimeout(timeout));
    }
  }, [isVisible]);

  return (
    <div id="vonageSection" className="m-14 flex gap-10 pt-10">
      <VonageCard
        imageSrc="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
        logoSrc="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
        number="160%"
        color="blue-500"
        text="more customers reached"
        linkText="Read now"
      />
      <VonageCard
        imageSrc="https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg"
        logoSrc="https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg"
        number="22x"
        color="yellow-500"
        text="interviews scheduled"
        linkText="Read now"
      />
      <VonageCard
        imageSrc="https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg"
        logoSrc="https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg"
        number="323%"
        color="blue-500"
        text="return on investment"
        linkText="Read now"
      />
    </div>
  );
};

export default VonageImage;
