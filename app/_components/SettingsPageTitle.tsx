import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const SettingsPageTitle = ({ pageName }: { pageName: string }) => {
  return (
    <div className="">
      <div className="flex items-center space-x-2">
        <GrHomeRounded className="mr-2" />
        <span className="cursor-pointer hover:underline">Home</span>
        <MdNavigateNext className="text-xl" />
        <span className="cursor-pointer hover:underline">Settings</span>
        <MdNavigateNext className="text-xl" />
        <span className="cursor-pointer hover:underline capitalize">
          {pageName}
        </span>
      </div>
    </div>
  );
};

export default SettingsPageTitle;
