import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Card2form = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
   
    navigate('/Formonboard2'); 
  };

  return (
    <div className="flex h-auto w-screen ml-[9rem] mt-[-57rem] items-center justify-center">
      <div className="flex w-[34rem] flex-col rounded-3xl rounded-br-none bg-steel-50 px-6 shadow-2xl sm:px-14">
        <div className="flex w-full justify-between self-start pt-12 pb-8">
          <h2 className="font-serif text-2xl font-pixeloidmono  font-semibold text-gray-700">YOUR ROLE </h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[1rem] w-5 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex w-full flex-col pb-1 pt-4">
          <div className="relative mb-4">
            <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
            <label className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-sunset-50 p-4 pr-8 sm:pr-16" for="radio_1">
              <span className="mb-2 text-lg font-pixeloidmono font-semibold">Student</span>
              <p className="text-xs font-pixeloidmono "> Connect with faculty, get tailored recommendations, and receive expert support for your academic projects. Define your needs and find the perfect match for your journey.</p>
            </label>
          </div>
          <div className="relative mb-4">
            <input className="peer hidden" id="radio_2" type="radio" name="radio" />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
            <label className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-white p-4 pr-8 sm:pr-16" for="radio_2">
              <span className="mb-2 text-lg font-pixeloidmono font-semibold">Faculty</span>
              <p className="text-xs font-pixeloidmono ">Share your expertise and mentor students seeking your guidance. Collaborate on innovative projects, support student growth, and help shape the academic experience by connecting with those who need your skills.</p>
            </label>
          </div>
          <div className="my-4 space-y-3">
            <label for="marketing" className="flex space-x-4">
              <input id="marketing" name="marketing" type="checkbox" className="h-6 w-6 shrink-0 accent-gray-900" />
              <span id="marketing-description" className="text-xs font-pixeloidmono text-gray-600">I agree to the terms and conditions of GuidanceHub, including respectful communication, responsible project collaboration, and adherence to community standards..</span>
            </label>
          </div>
  
          <button
            onClick={handleNextClick} 
            className="my-2 rounded-md bg-gray-900 py-3 font-pixeloidmono animate-pulse font-medium text-white"
          >
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Card2form;
