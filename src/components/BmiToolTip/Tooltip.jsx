import React from "react";

const Tooltip = ({ isHovered }) => {
  return (
    <div
      className={`${
        !isHovered ? "hidden " : "block "
      } bg-white shadow-lg p-7 absolute left-[50%] top-[10%] translate-x-[-50%] w-[80%] z-50 flex flex-col gap-5 rounded-md max-w-[400px] md:left-[75%] md:top-[40%]`}>
      <h1 className="text-black font-primary font-bold ">
        What your BMI means :
      </h1>
      <p className="text-gray-800 font-secondary font-medium text-base leading-5">
        BMI is a calculation of your size that takes into account your height
        and weight. A number of years ago, I remember using charts that asked
        you to find your height along the left side and then slide your finger
        to the right to see your "ideal weight" from choices listed under small,
        medium, or large "frame" sizes.
      </p>

      <div className="absolute right-[-9px] top-[3px] border-t-[10px] border-t-transparent border-l-[10px] border-l-white border-b-[10px] border-b-transparent"></div>
    </div>
  );
};

export default Tooltip;
