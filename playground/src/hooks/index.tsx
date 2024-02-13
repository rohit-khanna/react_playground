import axios from "axios";
import React from "react";
import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from "@tanstack/react-query";

type Props = {};

const apiCall = async () => {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/todos3/1");
  } catch (err) {
    console.error("---------");
  }
};

const useToDo = (
  options: UseQueryOptions = {
    queryKey: [],
  }
): UseQueryResult => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: apiCall,
    retry: 1,
    enabled: true,
    refetchOnWindowFocus: false,
  });
};

const QueryTest = (props: Props) => {
  const response = useToDo();
  console.log({ response });

  return (
    <pre style={{ textAlign: "left", padding: "1rem" }}>
      {JSON.stringify(response, null, 4)}
    </pre>
  );
};

export default QueryTest;
