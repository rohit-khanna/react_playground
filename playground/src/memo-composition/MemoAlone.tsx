import React, { memo, useState } from "react";
import Child, { MemoedChild } from "./Child";

type Props = {
  useMemoChild?: boolean;
};

const MemoAlone = (props: Props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h4>Counter: {counter}</h4>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment Counter
        </button>
      </div>

      <div>
        {props.useMemoChild ? (
          <MemoedChild color="yellow" />
        ) : (
          <Child color="yellow" />
        )}
      </div>
    </>
  );
};

export default MemoAlone;
