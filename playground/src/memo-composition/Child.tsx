import React, { useEffect } from "react";

import styled from "styled-components";

type Props = {
  color: string;
};

const StyledDiv = styled.div`
  padding: 1rem;
  font-size: small;
  text-align: left;
`;


export const Child: React.FC<Props> = ({ color }) => {
  const getFormattedTime= new Date().toLocaleTimeString("en-US",{
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const logsRef = React.useRef<string[]>([]);
  useEffect(() => {
    logsRef.current = [...logsRef.current, `Child useEffect on LOAD- ${getFormattedTime}`];
  }, [getFormattedTime]);

  useEffect(() => {
    logsRef.current = [
      ...logsRef.current,
      `Child useEffect as color changed to: ${color} - ${getFormattedTime}`,
    ];
  }, [color, getFormattedTime]);

  logsRef.current = [...logsRef.current, `Child re-renders- ${getFormattedTime}`];
  return (
    <StyledDiv style={{ backgroundColor: color }}>
      {logsRef.current.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </StyledDiv>
  );
};

export const MemoedChild = React.memo(
  Child,
  (prevProps: Readonly<Props>, nextProps: Readonly<Props>) => {
    return prevProps.color === nextProps.color;
  }
);
export default Child;
