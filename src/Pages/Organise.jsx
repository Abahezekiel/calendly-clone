import React, { useState, useEffect } from "react";
import OrganizationItem from "./OrganizationItem";

const Organise = ({
  items,
  images,
  intervalDuration = 4000,
  itemHeight = "500px"
}) => {
  const [visibleSection, setVisibleSection] = useState(0);
  const [bordersWidth, setBordersWidth] = useState(
    items.reduce((acc, item, index) => {
      acc[index] = "w-[0%]";
      return acc;
    }, {})
  );

  const handleToggle = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
    setBordersWidth((prevState) => ({
      ...prevState,
      [section]: "w-[100%]",
    }));
  };

  const handleBorderAnimationEnd = (section) => {
    setTimeout(() => {
      const nextSection = section === items.length - 1 ? 0 : section + 1;
      setBordersWidth((prevState) => ({
        ...prevState,
        [nextSection]: "w-[100%]",
      }));
      setVisibleSection(nextSection);
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleSection((prev) => {
        const nextSection = prev === items.length - 1 ? 0 : prev + 1;
        setBordersWidth((prevState) => ({
          ...prevState,
          [nextSection]: "w-[100%]",
        }));
        return nextSection;
      });
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [items.length, intervalDuration]);

  return (
    <div className="flex p-10 pt-[50px] gap-10">
      <div className="w-1/2">
        {items.map((item, index) => (
          <OrganizationItem
            key={item.id}
            itemId={item.id}
            title={item.title}
            description={item.desc}
            buttonText={item.buttonText}
            borderColor={item.borderColor}
            isVisible={index === visibleSection}
            handleToggle={handleToggle}
            handleBorderAnimationEnd={handleBorderAnimationEnd}
            bordersWidth={bordersWidth}
            itemHeight={itemHeight}
          />
        ))}
      </div>

      <div className="bg-white w-1/2 pt-[50px]">
        <img
          src={images[visibleSection]}
          alt={`Image ${visibleSection + 1}`}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Organise;
