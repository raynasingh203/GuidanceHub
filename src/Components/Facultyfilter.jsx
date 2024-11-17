import React, { useState } from 'react';

const Facultyfilter = () => {
  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    filter1: [],
    filter2: [],
    filter3: [],
  });

  // State to manage which filter dropdown is open
  const [isOpen, setIsOpen] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
  });

  // Handle filter selection
  const handleSelect = (e, filterName) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedFilters({ ...selectedFilters, [filterName]: options });
  };

  // Handle chip removal
  const handleRemoveChip = (filterName, chipValue) => {
    const updatedFilters = selectedFilters[filterName].filter(value => value !== chipValue);
    setSelectedFilters({ ...selectedFilters, [filterName]: updatedFilters });
  };

  // Toggle dropdown visibility
  const toggleDropdown = (filterName) => {
    setIsOpen((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  return (
    <div className='bg-gray-100 rounded-full shadow-2xl outline-dashed p-[0.5rem]'>
      {/* Filter Title and Dropdowns */}
      <div className="flex items-center mt-4 ml-10 space-x-6">
        
        <div className="font-pixeloidmono text-black text-2xl">FILTERS</div>

        {/* Filter 1 */}
        <div className="flex flex-col relative">
          <div
            className="cursor-pointer text-black text-lg"
            onClick={() => toggleDropdown('filter1')}
          >
        Department ⬇️
          </div>
          {isOpen.filter1 && (
            <select
              multiple
              className="rounded-sm border border-gray-300 p-2 mt-6 text-2xl absolute"
              value={selectedFilters.filter1}
              onChange={(e) => handleSelect(e, 'filter1')}
            >
              <option value=" CAC">CAC</option>
              <option value=" DMA">DMA</option>
              <option value=" CE">CE</option>
              <option value="IADP">CE</option>
              <option value=" Film">CE</option>
              <option value="Option 3">CE</option>
              <option value="Option 3">CE</option>
              <option value="Option 3">CE</option>
            </select>
          )}
        </div>

        {/* Filter 2 */}
        <div className="flex flex-col relative">
          <div
            className="cursor-pointer text-black text-lg"
            onClick={() => toggleDropdown('filter2')}
          >
            Research Areas ⬇️
          </div>
          {isOpen.filter2 && (
            <select
              multiple
              className="rounded-sm border border-gray-300 text-2xl p-2 mt-6 absolute"
              value={selectedFilters.filter2}
              onChange={(e) => handleSelect(e, 'filter2')}
            >
              <option value="AI">AI</option>
              <option value="Sustainable Design">Sustainable Design</option>
              <option value="Animation">Animation</option>
            </select>
          )}
        </div>

        {/* Filter 3 */}
        <div className="flex flex-col relative">
          <div
            className="cursor-pointer text-black text-lg"
            onClick={() => toggleDropdown('filter3')}
          >
           Skills ⬇️
          </div>
          {isOpen.filter3 && (
            <select
              multiple
              className="rounded-sm border border-gray-300 p-2 mt-6 text-lg absolute"
              value={selectedFilters.filter3}
              onChange={(e) => handleSelect(e, 'filter3')}
            >
              <option value="Web dev">Web dev</option>
              <option value="Data analyis">Data analyis</option>
              <option value="ML">ML</option>
            </select>
          )}
        </div>
      </div>

      {/* Selected Chips */}
      <div className="ml-10 mt-6 flex flex-wrap space-x-2">
        {Object.keys(selectedFilters).map(
          (key) =>
            selectedFilters[key].length > 0 && 
            selectedFilters[key].map((chip, idx) => (
              <div
                key={idx}
                className="inline-flex items-center py-1 px-2 bg-white text-black outline-double rounded-full"
              >
                <span className="mr-2">{chip}</span>
                <span
                  className="cursor-pointer text-sunset-500 font-bold text-lg"
                  onClick={() => handleRemoveChip(key, chip)}
                >
                  ×
                </span>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default Facultyfilter;
