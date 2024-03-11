"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  type,
  containerStyles,
  title,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
