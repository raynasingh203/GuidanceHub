
import React, { useState, useEffect } from "react";

const images = [
  "/Images/fw.png", 
  "/Images/bg1.png",
  "/Images/bg3.png",
  
];

const ImageBentoBox = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black shadow-xl w-[35rem] rounded-xl h-[420px]">
      
      <div className="w-[90rem] h-96 mx-auto ml-[30rem] rounded-xl absolute top-0 left-1/2 transform -translate-x-1/2 mt-[2rem]">
        <div className="absolute flex transition-all duration-1000 ease-in-out">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-[35rem] h-[25rem] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
  
 
};

export default ImageBentoBox;
