import React from 'react'

const Skills = () => {
  const gradientBackground = `linear-gradient(135deg, #2563eb, #60a5fa)`; // Slightly lighter blue gradient
  return (
    <div id="skills">
      <section className="text-white body-font">
        <div style={{ background: gradientBackground }} className="py-10 px-8">
          <div className="container px-5 py-24 pt-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-22">
              <h2 className="text-sm uppercase tracking-widest font-semibold mb-1 text-blue-200">
                Skills
              </h2>
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-white">
                My Skills
              </h1>
            </div>
            </div>


    <div className="flex flex-wrap -m-4 -mt-[5rem]">

    <div className="p-4 w-[100%] md:w-1/3">
  <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg title-font font-medium text-white">HTML</h2>
    </div>
    <div className="flex-grow">
      {/* Progress Bar */}
      <div className="relative h-2 w-full bg-gray-300 rounded-xl">
        <div className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl w-[100%]"></div>
      </div>
      <p className="font-bold text-right text-white mt-2">100%</p>
    </div>
  </div>
</div>

<div className="p-4 w-[100%] md:w-1/3">
  <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg title-font font-medium text-white">CSS</h2>
    </div>
    <div className="flex-grow">
      {/* Progress Bar */}
      <div className="relative h-2 w-full bg-gray-300 rounded-xl">
        <div className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl w-[95%]"></div>
      </div>
      <p className="font-bold text-right text-white mt-2">95%</p>
    </div>
  </div>
</div>

<div className="p-4 w-[100%] md:w-1/3">
  <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg title-font font-medium text-white">TypeScript/JavaScript</h2>
    </div>
    <div className="flex-grow">
      {/* Progress Bar */}
      <div className="relative h-2 w-full bg-gray-300 rounded-xl">
        <div className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl w-[90%]"></div>
      </div>
      <p className="font-bold text-right text-white mt-2">90%</p>
    </div>
  </div>
</div>

<div className="p-4 w-[100%] md:w-1/3">
  <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg title-font font-medium text-white">Next.js</h2>
    </div>
    <div className="flex-grow">
      {/* Progress Bar */}
      <div className="relative h-2 w-full bg-gray-300 rounded-xl">
        <div className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl w-[70%]"></div>
      </div>
      <p className="font-bold text-right text-white mt-2">70%</p>
    </div>
  </div>
</div>

<div className="p-4 w-[100%] md:w-1/3">
  <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg title-font font-medium text-white">Wordpress</h2>
    </div>
    <div className="flex-grow">
      {/* Progress Bar */}
      <div className="relative h-2 w-full bg-gray-300 rounded-xl">
        <div className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl w-[75%]"></div>
      </div>
      <p className="font-bold text-right text-white mt-2">75%</p>
    </div>
  </div>
</div>

<div className="p-4 w-[100%] md:w-1/3">
  <div className="flex rounded-lg h-full p-8 flex-col bg-gray-900 bg-opacity-40">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <h2 className="text-lg title-font font-medium text-white">React</h2>
    </div>
    <div className="flex-grow">
      {/* Progress Bar */}
      <div className="relative h-2 w-full bg-gray-300 rounded-xl">
        <div className="absolute bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-xl w-[60%]"></div>
      </div>
      <p className="font-bold text-right text-white mt-2">60%</p>
    </div>
  </div>
</div>

      
    </div>
  </div>
</section>

    </div>
    
  )
}

export default Skills