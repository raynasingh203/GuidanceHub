import React from 'react'
import Button from '../Components/Button'
import Facultygrid from '../Components/Facultygrid'
import Facultyfilter from '../Components/Facultyfilter'

const Faculty = () => {
  return (
    <>
      <div className="mb-4">
        <Button />
      </div>

<div className='bg-steel-50 rounded-lg mt-5 '> 
      <div className="font-pixeloidmono text-black text-6xl ml-[-52rem] mt-[-1rem]">Browse Faculty</div>

      <div className="font-pixeloidmono text-black text-4xl ml-[1rem] mt-[2rem]"> <Facultyfilter/> </div>


<Facultygrid/>     </div>

<div className="ml-[70rem] absolute inset-0 z-[-1] mt-[-11rem]">
        <img src="/Images/imageback.png" alt="Description" className="w-[300px] h-auto" />
      </div>
    </>

  )
}

export default Faculty
