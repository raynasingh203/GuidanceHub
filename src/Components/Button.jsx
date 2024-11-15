import React, { useState } from 'react';

const Button = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isExploreOpen, setIsExploreOpen] = useState(false);

  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

 
  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  return (
    <div className="bg-steel-50 backdrop-blur-md shadow-xl rounded-xl ml-[1rem] w-[74rem] h-14">
      <div className="font-pixeloidmono space-y-1 space-x-2">
        <a
          role="button"
          className="btn w-16 px-10 bg-sunset-50 text-black text-2xl rounded-l-lg hover:bg-grey-100 focus:outline-none"
        >
          g'h
        </a>
        <button
          type="submit"
          className="btn px-4 bg-sunset-50 text-black text-2xl rounded-l-lg hover:bg-grey-100 focus:outline-none"
        >
          GuidanceHub
        </button>
       
        <button
          type="button"
          className="btn px-4 bg-white text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
          onClick={toggleNav} 
        >
          <img src="src/assets/plus-math.png" alt="Icon" className="w-6 h-6" />
        </button>

        {/* conditional rendering */}
        {isNavOpen && (
          <>
            <button
              type="submit"
              className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
            >
              request
            </button>
            <button
              type="submit"
              className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
            >
              archive
            </button>
            <button
              type="submit"
              className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
            >
              works
            </button>
          </>
        )}

        
        <button
          type="button"
          className="btn px-4 bg-white text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
          onClick={toggleExplore} 
        >
          <img src="src/assets/reading-unicorn.png" alt="Icon" className="w-6 h-6" />
        </button>

        
        {isExploreOpen && (
          <button
            type="submit"
            className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
          >
            explore
          </button>
        )}

        <button
          type="submit"
          className="btn px-4 bg-sunset-50 text-black text-2xl rounded-l-lg hover:bg-white focus:outline-none"
        >
          <img src="src/assets/client-management.png" alt="Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Button;
