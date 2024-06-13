import React from "react";

const Switcher = ({ isChecked, onChange }) => {
  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="sr-only"
        />
        <span
          className={`label flex items-center text-sm font-medium text-dark ${
            isChecked ? "text-light" : "text-dark"
          }`}
        >
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-white" : "bg-black"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-light duration-200 ${
              isChecked ? "translate-x-[28px] bg-black" : "bg-white"
            }`}
          ></span>
        </span>
        <span
          className={`label flex items-center text-sm font-medium text-dark ${
            isChecked ? "text-light" : "text-dark"
          }`}
        >
          DARK
        </span>
      </label>
    </>
  );
};

export default Switcher;
