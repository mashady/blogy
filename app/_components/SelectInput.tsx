import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const SelectInput = ({ sectionSelected, error, defaultValue }: any) => {
  const handleSelect = (value: any) => {
    sectionSelected(value);
  };
  return (
    //border-[#4242423b] dark:border-[red]
    <Select.Root onValueChange={handleSelect} defaultValue={defaultValue}>
      <Select.Trigger
        className={`${
          error
            ? "border-[#dc3545] dark:border-[#dc3545]"
            : "border-[#4242423b] dark:border-[#fff]"
        } inline-flex items-center justify-between rounded px-[15px] leading-none  gap-[5px] bg-inherit  // if error add red bord border-[1px] text-[white]    data-[placeholder]:text-gray-700 dark:data-[placeholder]:text-[white] outline-none w-[300px] h-[50px]`}
        aria-label="Food"
      >
        <Select.Value
          onChange={handleSelect}
          className=""
          placeholder="Select a section"
        />
        <Select.Icon className="text-gray-700 dark:text-white">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="mt-12 ml-2  overflow-hidden border-[1px] text-black dark:text-white border-[#4242423b] dark:border-white   bg-white dark:bg-[#0e0e0e] rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white dark:bg-black  cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px] ">
            <Select.Group>
              <SelectItem
                value="iphone"
                className="text-black dark:text-white hover:text-white"
              >
                Iphone
              </SelectItem>
              <SelectItem
                value="vision"
                className="text-black dark:text-white hover:text-white"
              >
                Vision
              </SelectItem>

              <SelectItem
                value="mac"
                className="text-black dark:text-white hover:text-white"
              >
                Mac
              </SelectItem>
              <SelectItem
                value="watch"
                className="text-black dark:text-white hover:text-white"
              >
                Watch
              </SelectItem>
              <SelectItem
                value="ipad"
                className="text-black dark:text-white hover:text-white"
              >
                Ipad
              </SelectItem>
              <SelectItem
                value="tv"
                className="text-black dark:text-white hover:text-white"
              >
                TV
              </SelectItem>
              <SelectItem
                value="applestore"
                className="text-black dark:text-white hover:text-white"
              >
                Apple store
              </SelectItem>
              <SelectItem
                value="appleone"
                className="text-black dark:text-white hover:text-white"
              >
                Apple one
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-[13px] leading-none text-[#1f4d78] rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-[#1f4d78] data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectInput;
/**
 *
 *
 * #simplemde-editor-2-wrapper > div > div.CodeMirror.cm-s-easymde.CodeMirror-wrap.CodeMirror-empty
 *
 *
 */
