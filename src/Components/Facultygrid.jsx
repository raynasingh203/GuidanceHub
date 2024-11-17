import React, { useState } from 'react';

const Facultygrid = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleFacultyClick = (facultyName) => {
    setSelectedFaculty(facultyName);
  };

  return (
    <div>
      <div className="flow-root font-pixeloidmono mt-[4rem]">
        <dl className="-my-3 divide-y divide-gray-100">
          {/* Title section with additional div */}
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <div className="flex space-x-4 items-center">
              {/* First Title */}
              <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
                <dt className="font-medium text-sunset-500">CAC</dt>
              </div>
              {/* Second Title */}
              <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
                <dt className="font-medium text-sunset-500">Machine Learning</dt>
              </div>
              <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
                <dt className="font-medium text-sunset-500">Sustainable Design</dt>
              </div>
            </div>
            <dd 
              className="text-gray-700 text-right sm:col-span-2 px-4 py-2 cursor-pointer" 
              onClick={() => handleFacultyClick('Lisa Timothy')}
            >
              Lisa Timothy
            </dd>
          </div>

          {/* Repeat for other faculty members */}
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <div className="flex space-x-4 items-center">
              <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
                <dt className="font-medium text-sunset-500">DMA</dt>
              </div>
              <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
                <dt className="font-medium text-sunset-500">Animation</dt>
              </div>
            </div>
            <dd className="text-gray-700 text-right sm:col-span-2 px-4 py-2">John Fruciante</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <div className="flex space-x-4 items-center">
          {/* First Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">CAC</dt>
          </div>
          {/* Second Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">Machine Learning</dt>
          </div>
        </div>
        <dd className="text-gray-700 text-right sm:col-span-2 px-4 py-2">Lorem Ipsum</dd>
      </div>

      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <div className="flex space-x-4 items-center">
          {/* First Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">CAC</dt>
          </div>
          {/* Second Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">Machine Learning</dt>
          </div>
        </div>
        <dd className="text-gray-700 text-right sm:col-span-2 px-4 py-2">Sara Arora</dd>
      </div>

      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <div className="flex space-x-4 items-center">
          {/* First Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">CAC</dt>
          </div>
          {/* Second Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">Machine Learning</dt>
          </div>
        </div>
        <dd className="text-gray-700 text-right sm:col-span-2 px-4 py-2">Name Lastname </dd>
      </div>

      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <div className="flex space-x-4 items-center">
          {/* First Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">CAC</dt>
          </div>
          {/* Second Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">Machine Learning</dt>
          </div>
        </div>
        <dd className="text-gray-700 text-right sm:col-span-2 px-4 py-2">Name Lastname </dd>
      </div>
      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <div className="flex space-x-4 items-center">
          {/* First Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">CAC</dt>
          </div>
          {/* Second Title */}
          <div className="inline-flex items-center py-1 px-2 bg-lime-100 text-sunset-500 rounded-full">
            <dt className="font-medium text-sunset-500">Machine Learning</dt>
          </div>
        </div>
        <dd className="text-gray-700 text-right sm:col-span-2 px-4 py-2">Name Lastname </dd>
      </div>

        </dl>
      </div>

      {/* Display image if the selected faculty is Lisa Timothy */}
      {selectedFaculty === 'Lisa Timothy' && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-black bg-opacity-50">
          <img
            src="/Images/Screenshot 2024-11-18 at 4.46.16 AM.png"
            alt="Lisa Timothy"
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={() => setSelectedFaculty(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Facultygrid;
