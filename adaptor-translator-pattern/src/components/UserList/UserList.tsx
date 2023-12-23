import * as React from "react";
import { useUserList, useUserListWithTransformPersist } from "../../hooks/api/useUserList";
import { UserListAdaptor } from "../../Adaptors/UserListAdaptor";
import "./UserListItem.css";
import UserListItem from "./UserListItem";

const adaptorInstance = new UserListAdaptor();
const UserList: React.FC = () => {
  const { data, isLoading } = useUserList({ adaptor: adaptorInstance});
 // const { data, isLoading } = useUserListWithTransformPersist({ adaptorFn: adaptorInstance.tranform });

if(isLoading) return (<div>Loading...</div>)

  return data?.map((user) => <UserListItem key={user.id} userDetails={user} />);
};

export default UserList;
