import React from 'react';
import { useNavigate } from 'react-router-dom';
import TagSelect from './TagSelect';
import TagSelect1 from './TagSelect1';


const Card3form = () => {
  const navigate = useNavigate(); // React Router hook for navigation


  const handleNextClick = () => {
   
    navigate('/Page2'); 
  };

  return (
    <div className="flex h-auto w-screen ml-[9rem] mt-[-57rem] items-center justify-center">
      <div className="flex w-[34rem] flex-col rounded-full rounded-br-none bg-steel-50 px-6 shadow-xl sm:px-14">
        <div className="flex w-full justify-between self-start pt-10 pb-8">
          <h2 className="font-serif text-2xl font-pixeloidmono font-semibold text-black">Profile Setup</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[1rem] w-5 cursor-pointer text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex w-full flex-col pt-4">
        
        </div>

        <div className="flex mt-[-2rem] w-full flex-col">
         
        <div className="mt-4 grid items-center gap-3 gap-y-5 sm:grid-cols-4">
  <div className="flex flex-col sm:col-span-3">
    <label
      className="mb-1 ml-3 font-semibold font-pixeloidmono text-gray-500 rounded-full bg-gray-200 px-4 p-4 inline-block"
      htmlFor=""
    >
      Department
    </label>
    <select
      className="rounded-lg border px-4 py-2 font-pixeloidmono shadow-sm outline-none focus:ring"
      name=""
      id=""
    >
      <option value="CAC">CAC</option>
      <option value="DMA">DMA</option>
      <option value="VCSBt">VCSB</option>
      <option value="HCD">HCD</option>
      <option value="IADP">IADP</option>
      <option value="CE">CE</option>
    </select>
  </div>


            <div className="col-span-1 flex flex-col">
            <label
      className="mb-1 ml-3 font-semibold font-pixeloidmono text-gray-500 rounded-full bg-gray-200 px-4 p-4 inline-block"
      htmlFor=""
    >
                Year
              </label>
              <select className="rounded-lg border font-pixeloidmono px-2 py-2 shadow-sm outline-none focus:ring" name="" id="">
                <option value="YEAR 1">YEAR 1</option>
                <option value="YEAR 2">YEAR 2</option>
                <option value="YEAR 3">YEAR 3</option>
                <option value="YEAR 4">YEAR 4</option>
              </select>
            </div>
            <div className="flex flex-col sm:col-span-3">
              <label className="mb-1 ml-3 font-semibold font-pixeloidmono text-gray-500" htmlFor="">
                Preferred Type of Guidance
              </label>
              <select className="rounded-xl border font-pixeloidmono px-2 py-2 shadow-sm outline-none focus:ring" name="" id="">
                <option value="VC">Virtual Collaboration</option>
                <option value="IPC">In-Person Collaboration</option>
                <option value="FC">Flexible Collaboration</option>
              </select>
            </div>
            <div className="flex flex-col sm:col-span-3">
              <label className="mb-1 ml-3 font-semibold font-pixeloidmono text-gray-500" htmlFor="">
                My Availability
              </label>
              <select className="rounded-xl border px-2 font-pixeloidmono py-2 shadow-sm outline-none focus:ring" name="" id="">
                <option value="i">Immediate</option>
                <option value="f">Flexible</option>
                <option value="n">Not Available at the Moment</option>
              </select>
            </div>
          </div>

          <div className="w-full mt-6 h-auto relative">
            <TagSelect />
          </div>
          <div className="w-full mt-6 h-auto relative">
            <TagSelect1 />
          </div>
          <div className="flex ml-[2rem] mt-5 mb-5 justify-between sm:flex-row">
            <button
              className="group my-2 flex w-10 items-center justify-center  rounded-br-none ml-14 animate-pulse rounded-full bg-gray-900 py-3 font-pixeloidmono py-2 text-center font-medium text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
              onClick={() => navigate('/Formonboard')} // Navigate to forminit
            >
              Back
            </button>
            <button className="group my-2 flex w-10 items-center  rounded-br-none justify-center animate-pulse rounded-full bg-gray-900 py-3 font-pixeloidmono py-2 text-center font-medium text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
            onClick={() => navigate('/Page2')}
            >
              Continue
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-2 ml-4 h-4 w-4 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3form;
