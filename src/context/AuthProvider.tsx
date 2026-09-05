import { useState, type ReactNode } from "react";
import type { User, UsuarioRegistrado } from "../interfaces/auth";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (correo: string, password: string) => {
    const usuarios: UsuarioRegistrado[] = JSON.parse(
      localStorage.getItem("users") ?? "[]",
    );

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.correo === correo && usuario.password === password,
    );
    if (usuarioEncontrado) {
      const { id, correo, rol } = usuarioEncontrado;

      setUser({ id, correo, rol });

      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
