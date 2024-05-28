import React from "react";

const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-[#155724] bg-opacity-15 dark:bg-opacity-10 text-[#155724] p-[5px] pl-[15px] mt-2 text-[0.9rem] rounded border-[1px] border-[#155724]">
      {message}
    </div>
  );
};

export default SuccessMessage;
