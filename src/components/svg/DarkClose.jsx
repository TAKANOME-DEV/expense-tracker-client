import React from "react";
import styled from "styled-components";

const Close = styled.svg`
  cursor: pointer;
`;

const DarkClose = () => {
  return (
    <Close
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.5 11.5L11.5 34.5"
        stroke="#2F303A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 11.5L34.5 34.5"
        stroke="#2F303A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Close>
  );
};

export default DarkClose;
