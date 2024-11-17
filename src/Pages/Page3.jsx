import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Button from '../Components/Button';
import MultiSelectFilter from '../Components/MultiSelectFilter';

const ExpandableDiv = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      onClick={toggleExpand} 
      className={`cursor-pointer transition-all duration-300 ease-in-out ${isExpanded ? 'w-[480px] ml-[35rem] mt-[2rem] h-[140px]' : 'w-[480px] mt-[2rem] ml-[35rem] h-[100px]'} font-pixeloidmono rounded-full bg-gray-100 flex flex-col justify-center items-center text-black`}
    >
      {isExpanded ? (
        <>
          <span className="mb-2">Details...</span>
          <input
            type="text"
            placeholder="Start Typing"
            className="w-[80%] py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            onClick={(e) => e.stopPropagation()} 
          />
        </>
      ) : (
        'Your Query [Click]'
      )}
    </div>
  );
};

const Page3 = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for page navigation

  const handleGoClick = () => {
    navigate('/Recommendation'); // Replace '/destination' with your desired route
  };

  return (
    <>
      <div className="mb-4">
        <Button />
      </div>

      {/* Query Form Text */}
      <div className="font-pixeloidmono text-black text-6xl ml-[-62rem] relative mt-[-1rem]">
        query form 
      </div>

      {/* "Go" Button below Query Form Text */}
      <div className="text-center ml-[-80rem] mt-5">
        <button
          onClick={handleGoClick}
          className="bg-lime-100 hover:bg-gray-200 text-black font-pixeloidmono font-bold py-2 px-10 rounded"
        >
          Go
        </button>
      </div>

      {/* Details Text */}
      <div 
        className="font-pixeloidmono text-black text-6xl absolute top-[16rem] left-[50%] transform -translate-x-[50%] text-center z-10"
      >
        details...
      </div>

      {/* Background Image */}
      <div className="mr-10 absolute inset-0 z-[-1] mt-[-11rem]">
        <img src="/Images/imageback.png" alt="Description" className="w-[300px] h-auto" />
      </div>
        
      <div className="absolute ml-[-1rem] mt-[5.5rem]">
        <img
          src="/Images/ss.png"
          alt="Centered Image"
          className="w-[79rem] h-[40rem]"
        />
      </div>

      {/* Expandable Div */}
      <div className="absolute ml-[-10rem] mt-[7rem]">
        <ExpandableDiv />
     
        <div className="flex justify-center font-pixeloidmono ml-[30rem] mt-2">
          {/* Example Tags */}
          {['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'].map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center py-1 px-2 m-1 bg-lime-100 text-sunset-500 rounded-full"
            >
              <span className="mr-2">{tag}</span>
              <span
                className="cursor-pointer text-sunset-500 font-bold text-lg"
                onClick={() => console.log('Remove tag')} 
              >
                ×
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div 
        className="font-pixeloidmono text-black text-6xl absolute top-[34.5rem] left-[60rem] transform -translate-x-[50%] text-center z-10"
      >
        filters...

        <MultiSelectFilter />
      </div>

      {/* Attach Work Section */}
      <div className="absolute top-[10rem] right-[10rem] flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 17l4 4 4-4m0-5l-4-4-4 4"
            />
          </svg>
          <span className="font-pixeloidmono text-black text-lg">Attach work?</span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button 
            className="bg-lime-100 hover:bg-gray-200 text-black font-pixeloidmono font-bold py-2 px-4 rounded"
            onClick={() => console.log('Upload clicked')}
          >
            Upload
          </button>
          <button 
            className="bg-red-200 hover:bg-red-700 text-white font-pixeloidmono font-bold py-2 px-4 rounded"
            onClick={() => console.log('Clear clicked')}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="absolute top-[17rem] right-[5rem] flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 17l4 4 4-4m0-5l-4-4-4 4"
            />
          </svg>
          <span className="font-pixeloidmono text-black text-lg">Save Template?/Draft</span>
        </div>
        
        {/* Move the button section closer to the right */}
        <div className="flex space-x-4">
          <button 
            className="bg-lime-100 hover:bg-gray-200 text-black font-pixeloidmono font-bold py-2 px-4 rounded"
            onClick={() => console.log('Upload clicked')}
          >
            save
          </button>
        </div>
      </div>

    </>
  );
};

export default Page3;
