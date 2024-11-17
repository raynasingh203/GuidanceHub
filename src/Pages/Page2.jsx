import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Button from '../Components/Button'; 
import ImageBentoBox from '../Components/ImageBentoBox';
import Indicator from '../Components/Indicator';
import FeedbackForm from '../Components/FeedbackForm';

const Page2 = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  return (
    <div className="font-pixeloidmono relative">
      {/* Navbar */}
      <div className="mb-4">
        <Button />
      </div>
      <div className="font-pixeloidmono text-black text-8xl ml-[-70rem] mt-[-2rem] animate-pulse">home</div>

      {/* Background Images */}
      <div className="absolute inset-0 z-[-1]">
        <img src="/Images/imageback.png" alt="Background" className="w-[17rem] h-full mt-[-2rem] ml-[-16rem]" />
      </div>
      <div className="absolute inset-0 z-[-1]">
        <img src="/Images/imageback.png" alt="Background" className="w-[17rem] h-[49rem] mt-[-2rem] ml-[70rem]" />
      </div>
      <div className="absolute inset-0 z-[-1]">
        <img src="/Images/imageback.png" alt="Background" className="w-[17rem] h-[49rem] mt-[-2rem] ml-[16rem]" />
      </div>

      {/* Bento Box Layout */}
      <div className="max-w-7xl mx-auto p-4 space-y-8 relative z-10">
        {/* First Row */}
        <div className="flex space-x-4">
          {/* Text Section (Div 1) */}
          <div className="relative p-4 rounded-full shadow-xl bg-gray-300 rounded-br-none text-sunset-50 flex flex-col justify-center w-[20%]">
            <p className="text-2xl font-semibold">
              HI, NAME
              <br />
              Welcome to your Guidance Studio
            </p>
          </div>

          {/* Indicator (Div 2) */}
          <div className="relative p-4 flex flex-col justify-center w-[30%]">
            <Indicator />
          </div>

          {/* Request PNG (Div 3) */}
          <div className="relative p-4 rounded-lg flex justify-center items-center w-[60%] h-[calc(110%+5rem)]">
            <img
              src="/Images/request.png" 
              alt="Request"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-4">
          {/* Text Section Below Div1 and Div2 (Div 4) */}
          <div className="relative bg-gray-100 p-4 text-3xl rounded-lg shadow-lg w-[30%]">
            <p className="text-center">Featured Works</p>
          </div>

          {/* New Div (Div 5) beside Div4 */}
          <div
            className="relative bg-gray-100 text-3xl text-black p-4 rounded-lg shadow-lg w-[70%] cursor-pointer hover:bg-gray-200 transition"
            onClick={() => navigate('/Recommendation')} // Navigate to Recommendations page
          >
            <p className="text-center">View Recommendations</p>
          </div>
        </div>

        {/* Second Row Content */}
        <div className="flex gap-4">
          {/* Image Bento Box */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex-1">
            <ImageBentoBox />
          </div>

          {/* Filler Div (Feedback Form) */}
          <div className="flex-grow">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
