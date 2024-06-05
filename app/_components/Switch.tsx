import React, { useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { boolean } from "zod";

const TwoFactor = ({
  handleSelectTwoFactor,
  defaultValue,
}: {
  handleSelectTwoFactor: any;
  defaultValue: boolean | undefined;
}) => {
  const [checked, setChecked] = useState(defaultValue);

  useEffect(() => {
    // Update the state when defaultValue changes
    setChecked(defaultValue);
  }, [defaultValue]);

  const handleChange = (value: boolean) => {
    console.log("value changed", value);
    setChecked(value);
    handleSelectTwoFactor(value);
  };

  return (
    <form>
      <div className="flex items-center">
        <label
          className="text-white text-[15px] leading-none pr-[15px]"
          htmlFor="two-factor"
        >
          Two Factor Authentication
        </label>
        <Switch.Root
          className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
          id="two-factor"
          onCheckedChange={handleChange}
          checked={checked ?? false}
        >
          <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
      </div>
    </form>
  );
};

export default TwoFactor;
