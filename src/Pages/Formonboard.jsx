import React from 'react'
import Card2form from '../Components/Card2form'

const Formonboard = () => {
  return (<>
    <div className='absolute font-pixeloidmono text-9xl  mt-1 ml-[-4rem]'>
      g'h
    </div>
    <div className='absolute font-pixeloidmono text-2xl  mt-[10rem] ml-[-4rem]'>
      Guidance Studio by SMI 
    </div>

    <div className="flex ml-[21rem] h-screen">
  <div className="w-[1rem] h-[65rem] mt-[-3rem] shadow-2xl rounded-full bg-sunset-50"></div>
</div>

 

<div className="mr-10 mt-[-60rem]">
    <img src="/Images/imageback.png"  alt="Description" className="w-[300px] h-auto" />
  </div>

  
  
  <div className="relative">  
  <div className="relative z-10">
    <Card2form/> 
  </div>

  <div className="absolute w-[46rem] h-[77rem] rounded-full   rounded-br-none bg-white shadow-xl mt-[-60rem] ml-[36rem]  z-0">  
 
  </div>
</div>


</> 
  )
}

export default Formonboard
