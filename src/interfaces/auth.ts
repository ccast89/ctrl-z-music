//Modelo de usuario
export interface UsuarioRegistrado {
  id: number;
  correo: string;
  password: string;
  rol: string;
}

//Usuario q ya inició sesión
export type User = {
  id: number;
  correo: string;
  rol: string;
};

//Cosas q va a tener elcontext
export interface AuthContextType {
  user: User | null;
  login: (correo: string, password: string) => boolean;
  logout: () => void;
}
