import React from 'react'

const Archivecard2 = () => {
    return (
        <div className='absolute mt-[-122rem] w-[200px] ml-[70rem]'>
    
    <h2 className="mt-[-2.5rem] text-xl font-medium text-black absolute font-pixeloidmono sm:text-3xl">Proj Title</h2>
    <div className='w-10 h-10 bg-black absolute font-pixeloidmono text-white mt-[-5.5rem]'> 3  </div>
    
          <a href="#" className="group relative block h-[20rem] sm:h-80 lg:h-96">
           
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            
            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white bg-cover bg-center transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
              style={{
                backgroundImage: 'url(/Images/aimg2.png)', 
              }}
            >
              <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 sm:size-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
    
                <h2 className="mt-4 text-xl font-medium text-pink-100 font-pixeloidmono sm:text-2xl"></h2>
              </div>
    
              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
              >
                <h3 className="mt-4 text-xl font-medium font-pixeloidmono sm:text-2xl">Proj desc</h3>
    
                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>
    
                <p className="mt-8 font-bold">...</p>
              </div>
            </div>
          </a>
        </div>
      );
}

export default Archivecard2
