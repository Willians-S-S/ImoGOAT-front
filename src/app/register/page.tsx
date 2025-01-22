"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createUser } from "@/api/userServices";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const RegisterPage = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10,11}$/; // Aceita 10 ou 11 dígitos
    return phoneRegex.test(number);
  };
  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Insira um número de telefone válido com 10 ou 11 dígitos.");
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas devem ser iguais.");
      return;
    }
    setError(null);
    setIsLoading(true);
    const userData = {
      username: fullName,
      email: email,
      password: password,
      number: phoneNumber,
    };
    try {
      const response = await createUser(userData);
      console.log(response.message); // "Usuário criado com sucesso! "
      router.push("/login"); // Redireciona para a página de login
    } catch (error) {
      setError("Erro ao criar usuário. Tente novamente.");
      console.error(error); // Exibe o erro no console para depuração
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo */}
      <div className="w-0 sm:w-2/5 relative">
        <Image
          src="/img/register-illustration.jpg"
          alt="Ilustração de cadastro"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[--green-medium] opacity-40"></div>
      </div>
      {/* Lado direito */}
      <div className="flex flex-col justify-center items-center w-full sm:w-3/5 bg-white p-8 relative">
        <p className="absolute top-4 right-4 text-sm">
          Já possui uma conta?{" "}
          <a href="/login" className="text-[--green-light] hover:underline">
            Login!
          </a>
        </p>
        <div className="w-4/5 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-3">Cadastre-se</h1>
          <p className="text-gray-600 text-center mb-5">Começar é fácil</p>
          {/* Botões de Google e Facebook */}
          <div className="flex justify-center gap-3 mb-5">
            <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100">
              <FcGoogle size={20} />
              <p>Google</p>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100">
              <FaFacebook size={20} color="#1877F2" />
              <p>Facebook</p>
            </button>
          </div>
          {/* Separador */}
          <div className="flex items-center mb-5">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-3 text-sm text-gray-500">Ou continue com</p>
            <hr className="flex-grow border-gray-300" />
          </div>
          {/* Formulário de Cadastro */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Nome completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="Nome completo"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="E-mail"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Número de telefone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="Número de telefone"
            />
          </div>
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="Senha"
            />
            <span
              className="material-icons absolute right-3 top-3 cursor-pointer text-gray-500 text-base"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </div>
          <div className="relative mb-3">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-[--green-light]"
              aria-label="Confirme sua senha"
            />
            <span
              className="material-icons absolute right-3 top-3 cursor-pointer text-gray-500 text-base"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "visibility" : "visibility_off"}
            </span>
          </div>
          {error && (
            <p className="text-red-500 mb-3 text-center text-sm" role="alert">
              {error}
            </p>
          )}
          <button
            onClick={handleRegister}
            className={`w-full px-4 py-2 text-sm text-white rounded-lg ${
              isLoading
                ? "bg-[--green-medium] cursor-not-allowed"
                : "bg-[--green-light] hover:bg-[--green-medium]"
            }`}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Criando Conta..." : "Criar Conta"}
          </button>
          <p className="text-gray-500 text-xs text-center mt-4">
            Ao Criar Conta você indica que leu e concordou com os{" "}
            <a href="/terms" className="text-[--green-light] hover:underline">
              Termos de Uso
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;