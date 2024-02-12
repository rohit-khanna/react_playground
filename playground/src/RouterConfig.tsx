import { QueryClient, QueryClientProvider } from "react-query";
import { Link, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MemoComposition, { MemoAlone } from "./memo-composition";
import Child from "./memo-composition/Child";
import QueryTest from "./react-query";
import React from "react";
// Create a client
const queryClient = new QueryClient();

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/"> Back</Link>
      {children}
    </div>
  );
};

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/memo-composition",
    element: (
      <Wrapper>
        <MemoComposition>
          <Child color="white" />
        </MemoComposition>
      </Wrapper>
    ),
  },
  {
    path: "/memo-alone",
    element: (
      <Wrapper>
        <MemoAlone useMemoChild />
      </Wrapper>
    ),
  },

  {
    path: "/without-memo",
    element: (
      <Wrapper>
        <MemoAlone useMemoChild={false} />
      </Wrapper>
    ),
  },
  {
    path: "/query-test",
    element: (
      <Wrapper>
        <QueryClientProvider client={queryClient}>
          <QueryTest />
        </QueryClientProvider>
      </Wrapper>
    ),
  },
]);
