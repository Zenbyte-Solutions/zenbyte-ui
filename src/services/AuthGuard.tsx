import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

const AuthGuard: React.FC<Props> = ({ children, redirectTo = "/login" }) => {
  const authToken = Cookies.get("auth_token");

  if (!authToken) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
