import React from 'react'

const Card = () => {
  return (
<div className="relative grid grid-cols-1 gap-4">
  {/* Card 1 (Bottom) */}
  <div className="group relative">
    <div className="card glass w-[25rem] h-[20rem] transition-transform duration-300 hover:scale-105 relative group-hover:z-30 z-30">
      <figure>
        <img src="src/assets/image90.png" className="w-full h-[10rem] object-cover" />
      </figure>
      <div className="card-body font-pixeloidmono p-4">
        <p>Unlock Opportunities</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  </div>

  {/* Card 3 (Middle, overlaps between Card 1 and Card 2) */}
  <div className="group relative -mt-10 ml-[10rem]">
    <div className="card glass w-[20rem] h-[20rem] transition-transform duration-300 hover:scale-105 relative group-hover:z-30 z-40">
      <figure>
        <img src="src/assets/exported-image-8.png" className="w-full h-[10rem] object-cover" />
      </figure>
      <div className="card-body font-pixeloidmono p-4">
        <p>Innovate and Inspire</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  </div>

  {/* Card 2 (Top) */}
  <div className="group relative -mt-10 ml-[3rem]">
  <div className="group card glass w-[25rem]  h-[20rem] transition-transform duration-300 hover:scale-105  z-10 mt-[-26rem] group-hover:z-50 ">
      <figure>
        <img src="src/assets/exported-image-7.png" className="w-full h-[10rem] object-cover" />
      </figure>
      <div className="card-body font-pixeloidmono p-4">
        <p>Empower Your Learning</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  </div>
</div>




  

  )
}

export default Card
