import React from 'react'
import Forminit1 from '../Components/Forminit1';
import Logo from '../Components/Logo';
import Logosmall from '../Components/Logosmall';
// import Logohorizontal from '../Components/Logohorizontal';
import bodyBg from '/Images/exported-image-9.png';
import Card from '../Components/Card';
import Div from '../Components/Div';

const Forminit = () => {
    return (
        <div className="min-h-screen" style={{ 
            backgroundImage: `url(${bodyBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <> <div className='absolute  ml-[-6rem] mt-1'> 
              <Logo/> </div>

              <div className='absolute ml-[78rem] mt-[25rem]'> 
              <Logosmall/> </div>

              <div className='absolute ml-[48rem] mt-[25rem]'> 
              <Div/> </div>

              {/* <div className='absolute mt-10 ml-[-1.5rem]'> 
              <Logohorizontal/> </div>  */}

              <div className='absolute mt-[13rem] ml-[43rem]'>  <Card/>  </div>

            <div className=' ml-[37rem] mt-[-2rem]'  > 
              <div className="relative">
               
                <p className="font-pixeloidmono text-[7rem] text-black z-20 relative">
                  Guidance
                  <span className="flex mt-[-8rem] ml-[40rem] flex-col">
                    <span className="leading-[1]">H</span>
                    <span className="leading-[1]">u</span>
                    <span className="leading-[1]">b</span>
                  </span>
                </p>
          
               
                <div className="absolute top-[10rem] left-[23rem]  transform -translate-x-1/2 -translate-y-1/2 flex space-x-4 z-10">
                  <div className="h-32 w-32 rounded-sm   rounded-br-sm mt-[-8rem] bg-orange-50"></div>
                  <div className="h-32  w-32 rounded-lg mt-[-8rem] animate-pulse rounded-br-none bg-steek-50"></div>
                  <div className="h-32 mt-[-8rem] w-32 rounded-lg rounded-br-none  bg-white"></div>
                  <div className="h-32 mt-[-8rem] w-32 rounded-lg rounded-br-none  bg-gray-200"></div>
                  <div className="h-32 mt-[-8rem] w-32 rounded-lg rounded-br-none  bg-sunset-200"></div>
                </div>
          
               
            

                <div className="absolute mt-[-21.5rem] left-[25rem] h-5 w-5 rounded-sm bg-white z-10"></div>
                <div className="h-32 w-32 rounded-lg rounded-bl-none mt-[-7rem] ml-[37rem] bg-steel-50"></div>
              </div>
              </div>


        <div className='flex justify-center mt-[-15rem] ml-[1rem]'>   
        <Forminit1/>
        
        </div> 
    
          </> 
         
             
         
          );
          
          
        </div>
    );
}

export default Forminit
