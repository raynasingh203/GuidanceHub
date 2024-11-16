import React from 'react'
import Button from '../Components/Button'

const Archive = () => {
  return (<>
    <div className="mb-4">
        <Button />
      </div>

      <div className=' font-pixeloidmono text-black text-8xl ml-[-58rem]  mt-[-2rem]   '   >   archive </div>

      <div className=' font-pixeloidmono text-black text-2xl ml-[-58rem]  mt-[2rem]   '   >   FILTER </div>

      <div className="mr-10 absolute inset-0 z-[-1] mt-[-1rem]">
    <img src="/Images/imageback.png"  alt="Description" className="w-[300px] h-auto" />
  </div>


  <div className="flex ml-[21rem] h-screen">
  <div className="w-[1rem] h-[65rem] mt-[-1rem] z-[-1] shadow-2xl rounded-full bg-sunset-50"></div>
</div>


<div className="flex ml-[51rem] h-screen">
  <div className="w-[1rem] h-[65rem] mt-[-60rem] z-[-1] shadow-2xl rounded-full bg-black"></div>
</div>


      </>

  )
}

export default Archive
