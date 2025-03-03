import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Button from "../Components/button/Button";

const DatePicker = () => {
  const inputRef = useRef(null);
  const [calendarVisible, setCalendarVisible] = useState(false);

  useEffect(() => {
    // Initialize flatpickr on the input
    const fp = flatpickr(inputRef.current, {
      inline: false, // Don't show the calendar inline
      showMonths: 2, // Show two months side by side
      locale: {
        firstDayOfWeek: 1, // Start the week on Monday
      },
      onOpen: () => setCalendarVisible(true), // When calendar is opened, set it visible
      onClose: () => setCalendarVisible(false), // When calendar is closed, set it invisible
    });

    // Cleanup the flatpickr instance on component unmount
    return () => fp.destroy();
  }, []);

  return (
    <div className="flex w-3/4 p-7 ">
      <div className="w-11/12 border-b border-gray-400 pb-10 ">
        <input
          ref={inputRef}
          type="text"
          id="dateInput"
          placeholder="Select a date range"
          className="w-4/5 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
        />
      </div>
      <div className=" ">
        <Button
          title="Delete"
          type="secondary"
          extraStyles="bg-orange-700  border-none rounded-full   text-white font-semibold text-sm  p-3"
        />
      </div>
    </div>
  );
};

export default DatePicker;
