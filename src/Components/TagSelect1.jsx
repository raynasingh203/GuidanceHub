import React, { useState } from 'react';

const TagSelect1 = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  
    // Available tags data
    const availableTags = [
      { id: '1', label: 'Creative Writing', description: 'ok' },
      { id: '2', label: 'Machine Learning', description: 'ok' },
      { id: '3', label: 'Cybersecurity', description: 'ok' },
      { id: '4', label: 'Robotics', description: 'ok' },
      { id: '5', label: 'Game Development', description: 'ok' },
      { id: '6', label: 'Sustainable Design', description: 'ok' },
    ];
  
   
    const filteredTags = availableTags.filter(tag =>
      tag.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
   
    const handleTagChange = (event) => {
      const value = event.target.value;
      if (selectedTags.includes(value)) {
        setSelectedTags(selectedTags.filter(tag => tag !== value)); // Remove tag
      } else {
        setSelectedTags([...selectedTags, value]); 
      }
    };
  
   
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value); 
    };
  
    return (
      <div className="tag-select-container font-pixeloidmono">
        
        <label htmlFor="search" className="block text-sm font-pixeloidmono font-medium text-gray-700">
       Areas Of Interest 
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a tag..."
          className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
        />
  
        {/* Select Dropdown */}
        <label htmlFor="tag-select" className="block text-sm font-pixeloidmono font-medium text-gray-700 mt-4">
         
        </label>
        <select
          id="tag-select"
          multiple
          value={selectedTags}
          onChange={handleTagChange}
          className="block w-full mt-2 p-2 border border-gray-300 rounded-md"
        >
          {filteredTags.map(tag => (
            <option key={tag.id} value={tag.id}>
              {tag.label}
            </option>
          ))}
        </select>
  
        {/* Display selected tags as removable labels below the dropdown */}
        <div className="selected-tags font-pixeloidmono mt-2">
          {selectedTags.length > 0 ? (
            selectedTags.map(tagId => {
              const tag = availableTags.find(t => t.id === tagId);
              return (
                <span
                  key={tag.id}
                  className="inline-flex items-center py-1 px-2 m-1 bg-lime-100 text-sunset-500 rounded-full"
                >
                  {tag.label}
                  <button
                    type="button"
                    onClick={() => setSelectedTags(selectedTags.filter(id => id !== tag.id))}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </span>
              );
            })
          ) : (
            <p className="text-sm text-gray-500">No tags selected</p>
          )}
        </div>
      </div>
    );
  };

export default TagSelect1
