import axios from "axios";
import React from "react";
import { useQuery, UseQueryResult, UseQueryOptions } from "react-query";

type Props = {};

const apiCall = async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/todos3/1");
  } catch (err) {
    console.error("---------");
  }
};

const useToDo = (options: UseQueryOptions = {}): UseQueryResult => {
  return useQuery(["todos"], apiCall, {
    enabled: options.enabled ?? true,
    staleTime: Infinity,
    retry: 1,
    // refetchOnWindowFocus: false,
    onSuccess: (data) => {
      console.log({
        success: data,
      });
    },
    onError: (err) => {
      console.log({ errpr: err });
    },
  });
};

const QueryTest = (props: Props) => {
  const response = useToDo();
  console.log({ response });

  return <div>index</div>;
};

export default QueryTest;
