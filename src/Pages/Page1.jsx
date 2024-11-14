import React from 'react'
import Button from '../Components/button'
import Indicator from '../Components/Indicator'
import Sidebar from '../Components/Sidebar'
import Blur from '../Components/Blur'




const Page1 = () => {
  
return (
        <>
        <Button>  </Button> <Blur> </Blur>
              <div className='font-pixeloidmono text-5xl py-10'>
             ......
              </div>
              <h1 className='font-pixeloidmono pl-40 text-8xl'>   GuidanceHub </h1>
         <div className='py-5'>
         <Indicator> </Indicator>
        </div> 
         <div className="flex justify-start items-start -mt-96">
          <Sidebar> </Sidebar>
          </div>
        
        
            </>
        )
  
}

export default Page1
