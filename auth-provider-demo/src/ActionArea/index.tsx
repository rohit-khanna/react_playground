import React from "react";

import "./index.css";
import { useAuth } from "../context/AuthContext";
import { format } from "date-fns";

const ActionArea = () => {
  const [message, setMessage] = React.useState("");

  const { token: tokenObj, setToken } = useAuth();
  const { expires_at, token } = tokenObj;
  const isAuthenticated = !!token && expires_at > Date.now();

  const handleClick = () => {
    if (!token || expires_at <= Date.now()) {
      setToken({ username: "", expires_at: 0, token: "" });
    } else {
      setMessage(
        format(Date.now(), "dd-MMM-yyyy HH:mm:ss") + "-> token is fine to use"
      );
    }
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      setMessage("Token Expired. Please re-login");
    } else {
      setMessage("");
    }
  }, [isAuthenticated]);

  return (
    <div className="actionArea">
      {message && <div className="message">{message}</div>}
      {isAuthenticated ? (
        <>
          <h4>Make API Call using this token</h4>
          <button type="button" onClick={handleClick}>
            Invoke
          </button>
        </>
      ) : (
        <h4>Sign In To See Action Area</h4>
      )}
    </div>
  );
};

export default ActionArea;
