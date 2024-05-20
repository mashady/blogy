"use client";

/** the internet connection did not handled till now */
import { RiWifiOffLine } from "react-icons/ri";
import useNetworkStatus from "./NoInternetConnection ";
import NoNet from "./NoInternetConnection ";
import ConnectionStatus from "./NoInternetConnection ";
const NoConnections = () => {
  const handleNetStatus = () => {
    /**
     * console.log(
      "Initially " + (window.navigator.onLine ? "on" : "off") + "line"
    );

    window.addEventListener("online", () => console.log("Became online"));
    window.addEventListener("offline", () => console.log("Became offline"));

    console.log("window.navigator.onLine is " + window.navigator.onLine);
     * 
     * 
     */
  };
  return (
    <div className="flex flex-col items-center justify-center text-wrap">
      <div className="bg-[#1F4D78] bg-opacity-15 p-12 w-[150px] h-[150px] rounded flex justify-center items-center">
        <RiWifiOffLine className="text-5xl text-[#1f4d78]" />
      </div>
      <h1 className="text-3xl font-semibold mt-4">No internet connection</h1>
      <p className="text-center w-[270px] mt-2">
        Please check your internet connection and try again
      </p>
      <button
        onClick={handleNetStatus}
        className="bg-sec text-white w-[150px] h-[40px] mt-6 rounded-full"
      >
        Retry
      </button>
    </div>
  );
};

export default NoConnections;
