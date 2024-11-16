import React, { useState } from 'react';

const FeedbackForm = () => {
  const [experienceRating, setExperienceRating] = useState(0);
  const [project, setProject] = useState("Project 1");

  const handleNextClick = () => {
    // Handle next button click logic
    alert("Feedback submitted");
  };

  const handleArrowClick = (direction) => {
    const projects = ["Project 1", "Project 2", "Project 3"];
    let currentIndex = projects.indexOf(project);
    if (direction === "left") {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    } else {
      currentIndex = (currentIndex + 1) % projects.length;
    }
    setProject(projects[currentIndex]);
  };

  const handleRatingClick = (rating) => {
    setExperienceRating(rating);
  };

  return (
    <div className="flex h-auto w-screen ml-[-24rem] mt-[-0.2rem] items-center justify-center">
      <div className="flex w-[34rem] flex-col rounded-full rounded-br-none bg-gray-50 px-6 shadow-2xl sm:px-14">
        <div className="flex w-full justify-between self-start pt-12 pb-8">
          <h2 className="font-serif text-2xl font-pixeloidmono font-extrabold text-black">Feedback Form</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[1rem] w-5 cursor-pointer text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        {/* Project selection with arrows */}
        <div className="relative mb-4 flex items-center">
          <span className="text-lg font-pixeloidmono mr-4">Project: {project}</span>
          <svg
            onClick={() => handleArrowClick("left")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <svg
            onClick={() => handleArrowClick("right")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Experience Rating */}
        <div className="flex flex-col mb-4">
          <span className="text-lg font-pixeloidmono font-semibold">Your Experience</span>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                  experienceRating >= rating
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {rating}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Ratings */}
        <div className="flex flex-col mb-4">
          <span className="text-lg font-pixeloidmono font-semibold">Overall Feedback</span>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
                  experienceRating >= rating
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {rating}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Anonymously Checkbox */}
        <div className="my-4 space-y-3">
          <label htmlFor="anonymous" className="flex space-x-4">
            <input
              id="anonymous"
              name="anonymous"
              type="checkbox"
              className="h-6 w-6 shrink-0 accent-gray-900"
            />
            <span id="anonymous-description" className="text-xs font-pixeloidmono text-gray-600">
              Submit Anonymously
            </span>
          </label>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="my-2 rounded-full bg-gray-900 py-3 font-pixeloidmono w-[10rem] ml-[20rem] rounded-br-none animate-pulse font-medium text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
