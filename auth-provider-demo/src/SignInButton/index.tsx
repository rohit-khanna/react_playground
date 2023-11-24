import { useAuth } from "../context/AuthContext";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { useEffect } from "react";

const SignInButton = () => {
  const { mutate, data, isSuccess } = useAuthenticate();
  const { token, setToken } = useAuth();
  const isAuthenticated =
    !!token && !!token.token && token.expires_at > Date.now();

  useEffect(() => {
    if (isSuccess) {
      const authData = data.data;
      setToken(authData);
    }
  }, [data, isSuccess, setToken]);

  const handleClick = () => {
    if (!isAuthenticated) {
      mutate();
    } else {
      setToken({ token: "", expires_at: 0, username: "" });
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      {isAuthenticated ? "Sign Out" : "Sign In"}
    </button>
  );
};

export default SignInButton;
