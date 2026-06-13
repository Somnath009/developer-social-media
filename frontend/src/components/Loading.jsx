import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner container */}
        <div className="relative flex items-center justify-center w-14 h-14">
          {/* Subtle background ring */}
          <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
          
          {/* Animated gradient ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full animate-spin"></div>
          
          {/* Inner pulse */}
          <div className="absolute w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>  
  )
}

export default Loading