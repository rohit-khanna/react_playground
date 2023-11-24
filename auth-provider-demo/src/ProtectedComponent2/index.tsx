import { useAuth } from "../context/AuthContext";
import { format } from "date-fns";

const ProtectedComponent2 = () => {
  const { token: tokenObj } = useAuth();
  const { expires_at, token } = tokenObj;
  const isAuthenticated = !!token && expires_at > Date.now();
  return (
    <>
      <h3>Protected Component: Token Expires</h3>
      {isAuthenticated ? (
        <pre>{format(expires_at, "dd-MMM-yyyy HH:mm:ss")},</pre>
      ) : (
        "<Sign In To See>"
      )}
    </>
  );
};

export default ProtectedComponent2;
