
import React, { useState, useEffect } from "react";

const images = [
  "src/assets/fw.png", 
  "src/assets/fw.png",
  "src/assets/fw.png",
  "src/assets/fw.png",
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
    <div className="relative bg-gray-300 shadow-xl w-[25rem] rounded-xl h-[420px]">
      
      <div className="w-96 h-96 mx-auto overflow-hidden rounded-xl absolute top-0 left-1/2 transform -translate-x-1/2 mt-10">
        <div className="absolute inset-0 flex transition-all duration-1000 ease-in-out">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
  
 
};

export default ImageBentoBox;
