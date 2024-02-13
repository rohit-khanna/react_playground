import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MemoComposition, { MemoAlone } from "./memo-composition";
import Child from "./memo-composition/Child";
import QueryTest from "./hooks";
import React from "react";
import { LoadMoreSample } from "./load-more";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Create a client
const queryClient = new QueryClient();

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <Link to="/"> Back</Link>
      {children}
    </QueryClientProvider>
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
        <QueryTest />
      </Wrapper>
    ),
  },
  {
    path: "/load-more",
    element: (
      <Wrapper>
        <LoadMoreSample />
      </Wrapper>
    ),
  },
]);
