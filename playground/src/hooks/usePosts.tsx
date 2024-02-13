import axios from "axios";
import {
  useQuery,
} from "@tanstack/react-query";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePosts = () => {
  return useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
      } catch (error) {
        console.error(error);
      }
    },
    retry: 1,
    enabled: true,
    refetchOnWindowFocus: false,
  });
};
