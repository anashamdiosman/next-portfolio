import React from "react";

function DotsSVG() {
  return (
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
  );
}

export default DotsSVG;
