import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 text-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Projects
              <br/>
              </h1>
              <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray"></h2>
              Tap/Click Any Project to View Live
            
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* { Project 1 } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/coffeeshop.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Coffee Shop Website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Coffee Shop
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Start your day right with a cup of our freshly brewed coffee.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://coffee-shop-website-eight.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 2 } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/Weatherapp.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Weather Widget App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Weather App
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning Next.js
                  </p>
                  <Link
                    target="_blank"
                    href={"https://weather-widget-next-js-lyart.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 3 } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/countdowntimer.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    CountDown Timer
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Countdown Timer Built with Next.js
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Countdown Timer application allows users to: Set a time
                    duration Start, pause, and reset the timer Display the
                    remaining time
                  </p>
                  <Link
                    target="_blank"
                    href={"https://countdowntimer-theta.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 4 } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/NumberGuessing.png")}
                />
                <div className="px-7 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Number Guessing Game
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Mini Next.js Number Guessing Game App
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Number Guessing Game application allows users to: Start,
                    pause, and guess the number Try again, and see the number of
                    guess attempts.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://number-guessing-game-next-js.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 5 } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/resumebuilder1.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Dynamic Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CV Builder
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    Generates a unique URL for each resume based on the user’s
                    username, and allows the resume to be shared and downloaded.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://hackathon-milestone5-mu.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 6 } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/pictures/calculatorproject.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Calculator Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-700">
                    This is the Mini Project I have made during Learning
                    Typescript.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://calculator-app-jet-omega.vercel.app/"}
                  >
                    <p className="leading-relaxed text-blue-500 font-bold hover:underline">
                      View Live
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
