import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  //ab
  children: ReactNode;
}) => {
  return (
    //h-full mx-auto w-full max-w-screen-xl px-2.5
    <div // max-w-[1280px] mx-auto px-4
      className={`max-w-[1280px] mx-auto px-4  ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
