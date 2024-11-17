import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const navigate = useNavigate(); // This will be used for navigation

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const navigateToArchive = () => {
    navigate('/Archive'); // Navigate to the Archive page
  };

  const navigateToInit = () => {
    navigate('/Forminit'); 
  };

  const navigateToPage2 = () => {
    navigate('/Page2'); 
  };
    const navigateToPage3 = () => {
      navigate('/Page3'); 
      
  };
  const navigateToFaculty = () => {
    navigate('/Faculty'); 
  } 



  return (
    <div className="bg-steel-50 backdrop-blur-md shadow-xl rounded-full ml-[1rem] w-[74rem] h-16">
      <div className="font-pixeloidmono space-y-1 space-x-2">
        <a
          role="button"
          className="btn w-16 px-10 bg-sunset-50 text-black text-2xl rounded-l-lg hover:bg-grey-100 focus:outline-none"
          onClick={navigateToInit}
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
          <img src="/Images/plus-math.png" alt="Icon" className="w-6 h-6" />
        </button>

        {/* conditional rendering */}
        {isNavOpen && (
          <>
            <button
              type="submit"
              className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
              onClick={navigateToPage3}
            >
              request
            </button>
            <button
              type="button" // Change this to type="button"
              className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
              onClick={navigateToArchive} // On click, navigate to Archive page
            >
              archive
            </button>
            <button
              type="submit"
              className="btn px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
              onClick={navigateToFaculty}
            >
             faculty
            </button>
          </>
        )}

        
        <button
          type="button"
          className="btn px-4 bg-white text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
          onClick={toggleExplore}
        >
          <img src="/Images/reading-unicorn.png" alt="Icon" className="w-6 h-6" />
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
          onClick={navigateToPage2}
        >
          <img src="/Images/client-management.png" alt="Icon" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Button;
