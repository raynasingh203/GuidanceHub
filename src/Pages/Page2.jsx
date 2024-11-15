// src/Pages/Page2.jsx
import React from 'react';
import Button from '../Components/button'; 
import ImageBentoBox from '../Components/ImageBentoBox';
import Indicator from '../Components/Indicator';

const Page2 = () => {
  return (
    <div className="font-pixeloidmono">
     
      <div className=" ">
        <Button />
      </div> 
      {/* nav bar  */}

      {/* first layer  */}
       
      <div
  className="grid grid-cols-7 mt-[3rem] ml-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_160px] lg:gap-4 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px] w-[470px] mx-auto"
>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>





 
 {/* end  */}
      <div className="flex flex-row   text-2xl p-8 mt-4 max-w-5xl">
  <p className="text-2xl font-semibold">HI, NAME Welcome to your Guidance Studio</p>
  <div className="mr-8 mt-4">
    
  </div>

       <div className='' >    <Indicator/>     </div>
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
