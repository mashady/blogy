import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

const ChipsInput = ({ name, control }) => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
      event.preventDefault(); // Prevent form submission if inside a form
    }
  };

  const removeChip = (index) => {
    setChips(chips.filter((_, i) => i !== index));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {chips.map((chip, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 8px",
                  background: "#ddd",
                  borderRadius: "16px",
                }}
              >
                {chip}
                <button
                  onClick={() => removeChip(index)}
                  style={{
                    marginLeft: "8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter a tag and press Enter"
            style={{
              marginTop: "8px",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            onBlur={() => {
              field.onChange(chips); // Update form state on blur
            }}
          />
        </>
      )}
    />
  );
};

export default ChipsInput;
