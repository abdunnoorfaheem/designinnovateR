import React from "react";

const Button = ({children,className}) => {
  return (
    <>
      <button className={`text-[18px] font-semibold bg-[#FF5538] text-white rounded-[14px] py-[14px] px-[28px] ${className}`}>
       {children}
      </button>
    </>
  );
};

export default Button;
