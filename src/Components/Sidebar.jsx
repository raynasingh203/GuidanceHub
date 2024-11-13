import React from 'react'

const Sidebar = () => {
    return (
      <div>

<main class="flex">
    <section class="container max-w-2xl mx-auto p-4">
      <div class="flex items-start justify-center">
        <div class="flex flex-col shadow-md w-20 md:w-28 relative">
          <div class="absolute -top-2 left-4 w-2 h-4 bg-gray-400"></div>
          <div class="absolute -top-2 right-4 w-2 h-4 bg-gray-400"></div>
          <span class="bg-lime-400 text-center font-pixeloidmono text-white p-1 md:p-2">month</span>
          <span class="text-2xl md:text-4xl font-pixeloidmono text-black font-bold bg-white text-center px-3 pt-3 pb-2">day</span>
          <span class="text-sm md:text-md bg-white text-orange-600 font-pixeloidmono text-center md:p-1 border-t-2 border-gray-100 border-dashed">year</span>
        </div>
      </div>
    </section>
  </main>
        <div className="drawer font-pixeloidmono lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
         label 1
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 rounded-md space-y-4">
              <li>
                <div className="badge bg-lime-100 p-5 text-black gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-4 w-4 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                label 1
                </div>

              </li>
              <li>
                <div className="badge bg-lime-100 p-5 text-black gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-4 w-4 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                label 2
                </div>
              </li>
              <li>
                <div className="badge bg-lime-100 p-5 text-black gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-4 w-4 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
               filter 3
                </div>
              </li>
              <li>
                <div className="badge bg-lime-100 p-5 text-black gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-4 w-4 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                 filter 3
                </div>



                {/* <div className= " rounded-l-lg bg-lime-100 text-black py-19 px-10 m-10 whitespace" placeholder  */}
                 
              </li>
            </ul>
          </div>
        </div>
      </div>




    );
  };
  
 
  

export default Sidebar
