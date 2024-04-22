"use client";
import React from "react";
import "./TagsInput.css";

const TagsInput = ({ tagsP, selectedTags }: any) => {
  const [tags, setTags] = React.useState(tagsP);

  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_: any, index: any) => index !== indexToRemove)]);
  };
  const addTags = (event: any) => {
    if (event.target.value !== "" && !tags.includes(event.target.value)) {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tags-input bg-gray-200 items-center w-full">
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
        className="bg-gray-200 text-gray-700 placeholder-gray-700 outline-none rounded p-2 w-full "
      />
      <ul className="flex flex-wrap">
        {tags.map((tag: any, index: any) => (
          <li
            key={index}
            className="tag mr-2 mb-2 flex items-center justify-center"
          >
            <span className="mb-[3px]">{tag}</span>
            <span className="ml-2" onClick={() => removeTags(index)}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsInput;
