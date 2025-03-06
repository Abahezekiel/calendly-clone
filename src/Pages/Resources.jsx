import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Components/button/Button";
import Ebooks from "./Ebooks";
import Webinars from "./Webinars";
import Stories from "./Stories";
import Blog from "./Blog";
import HelpResources from "./HelpResources";
import Ancestry from "./Ancestry";

const Resources = () => {
  // Create refs for each section
  const ebooksRef = useRef(null);
  const webinarsRef = useRef(null);
  const storiesRef = useRef(null);
  const blogRef = useRef(null);
  const tutorialsRef = useRef(null);
  const helpCenterRef = useRef(null);

  // Create state to track active section
  const [activeSection, setActiveSection] = useState("ebooks");

  // Function to scroll to a section
  const scrollToSection = (sectionRef, sectionName) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionName); // Set the active section when clicked
  };

  const [isVisible, setIsVisible] = useState({
    tutorialsText1: false,
    tutorialsText2: false,
    tutorialsText3: false,
    tutorialsText4: false,
    tutorialsText5: false,
  });

  useEffect(() => {
    const elements = [
      { id: "tutorialsText1", key: "tutorialsText1" },
      { id: "tutorialsText2", key: "tutorialsText2" },
      { id: "tutorialsText3", key: "tutorialsText3" },
      { id: "tutorialsText4", key: "tutorialsText4" },
      { id: "tutorialsText5", key: "tutorialsText5" },
    ];

    const observers = elements.map(({ id, key }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(id);
      if (element) observer.observe(element);

      return observer;
    });

    // Clean up observers
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <div className="w-full pb-10 pt-20 bg-slate-50">
        <div className="flex items-center p-7">
          <p className="text-sm text-gray-500 font- ">
            Home /{" "}
            <span className="text-sm text-blue-950 font- "> Resources</span>
          </p>
        </div>

        <div className="flex gap-20 p-7 h-1/2 w-full items-center ">
          <div className=" w-1/2">
            <p className="text-6xl text-blue-950 font-bold pt-20">
              Explore all of our Resources
            </p>
            <p className="text-gray-500 font-light text-xl pt-5 pb-14">
              Explore Calendly's library of guides, webinars, customer stories,
              tutorials, and other helpful content — everything you need to
              become a scheduling superstar!
            </p>
          </div>
          <div className="w-1/2 group">
            <div>
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/1E5c2WISlq38gR8yrUmxVb/fb06130b9b4a3d67fa98853961217b51/2024_State_of_Meetings_report__1_.png?q=85&fm=webp"
                alt=""
                className="rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="pt-5">
              <Button
                title="Featured"
                type="secondary"
                extraStyles="bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6"
              />
              <p className="pt-3 pb-3 text-blue-950 font-semibold text-2xl">
                The State of Meetings 2024
              </p>
              <div className="ml-[-1rem]">
                <Button
                  afterIcon={<FaArrowRight />}
                  title="Read the report"
                  type="secondary"
                  extraStyles="rounded-full flex items-center justify-center text-blue-950 font-normal text-xl border-none h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu with active section highlighting */}
      <div className="text-gray-500 flex items-center justify-center pt-20">
        <div className="flex items-center justify-center gap-10 border-gray-500 border-b cursor-pointer">
          <p
            onClick={() => scrollToSection(ebooksRef, "ebooks")}
            className={`hover:bg-slate-50 p-5 ${
              activeSection === "ebooks" ? "text-blue-500" : ""
            }`}
          >
            E-books & Guides
          </p>
          <p
            onClick={() => scrollToSection(webinarsRef, "webinars")}
            className={`hover:bg-slate-50 p-5 ${
              activeSection === "webinars" ? "text-blue-500" : ""
            }`}
          >
            Webinars
          </p>
          <p
            onClick={() => scrollToSection(storiesRef, "stories")}
            className={`hover:bg-slate-50 p-5 ${
              activeSection === "stories" ? "text-blue-500" : ""
            }`}
          >
            Customer Stories
          </p>
          <p
            onClick={() => scrollToSection(blogRef, "blog")}
            className={`hover:bg-slate-50 p-5 ${
              activeSection === "blog" ? "text-blue-500" : ""
            }`}
          >
            Blog
          </p>
          <p
            onClick={() => scrollToSection(tutorialsRef, "tutorials")}
            className={`hover:bg-slate-50 p-5 ${
              activeSection === "tutorials" ? "text-blue-500" : ""
            }`}
          >
            Video Tutorials
          </p>
          <p
            onClick={() => scrollToSection(helpCenterRef, "helpCenter")}
            className={`hover:bg-slate-50 p-5 ${
              activeSection === "helpCenter" ? "text-blue-500" : ""
            }`}
          >
            Help Center
          </p>
        </div>
      </div>

      {/* Scrollable sections */}
      <div ref={ebooksRef}>
        <Ebooks />
      </div>

      <div ref={webinarsRef}>
        <Webinars />
      </div>

      <div ref={storiesRef}>
        <Stories />
      </div>

      <div ref={blogRef}>
        <Blog />
      </div>

     

      <div
        ref={tutorialsRef}
        id="tutorialsText1"
        className={`flex gap-10 p-7 h-1/2 w items-center transition-all duration-1000 ease-out transform ${
          isVisible.tutorialsText1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        {/* Left div (Text) */}
        <div
          className={`w-1/2 transition-all duration-1000 ease-out transform delay-300 ${
            isVisible.tutorialsText1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="pt-5">
            <Button
              title="Explore our Tutorials"
              type="secondary"
              extraStyles="bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6"
            />
            <p className="pt-5 pb-3 text-gray-500 font-semibold text-2xl">
              Video Tutorials
            </p>
            <p className="pt-5 pb-3 text-blue-950 font-light text-lg w-10/12">
              Looking for some video tutorials on how to use Calendly? We’ve got
              you covered.
            </p>
            <div className="pt-5">
              <Button
                title="Watch Tutorials"
                type="secondary"
                extraStyles="rounded-md flex items-center justify-center bg-blue-600 text-white font-normal text-xl border-none h- "
              />
            </div>
          </div>
        </div>

        {/* Right div (Image) */}
        <div
          className={`w-1/2 transition-all duration-1000 ease-out transform ${
            isVisible.tutorialsText1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div>
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1CF8JUHgjPw9PwGyW7PDYG/460007c37afb88114101daf0e5496690/Calendly-Webinars.png?q=85&fm=webp"
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

     <HelpResources/>

      <Ancestry/>
    </>
  );
};

export default Resources;
