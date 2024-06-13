import React from "react";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-[#dc3545] bg-opacity-15 mb-2 dark:bg-opacity-10 text-[#dc3545] p-[5px] pl-[15px] mt-2 text-[0.9rem] rounded border-[1px] border-[#dc3545]">
      {message}
    </div>
  );
};

export default ErrorMessage;
