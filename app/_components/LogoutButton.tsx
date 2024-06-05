"use client";

import { logout } from "@/actions/logout";

const LogoutButton = () => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      logout
    </span>
  );
};

export default LogoutButton;
