import React, { useState, useEffect } from "react";

import styled from "styled-components";

type Props = {
  color: string;
};

const StyledDiv = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 1rem;
`;

const Child: React.FC<Props> = ({ color }) => {
  useEffect(() => {
    console.log("Child useEffect on LOAD");
  }, []);

  useEffect(() => {
    console.log("Child useEffect as color changed to:", color);
  }, [color]);

  console.log("Child re-renders");

  return <StyledDiv style={{ backgroundColor: color }}>Child</StyledDiv>;
};

export const MemoedChild = React.memo(
  Child,
  (prevProps: Readonly<Props>, nextProps: Readonly<Props>) => {
    return prevProps.color === nextProps.color;
  }
);
export default Child;
