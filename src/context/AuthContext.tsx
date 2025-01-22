"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, getUser } from "@/api/userServices";

interface User {
  id: number;
  username: string;
  email: string;
  number: string;
  role: string;
}

interface AuthContextProps {
  user: User | null;
  token: string | null;
  isAuthLoaded: boolean; // Indica se os dados do contexto foram carregados
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false); // Novo estado

  const persistUser = (user: User, token: string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("authToken", token);
  };

  const clearUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("authToken");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);

    setIsAuthLoaded(true); // Confirma que os dados foram carregados
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const loginResponse = await loginUser(email, password);
      const userData = await getUser(loginResponse.id);

      const user = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        number: userData.number,
        role: userData.role,
      };

      setUser(user);
      setToken(loginResponse.token);
      persistUser(user, loginResponse.token);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Erro inesperado durante o login.");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    clearUser();
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthLoaded, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};