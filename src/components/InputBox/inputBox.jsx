import React from "react";

const InputBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter location"
      className="w-[100%] max-w-[400px] h-[60px] rounded-3xl p-3 mx-auto border-none"
    />
  );
};

export default InputBox;
