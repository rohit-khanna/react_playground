import { useMutation } from "@tanstack/react-query";
import addMinutes from "date-fns/addMinutes";
import axios from "axios";

export const useAuthenticate = () => {
  return useMutation({
    mutationFn: () => {
      const expireTime = addMinutes(Date.now(), 1).getTime();
      const apiEndpoint = import.meta.env.VITE_API_ENDPOINT + expireTime;
      return axios.post(apiEndpoint);
    }
  });
};
