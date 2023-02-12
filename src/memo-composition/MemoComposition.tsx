import React, { useState, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MemoComposition: React.FC<Props> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h4>Counter: {counter}</h4>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment Counter
        </button>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MemoComposition;
