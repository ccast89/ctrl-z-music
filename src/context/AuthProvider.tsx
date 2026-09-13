import { useState, useEffect, type ReactNode } from "react";
import type { User, UsuarioRegistrado } from "../interfaces/auth";
import { AuthContext } from "./AuthContext";
import { userAdmin } from "../data/userAdmin";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const usuarioGuardado = localStorage.getItem("user");

      return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    } catch (error) {
      console.error("Error al leer el usuario guardado:", error);
      return null;
    }
  });

  useEffect(() => {
    const usuariosGuardados = localStorage.getItem("users");

    if (!usuariosGuardados) {
      localStorage.setItem("users", JSON.stringify(userAdmin)); //stringify para convertirlo a texto para q lo guarde localstorage
    }
  }, []);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Error al guardar la sesión:", error);
    }
  }, [user]);

  const login = (correo: string, password: string) => {
    try {
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
    } catch (error) {
      console.error("Error al leer los usuarios guardados:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
