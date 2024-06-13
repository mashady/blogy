import { useSession } from "next-auth/react";

const useRefreshSession = () => {
  const { update } = useSession();

  const refreshSession = async () => {
    // Send a request to your custom session update endpoint
    await fetch("/posts", {
      method: "POST",
    });

    // Trigger a re-fetch of the session data
    update();
  };

  return { refreshSession };
};

export default useRefreshSession;
