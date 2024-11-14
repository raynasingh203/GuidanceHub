import React, { useState } from 'react';

const Blur = () => {
  const [blur, setBlur] = useState(0);

  const handleMouseMove = (e) => {
   
    const blurAmount = (e.clientX / window.innerWidth) * 15; 
    setBlur(blurAmount);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <img className='rounded-lg w-[25rem] h-[10rem]'
        src="src/assets/plus-math.png" 
        style={{ filter: `blur(${blur}px)` }}
      />
    </div>
  );
};

export default Blur;
