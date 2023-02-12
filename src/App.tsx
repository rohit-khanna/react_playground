import { useState } from "react";
import "./App.css";
import MemoComposition, { MemoAlone } from "./memo-composition";
import Child from "./memo-composition/Child";

function App() {
  return (
    <div className="App">
      {/* <MemoComposition>
        <Child color="blue" />
      </MemoComposition> */}

      <MemoAlone />
    </div>
  );
}

export default App;
