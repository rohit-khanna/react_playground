import { useAuth } from "../context/AuthContext";

const ProtectedComponent1 = () => {
  const { token: tokenObj } = useAuth();
  const { username, expires_at } = tokenObj;
  const isAuthenticated = !!username && expires_at > Date.now();

  return (
    <>
      <h3>Protected Component: UserName</h3>
      {isAuthenticated ? <pre>{username}</pre> : "<Sign In To See>"}
    </>
  );
};

export default ProtectedComponent1;
