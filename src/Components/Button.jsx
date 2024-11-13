import React from 'react'

const Button = () => {
    return (
        <div className="bg-gray-100 rounded-xl ml-[17rem] w-5/6 h-14">

          <div className="font-pixeloidmono space-y-1 space-x-2">
            <a
              role="button"
              className="btn w-16  px-10 bg-lime-200 text-black text-2xl rounded-l-lg hover:bg-grey-100 focus:outline-none"
            >
              g'h
            </a>
            <button
              type="submit"
              className="btn  px-4 bg-lime-200 text-black text-2xl rounded-l-lg hover:bg-grey-100 focus:outline-none"
            >
              GuidanceHub
            </button>
            <button
              type="submit"
              className="btn  px-4 bg-white text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
            >
              +
            </button>
            <button
              type="submit"
              className="btn  px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
            >
              request
            </button>
            <button
              type="submit"
              className="btn  px-8 bg-black text-white text-lg rounded-l-lg hover:bg-grey-200 focus:outline-none"
            >
              archive
            </button>
            <button
              type="submit"
              className="btn px-4 bg-lime-200 text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
            >
              +
            </button>
            <button
              type="submit"
              className="btn  px-4 bg-white text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
            >
              +
            </button>
            <button
              type="submit"
              className="btn px-4 bg-lime-200 text-black text-2xl rounded-l-lg hover:bg-lime-100 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
      )
    }
      
export default Button
