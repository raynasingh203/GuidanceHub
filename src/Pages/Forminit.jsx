import React from 'react'
import Footer from '../Components/Footer';
import Forminit1 from '../Components/Forminit1';


const Forminit = () => {
    return (
        <>
          <div className="relative">
           
            <p className="font-pixeloidmono text-[7rem] text-black z-20 relative">
              Guidance
              <span className="flex mt-[-8rem] ml-[43rem] flex-col">
                <span className="leading-[1]">H</span>
                <span className="leading-[1]">u</span>
                <span className="leading-[1]">b</span>
              </span>
            </p>
      
            {/* Divs in a row with reduced z-index to appear behind text */}
            <div className="absolute top-[10rem] left-[40rem] transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 z-10">
              <div className="h-32 w-32 rounded-full animate-bounce rounded-br-none mt-[-8rem] bg-orange-50"></div>
              <div className="h-32  w-32 rounded-lg mt-[-8rem] animate-bounce rounded-br-none bg-sunset-50"></div>
              <div className="h-32 mt-[-8rem] w-32 rounded-lg rounded-br-none bg-steel-100"></div>
              <div className="h-32 mt-[-8rem] w-32 rounded-lg rounded-br-none bg-sunset-100"></div>
              <div className="h-32 mt-[-8rem] w-32 rounded-lg rounded-br-none bg-sunset-200"></div>
            </div>
      
            {/* Additional divs */}
        
            <div className="absolute mt-[-14rem] left-[55rem] h-32 w-[7rem] rounded-full rounded-br-none bg-sunset-50 z-10"></div>

            <div className="absolute mt-[-21.5rem] left-[50rem] h-5 w-5 rounded-sm bg-white z-10"></div>
            <div className="h-32 w-32 rounded-full rounded-bl-none mt-[-7rem] ml-[55rem] bg-steel-50"></div>
          </div>

    <Forminit1/>

         <Footer/> 
        </>
      );
      
      
      
  
}

export default Forminit
