import React from "react";
import delay from "delay";
import Skeleton from "../../_components/Skeleton";

const Loading = () => {
  delay(9000000);
  return (
    <>
      <div className="mb-6 max-w-[1280px] mx-auto px-4 mt-8">
        <Skeleton width="90px" height="20px" style={{ marginBottom: "5px" }} />
        <Skeleton width="700px" height="40px" style={{ marginBottom: "5px" }} />
        <Skeleton width="700px" height="40px" style={{ marginBottom: "5px" }} />
        <Skeleton
          width="800px"
          height="400px"
          style={{ marginBottom: "5px" }}
        />
      </div>
      {/**
     * <div className="w-full h-[500px] flex bg-white dark:bg-[#0E0E0E] items-center justify-center">
      <div className="w-[35px] mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <radialGradient
            id="a12"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#1F4D78"></stop>
            <stop offset=".3" stop-color="#1F4D78" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#1F4D78" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#1F4D78" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#1F4D78" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a12)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#1F4D78"
            stroke-width="15"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      </div>
      <div className="text-[16px] font-semibold">Loading...</div>
    </div>
     */}
    </>
  );
};

export default Loading;
