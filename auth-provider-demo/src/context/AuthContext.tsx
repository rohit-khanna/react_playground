import { createContext, useContext } from "react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export type Token = {
  token: string;
  expires_at: number;
  username: string;
};

export type AuthContextType = {
  token: Token;
  setToken: (token: Token) => void;
};
const DefaultToken = {
  token: "",
  expires_at: 0,
  username: "",
};
const DefaultAuthTokenType: AuthContextType = {
  token: DefaultToken,
  setToken: () => {
    //do nothing
  },
};

const AuthContext = createContext<AuthContextType>(DefaultAuthTokenType);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [tokenValue, setTokenValue] = React.useState<Token>(DefaultToken);

  return (
    <AuthContext.Provider
      value={{ token: tokenValue, setToken: setTokenValue }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
