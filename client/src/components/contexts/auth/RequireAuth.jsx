import LoginApp from "../../pages/access/LoginApp";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <LoginApp />;
  }

  return children;
};
