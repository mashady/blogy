"use client";
/** the internet connection did not handled till now */
import { RiWifiOffLine } from "react-icons/ri";
import useNetworkStatus from "./NoInternetConnection ";
const NoConnections = () => {
  const { isOnline } = useNetworkStatus();
  return (
    <div className="flex flex-col items-center justify-center text-wrap">
      <div className="bg-[#1F4D78] bg-opacity-15 p-12 w-[150px] h-[150px] rounded flex justify-center items-center">
        <RiWifiOffLine className="text-5xl text-[#1f4d78]" />
      </div>
      {isOnline ? <div>u r online</div> : <div>u r offline</div>}
      <h1 className="text-3xl font-semibold mt-4">No internet connection</h1>
      <p className="text-center w-[270px]  mt-2">
        Please check your internet connection and try again
      </p>
      <button className="bg-sec text-white w-[150px] h-[40px] mt-6 rounded-full">
        Retry
      </button>
    </div>
  );
};

export default NoConnections;
