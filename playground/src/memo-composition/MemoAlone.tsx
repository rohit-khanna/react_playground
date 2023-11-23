import React, { memo, useState } from "react";
import { MemoedChild } from "./Child";

type Props = {};

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
        <MemoedChild color="blue" />
      </div>
    </>
  );
};

export default MemoAlone;
