import React from "react";
import { User } from "../../types/user";

type Props = {
  userDetails: User;
};

const UserListItem: React.FC<Props> = ({ userDetails }) => {
  const { id, fullName, userName, email, address, uniqueIdentityPhrase } =
    userDetails;
  return (
    <div className="itemContainer">
      <div className=" row heading">
        <div className="id label">#{id}</div>
        <div className="Name">{fullName}</div>
      </div>
      <div className="row">
        <div className="content">@{userName} - </div>
        <div className="content italic">
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className="row">
        <div className="label">Address:</div>
        <div className="content">{`${address.streetAddress}, ${address.city}, ${address.zipCode}`}</div>
      </div>
      <div className="col">
        <div className="content">{uniqueIdentityPhrase}</div>
      </div>
    </div>
  );
};

export default UserListItem;
