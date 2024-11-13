
import React, { useEffect, useRef, useState } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);
  const trailLength = 10; // Adjust trail length as needed

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Add the current mouse position to the trail
      const newTrail = [...trail, { x: event.clientX, y: event.clientY }];
      // Keep the trail length limited to trailLength
      if (newTrail.length > trailLength) {
        newTrail.shift();
      }
      setTrail(newTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [trail]);

  return (
    <>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed w-3 h-3 bg-lime-200 rounded-full pointer-events-none"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (trailLength - index) / trailLength, // Fades out toward the end of the trail
            transform: `translate(-80%, -90%) scale(${(trailLength - index) / trailLength})`, // Shrinks slightly
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
          }}
        ></div>
      ))}
    </>
  );
};

export default CursorTrail;
