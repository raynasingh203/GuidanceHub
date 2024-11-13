// src/Pages/Page2.jsx
import React from 'react';
import Button from '../Components/button'; 
import ImageBentoBox from '../Components/ImageBentoBox';

const Page2 = () => {
  return (
    <div className="font-pixeloidmono">
     
      <div className=" pl-[10rem]">
        <Button />
      </div>

 
      <div className="flex items-start justify-end p-8 mt-4">

        <div className="mr-8">
          <p className="text-xl"></p>
        </div>

       
        <div>
          <img
            src="src/assets/request.png" 
            alt="img"
            className="w-[35rem] h-[15rem] object-fit mt-10 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <ImageBentoBox/>
    </div>
  );
};

export default Page2;
