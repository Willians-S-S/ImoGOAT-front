"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      await login(email, password);
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Erro ao fazer login. Tente novamente.");
      } else {
        setError("Erro desconhecido ao fazer login.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-full sm:w-3/5 bg-white p-10 relative">
        <p className="absolute top-4 right-4 text-sm">
          Não possui uma conta?{" "}
          <a href="/register" className="text-[--green-light] hover:underline">
            Cadastre-se
          </a>
        </p>
        <div className="w-3/4 max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2">
            Bem vindo de volta
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Faça login em sua conta
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {/* Botão do Google */}
              <button className="flex items-center justify-center gap-2 w-40 h-12 border border-gray-300 rounded-lg hover:bg-gray-100">
                <FcGoogle size={20} />
                <p>Google</p>
              </button>

              {/* Botão do Facebook */}
              <button className="flex items-center justify-center gap-2 w-40 h-12 border border-gray-300 rounded-lg hover:bg-gray-100">
                <FaFacebook size={20} color="#1877F2" />
                <p>Facebook</p>
              </button>
          </div>
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-4 text-sm text-gray-500">Ou continue com</p>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="E-mail"
            />
          </div>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="Senha"
            />
            <span
              className="material-icons absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </div>
          {error && (
            <p className="text-red-500 mb-4 text-center" role="alert">
              {error}
            </p>
          )}
          <button
            onClick={handleLogin}
            className={`w-full px-4 py-2 text-white rounded-lg ${
              isLoading
                ? "bg-[--green-medium] cursor-not-allowed"
                : "bg-[--green-light] hover:bg-[--green-medium]"
            }`}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </div>
      </div>
      {/* Lado direito */}
      <div className="w-0 sm:w-2/5 relative">
        <Image
          src="/img/login-page-image.jpg"
          alt="Ilustração de login"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[--green-medium] opacity-50"></div>
      </div>
    </div>
  );
};

export default LoginPage;