import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log(navigator);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners when the component mounts
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  console.log(navigator.onLine);
  return (
    <div>
      {isOnline ? (
        <p>Internet connection is stable.</p>
      ) : (
        <p>Internet connection lost.</p>
      )}
    </div>
  );
};

export default ConnectionStatus;
