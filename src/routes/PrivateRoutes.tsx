import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

interface PrivateRoutesProps {
  children: ReactNode;
}

function PrivateRoutes({ children }: PrivateRoutesProps) {
  const auth = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoutes;
