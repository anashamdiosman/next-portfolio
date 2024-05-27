import React from "react";
import banner from "../../Assets/banner.jpg";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../styles/Banner.module.css";

function Banner() {
  return (
    <div
      className="h-screen w-screen"
      style={{
        background: `linear-gradient(180deg, rgba(1,1,2,0.4) 0%, rgba(8,11,18,1) 86%), url("/assets/banner.jpg") center center / cover no-repeat`,
        width: "100%",
      }}
    >
      <div
        className="relative overflow-hidden h-full"
        style={{ paddingTop: "50px" }}
      >
        {/* blob section */}
        <div className="bounce-animation-local absolute top-2 left-[-50px] w-40 h-40 drop-shadow-xl">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#9F81DD"
              d="M50,-59.2C62.4,-49.2,68.5,-31.2,71.4,-12.9C74.2,5.4,73.9,23.9,64.9,35.4C55.8,47,38.1,51.5,20.4,59.2C2.8,67,-14.8,78.1,-25.8,73.1C-36.8,68.2,-41.1,47.2,-47.7,30.2C-54.3,13.2,-63.3,0.2,-62,-11.7C-60.8,-23.6,-49.4,-34.4,-37.3,-44.5C-25.3,-54.6,-12.7,-64,3.1,-67.7C18.8,-71.4,37.6,-69.3,50,-59.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* dots section */}
        <div className="absolute bottom-2 right-[-20px] w-80 h-80">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="48.5"
                height="42"
                patternTransform="scale(1) rotate(0)"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="hsla(180, 1%, 75%, 0)"
                />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  transform="translate(4.25,0)"
                  strokeWidth="1"
                  stroke="none"
                  fill="hsla(260, 58%, 69%, 1)"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(-28,0)"
              fill="url(#a)"
            />
          </svg>
        </div>

        {/* glass section */}
        <div className="w-full h-full p-12">
          <div className="white-glass-design flex flex-col items-start justify-center w-full h-full  p-4 gap-4">
            <div
              title="Hey This is Anas!"
              className={`text-black text-2xl sm:text-4xl ${styles?.glitch_div}`}
            >
              Hey This is <span>Anas</span>!
            </div>
            <div className="flex gap-7">
              <div className="w-1 h-full border-solid border-2 border-zinc-800 bg-zinc-800"></div>
              <h2 className="text-zinc-800 text-xl sm:text-2xl italic">
                <Typewriter
                  words={[
                    "A software developer specializing in React, Node.js, and Next.js.",
                  ]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  delaySpeed={1000}
                />
              </h2>
            </div>
          </div>
        </div>

        {/* scroll secction */}
        <div className="absolute bottom-5 left-1/2 w-6 border-solid border-2 h-10 border-zinc-200 rounded-full flex justify-center">
          {/* <div className="w-2/3 h-5 rounded-full bg-custom-main-color "> */}
          <div className="w-full h-5 cursor-animation rounded-full bg-custom-main-color "></div>
          {/* </div>/ */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
