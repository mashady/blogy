import React from "react";
import delay from "delay";

const Loading = () => {
  delay(50000);

  return <div>loading...</div>;
};

export default Loading;
