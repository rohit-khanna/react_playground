import { useState } from "react";
import "./App.css";
import MemoComposition, { MemoAlone } from "./memo-composition";
import Child from "./memo-composition/Child";
import QueryTest from "./react-query";
import { QueryClient, QueryClientProvider } from "react-query";


// Create a client
const queryClient = new QueryClient()


function App() {
  return (
    <div className="App">
      {/* <MemoComposition>
        <Child color="blue" />
      </MemoComposition> */}

      {/* <MemoAlone /> */}

      <QueryClientProvider client={queryClient}>
      <QueryTest/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
