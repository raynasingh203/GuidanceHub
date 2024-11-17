import React, { useState } from 'react';
import Button from '../Components/Button';

const Recommendation = () => {
  // Initial labels
  const [labels, setLabels] = useState([
    'Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'
  ]);

  // Function to remove a label
  const removeLabel = (labelToRemove) => {
    setLabels(prevLabels => prevLabels.filter(label => label !== labelToRemove));
  };

  // State for showing the div
  const [showDiv, setShowDiv] = useState(false);

  // Toggle the visibility of the div on image click
  const toggleDiv = () => {
    setShowDiv(prevState => !prevState); // Toggle the current state
  };

  return (
    <>
      <div className="mb-4">
        <Button />
      </div>

      <div className="font-pixeloidmono text-black text-left text-8xl ml-[41rem] mt-[8rem]">
        Recomm <br />endat<br />ion.
      </div>

      <div className="ml-[41rem] mt-[2rem] space-y-2">
        {/* First Row */}
        <div className="flex space-x-2">
          {labels.slice(0, 3).map((label, index) => (
            <span
              key={index}
              className="inline-flex items-center py-1 px-3 m-1 font-pixeloidmono bg-white text-black rounded-full border border-black"
            >
              <span className="mr-2">{label}</span>
              <span
                className="cursor-pointer text-black font-bold text-lg"
                onClick={() => removeLabel(label)}
              >
                ×
              </span>
            </span>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex space-x-2">
          {labels.slice(3).map((label, index) => (
            <span
              key={index + 3}  // Ensuring unique keys for second row labels
              className="inline-flex items-center py-1 px-3 m-1 font-pixeloidmono bg-white text-black rounded-full border border-black"
            >
              <span className="mr-2">{label}</span>
              <span
                className="cursor-pointer text-black font-bold text-lg"
                onClick={() => removeLabel(label)}
              >
                ×
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="ml-[70rem] absolute inset-0 z-[-1] mt-[-11rem]">
        <img src="/Images/imageback.png" alt="Description" className="w-[300px] h-auto" />
      </div>

      {/* Image as a clickable button */}
      <div 
        className="ml-[-36rem] absolute inset-0 z-[-1] mt-[10rem] "
      >
        <button 
          onClick={toggleDiv} // Toggle div on button click
          className="focus:outline-none" // Remove focus outline for a cleaner look
        >
          <img 
            src="/Images/r.png" 
            alt="Description" 
            className="w-[600px] h-auto cursor-pointer" // Add pointer cursor to indicate clickability
          />
        </button>
        
        {/* Div content that appears on click */}
        {showDiv && (
          <div 
            className="absolute mt-[30rem] ml-[55rem] bg-black text-white rounded-xl p-6 w-[400px] shadow-lg opacity-75 z-10"
            style={{ position: 'absolute', top: '0', left: '0', transform: 'translate(0, -100%)' }} 
          >
            <h2 className="font-pixeloidmono text-2xl mb-2">Faculty name</h2>
            <p className="font-pixeloidmono text-sm">faculty details </p>
            <button className="font-pixeloidmono bg-lime-50 rounded-sm text-green-600 text-sm">send request </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Recommendation;
