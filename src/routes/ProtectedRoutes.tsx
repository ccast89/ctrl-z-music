import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRoutesProps {
  children: ReactNode;
}

function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const auth = useContext(AuthContext);

  if (!auth) {
    return null;
  }

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  if (auth.user.rol !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoutes;
