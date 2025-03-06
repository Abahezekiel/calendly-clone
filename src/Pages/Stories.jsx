import React, { useState } from "react";
import EbookCard from "./EbookCard"; // Import the new EbookCard component
import Pagination from "./Pagination"; // Import the Pagination component

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current section index (0 to 4)

  // Array of ebooks and guides data
  const ebooksData = [
    [
      {
        title: "The State of Meetings 2024",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/6D89clKBKcqOc0WEpvwn0O/6d25623aa3a14d390679f9a1adeccd08/kovai-co-card-image__1_.png?q=85&fm=webp",
        buttonType: "Customer Story",
        buttonText: "Read the report",
        buttonLink: "#",
      },
      {
        title: "The Art of Cold Outreach",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/3xjaTAMVAi6kCvsuDSjz5W/be91465ded488d264dd1cc4aa11441e6/docusign-card-image.png?q=85&fm=webp",
        buttonType: "Customer Story",
        buttonText: "Read the guide",
        buttonLink: "#",
      },
      {
        title: "The State of Scheduling",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/3H4ehRrQVJHg9PvANNxi28/0626149019f3782a20af6c76fa63e8dd/atlassian-card-image.png?q=85&fm=webp",
        buttonType: "Customer Story",
        buttonText: "Read the report",
        buttonLink: "#",
      },
    ],
    [
      {
        title: "Growth Week 2023 Survey Findings",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/7kFOyrJ1x17zp2tYFvvhRz/94e0a119a748d635e5a584a062eb9e24/-PDF-_Growth_Week_Survey_Findings__1_.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
      {
        title: "The Total Economic Impact of Calendly",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/73KFZPx7uJ4M7c7BOnIyNi/74e8dba52bd3595952026dc0d66b6c4e/TEI-Resource_card.png?q=85&fm=webp",
        buttonType: "E-book",
        buttonText: "Read the guide",
        buttonLink: "#",
      },
      {
        title:
          "Increase Adoption and Reduce Churn with These CS Strategies and Automations",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/3HRrw31aqAMVGzZ0gQbyAm/049798a5700a20bbd2f2f403d6a88019/-Ebook-_Customer_Success_Q3_Ebook.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
    ],
    [
      {
        title: "Growth Week 2023 Survey Findings",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/3tRjvl6Nw9S6tiO0A75RE7/d280e1cf3b6118226cacab9c5fdb4fb0/-Ebook-_Temps___Scripts.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
      {
        title: "The Total Economic Impact of Calendly",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/37Z4ECSTSoHzDYimBK6iTJ/a25c535a07034a2522aece555445485c/-GATED_PDF-_Calendly_for_Mktg_Teams__RevOps__gated_guide.png?q=85&fm=webp",
        buttonType: "E-book",
        buttonText: "Read the guide",
        buttonLink: "#",
      },
      {
        title:
          "Increase Adoption and Reduce Churn with These CS Strategies and Automations",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/14Qu7EDxMjcLLy9x7Ukxup/dc910a765c4c5cf00c6b4405731e9f95/-Ebook-Smooth_Selling.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
    ],
    [
      {
        title: "The Ultimate Guide to Recruiting Coordination",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/6UjZepkU2e7axJdlaknPiT/710db31b68f38a7693c1dd80d570cd97/-Ebook-_C4R_Whitepaper_Resource_Page-1.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
      {
        title: "The Time Economic Report",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/1tU3KYP13uMQGzT3ymfuZq/ef3d1572519d42c0cd9b31955cbdcf0c/Time_Economy.png?q=85&fm=webp",
        buttonType: "E-book",
        buttonText: "Read the guide",
        buttonLink: "#",
      },
      {
        title: "Email Templates for Every Stage of Your Customer Journey",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/1ELBj4RYhBYqqoxJZgQwnQ/59e8277ee460fed5abb2f0a2c075062a/-Ebook-_CS_Teams.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
    ],
    [
      {
        title:
          "8 Expert Tips to Simplify the Most Complicated B2B Sales Meetings",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/fWxsEK72aBaSZUxYDR5wk/e5174b8c82a96e726d451b0b0fdae71d/-Ebook-_10_Expert_Tips_Sales_Meetings.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
      {
        title:
          "After the Discovery Call: The AE Playbook from Driving Deals from Demo to Close",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/5WbdfUrcoZUCnJ1eycorcU/2707eccdd77d7e8fbadaed471da75a2f/-Ebook-_The_AE_Playbook.png?q=85&fm=webp",
        buttonType: "E-book",
        buttonText: "Read the guide",
        buttonLink: "#",
      },
      {
        title:
          "How High-Performing Teams Achieve Even More with Schedule Automation",
        imageUrl:
          "https://images.ctfassets.net/k0lk9kiuza3o/6DvAt9aEq9zjCgVlUt5myM/0e96068c434c3d12b6110f091fbe64d0/-Ebook-_How_to_implement_modern_scheduling_for_high_performing_teams.png?q=85&fm=webp",
        buttonType: "Guide",
        buttonText: "Read the report",
        buttonLink: "#",
      },
    ],
  ];

  // Function to handle right arrow click and toggle the ebook sections
  const handleRightArrowClick = () => {
    const nextIndex = (currentIndex + 1) % ebooksData.length; // Loop back to the start
    setCurrentIndex(nextIndex); // Update the page number
  };

  // Function to handle the left arrow click and navigate to the previous page
  const handleLeftArrowClick = () => {
    const prevIndex =
      (currentIndex - 1 + ebooksData.length) % ebooksData.length; // Loop back to the end if at the start
    setCurrentIndex(prevIndex); // Update the page number
  };

  return (
    <div className="p-7">
      <div className="flex justify-between pt-10">
        <p className="text-blue-950 font-bold text-2xl">
        Customer Stories
          </p>

        {/* Pagination Component */}
        <Pagination
          currentIndex={currentIndex}
          total={ebooksData.length}
          onLeftClick={handleLeftArrowClick}
          onRightClick={handleRightArrowClick}
        />
      </div>

      {/* Dynamically render the ebook cards */}
      <div className="flex gap-10 pt-10">
        {ebooksData[currentIndex].map((ebook, index) => (
          <EbookCard
            key={index}
            title={ebook.title}
            imageUrl={ebook.imageUrl}
            buttonType={ebook.buttonType}
            buttonText={ebook.buttonText}
            buttonLink={ebook.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
