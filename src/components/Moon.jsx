import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  cursor: pointer;
`;

const Moon = () => {
  return (
    <Svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="33" height="33" rx="10" fill="white" />
      <path
        d="M24 17.1757C23.8686 18.5972 23.3351 19.9519 22.4619 21.0813C21.5887 22.2107 20.412 23.068 19.0693 23.553C17.7266 24.038 16.2736 24.1305 14.8802 23.8198C13.4869 23.5092 12.2108 22.8081 11.2014 21.7986C10.1919 20.7892 9.49084 19.5131 9.18015 18.1198C8.86947 16.7264 8.96203 15.2734 9.44701 13.9307C9.93199 12.588 10.7893 11.4113 11.9187 10.5381C13.0481 9.66486 14.4028 9.13137 15.8243 9C14.9921 10.1259 14.5916 11.5132 14.6957 12.9095C14.7998 14.3057 15.4016 15.6183 16.3917 16.6083C17.3817 17.5984 18.6943 18.2002 20.0905 18.3043C21.4868 18.4084 22.8741 18.0079 24 17.1757V17.1757Z"
        stroke="black"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="0.5"
        y="0.5"
        width="32"
        height="32"
        rx="9.5"
        stroke="black"
        stroke-opacity="0.3"
      />
    </Svg>
  );
};

export default Moon;
