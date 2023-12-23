import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User as DbUser } from "./dbTypes/User";
import { User } from "../../types/user";
import { IAdaptor } from "../../Adaptors/IAdaptor";

type IProps = {
  adaptor: IAdaptor<DbUser[],User[]>;
};

const fetchUsersFromAPI = async (): Promise<DbUser[]> => {
  const response = await axios.get<DbUser[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

/**
 * Here the adaptor function is called every time the data is fetched from the API.
 * @param props '
 * @returns
 */
export const useUserList = (props: IProps) => {
  const { adaptor } = props;

  return useQuery<DbUser[], unknown, User[]>({
    queryKey: ["userList"],
    queryFn: fetchUsersFromAPI,
    select: (data: DbUser[]) => adaptor.tranform(data),
  });
};

/**
 * This hook is used to fetch the user list and transform the data using the adaptor function.
 * Here the Transform function is called only once and the transformed data is persisted in the cache.
 * @param props
 * @returns
 */
export const useUserListWithTransformPersist = (props: IProps) => {
  const { adaptor } = props;

  const fetchUsers = async (): Promise<User[]> => {
    return adaptor.tranform(await fetchUsersFromAPI());
  };
  return useQuery<User[]>({
    queryKey: ["userListTransformPersist"],
    queryFn: fetchUsers,
  });
};
