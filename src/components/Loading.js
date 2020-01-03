import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: 40px;
  width: 50px;
  height: 50px;
  position: relative;
  top: 225px;
  left: 235px;

  & .path {
    stroke: #428bca;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const SpinnerDiv = styled.div`
  width: 650px;
  height: 650px;
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Spinner = () => (
  <SpinnerDiv>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  </SpinnerDiv>
);


export default Spinner