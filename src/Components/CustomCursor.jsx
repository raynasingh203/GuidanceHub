
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
     
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${event.clientX}px`;
          cursorRef.current.style.top = `${event.clientY}px`;
        }
      });
    };

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-5 h-5 bg-lime-300 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ${
        isHovered ? 'w-8 h-8 bg-black' : ''
      }`}
    ></div>
  );
};

export default CustomCursor;
