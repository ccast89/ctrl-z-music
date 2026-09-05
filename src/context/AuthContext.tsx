import { createContext } from "react";
import type { AuthContextType } from "../interfaces/auth"; //Trae la forma que estadefinida en auth

export const AuthContext = createContext<AuthContextType | null>(null);
