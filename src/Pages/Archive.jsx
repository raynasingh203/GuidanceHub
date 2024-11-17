import React, { useState } from 'react';
import Button from '../Components/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Optional styling for the calendar
import Archivecard from '../Components/Archivecard';
import Archivecard1 from '../Components/Archivecard1';
import Archivecard2 from '../Components/Archivecard2';

const Archive = () => {
  // State to handle selected date
  const [date, setDate] = useState(new Date());
  
  // Example of highlighted dates
  const highlightedDates = [
    new Date(2024, 10, 10), // November 10, 2024
    new Date(2024, 10, 15), // November 15, 2024
    new Date(2024, 10, 20), // November 20, 2024
  ];

  // Function to check if a date is highlighted
  const isHighlighted = (date) => {
    return highlightedDates.some(
      (highlightedDate) => highlightedDate.getTime() === date.getTime()
    );
  };

  return (
    <>
      <div className="mb-4">
        <Button />
      </div>

      <div className="font-pixeloidmono text-black text-8xl ml-[-58rem] mt-[-2rem]">Archive</div>

      <div className="font-pixeloidmono text-black text-4xl ml-[-70rem] mt-[2rem]">FILTER</div>

      <div className="mr-10 absolute inset-0 z-[-1] mt-[-1rem]">
        <img src="/Images/imageback.png" alt="Description" className="w-[300px] h-auto" />
      </div>

      <div className="flex ml-[21rem] h-screen">
        <div className="w-[1rem] h-[65rem] mt-[-6rem] z-[-1] shadow-2xl rounded-full bg-sunset-50"></div>
      </div>

      <div className="flex ml-[51rem] h-screen">
        <div className="w-[1rem] h-[65rem] mt-[-60rem] z-[-1] shadow-2xl rounded-full bg-white"></div>
      </div>

      {/* Calendar Section */}
      <div className="mt-[-99rem]  ml-[-4rem]">
        <Calendar
          value={date}
          onChange={setDate}
          tileClassName={({ date, view }) => {
            if (view === 'month' && isHighlighted(date)) {
              return 'highlighted-date'; // CSS class for highlighted date
            }
          }}
        />
      </div>

      {/* Flex container to align Archivecards */}
      <div className="flex mt-[104rem]">
        <Archivecard />
        <Archivecard1 />
        <Archivecard2 />
      </div>

      {/* Labels below the calendar and archive cards */}
      <div className=" flex absolute mt-[-101rem] font-pixeloidmono ml-[-4rem] outline-dotted  rounded-full justify-center space-x-4">
        <div className="inline-flex items-center py-4 px-7 m-1 shadow-2xl bg-lime-100 text-black rounded-full">
          Label 1
        </div>
        <div className="inline-flex items-center py-1 px-2 m-1 shadow-xl outline-dotted bg-white text-black rounded-full">
          Label 2
        </div>
        <div className="inline-flex items-center py-1 px-2 m-1 shadow-2xl bg-lime-100 text-black rounded-full">
          Label 3
        </div>
      </div>

      {/* Labels below the Archivecards
      <div className="mt-[-101rem] ml-[44rem] absolute flex justify-center space-x-4">
        <div className="inline-flex items-center py-1 px-2 m-1 bg-lime-100 text-sunset-500 rounded-full">
          Label 4
        </div>
        <div className="inline-flex items-center py-1 px-2 m-1 bg-lime-100 text-sunset-500 rounded-full">
          Label 5
        </div>
        <div className="inline-flex items-center py-1 px-2 m-1 bg-lime-100 text-sunset-500 rounded-full">
          Label 6
        </div>
      </div> */}

      <style jsx>{`
        .highlighted-date {
          background-color: #ffcc00; /* Highlighted date background */
          color: white;
        }
      `}</style>
    </>
  );
};

export default Archive;
