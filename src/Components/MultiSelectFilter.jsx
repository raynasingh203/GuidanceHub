import React, { useState } from 'react';

const MultiSelectFilter = () => {
  // Initialize selectedFilters with default chips
  const [selectedFilters, setSelectedFilters] = useState({
    'Field': ['Animation'],
    'Proj Category': ['Thesis'],
    'Stage': ['Prototyping'],
    'Skills': ['Projection Mapping'],

  });

  const [showDropdown, setShowDropdown] = useState({}); // visibility of dropdowns

  const filterGroups = [
    ['Field', 'Proj Category', 'Stage'], // First row
    ['Skills', 'Urgency'], // Second row
  ];

 
  const filterOptions = {
    'Field': ['Graphic Design', 'Animation', 'Ui/Ux Design'],
    'Proj Category': ['Pre-Thesis', 'Internship', 'Thesis'],
    'Stage': ['Prototyping', 'Concept/Ideation', 'Testing/Usability'],
    'Skills': ['Motion Graphics', 'Projection Mapping', 'Web Design'],
    'Urgency': ['Immediate', 'Flexible', '...'],
  };

  const toggleDropdown = (filter) => {
    setShowDropdown((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handleSelect = (filter, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: [...(prev[filter] || []), option],
    }));
  };

  const removeChip = (filter, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: prev[filter].filter((item) => item !== option),
    }));
  };

  return (
    <div className="p-4 space-y-4"> {/* Reduced vertical spacing */}
      {filterGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`flex ${group.length === 3 ? 'justify-between' : 'gap-4'} flex-wrap items-start`}
        >
          {group.map((filter) => (
            <div key={filter} className="space-y-1 w-[30%]">
              {/* Filter Dropdown */}
              <div
                className="inline-flex items-center py-2 px-3 bg-lime-100 text-sunset-600 rounded-full cursor-pointer text-base font-medium"
                onClick={() => toggleDropdown(filter)}
              >
                <span className="mr-1">{filter}</span>
                <span>▼</span>
              </div>

              {/* Dropdown Options */}
              {showDropdown[filter] && (
                <div className="bg-white border rounded-md shadow-md mt-1 p-2 w-[180px]">
                  {filterOptions[filter].map((option) => (
                    <div
                      key={option}
                      className="cursor-pointer hover:bg-gray-200 p-1 rounded text-sm"
                      onClick={() => handleSelect(filter, option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}

              {/* Selected Chips */}
              <div className="flex flex-wrap mt-1 gap-2">
                {selectedFilters[filter]?.map((option) => (
                  <span
                    key={option}
                    className="inline-flex items-center py-1 px-3 bg-gray-300 text-black rounded-full text-sm font-semibold"
                  >
                    <span className="mr-2">{option}</span>
                    <span
                      className="cursor-pointer text-red-500 font-bold"
                      onClick={() => removeChip(filter, option)}
                    >
                      ×
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectFilter;
