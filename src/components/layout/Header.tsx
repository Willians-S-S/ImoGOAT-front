"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isClick, setIsClick] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    await logout(); // Assume que logout é uma função assíncrona
    window.location.reload(); // Recarrega a página após o logout
  };

  return (
    <>
      <div className="flex items-center py-auto w-full h-5 bg-[--green-light] justify-between p-10">
        <div className="flex items-center w-1/6 hover:cursor-pointer">
          <div
            className="min-w-24 w-24 md:min-w-32 md:w-32 lg:min-w-40 lg:w-40"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image
              src="/img/logo-branca-01.png"
              alt="logo"
              width={160}
              height={80}
              layout="responsive"
            />
          </div>
        </div>
        {/* Menu para desktop */}
        <ol
          className="hidden md:flex text-white font-bold space-x-3 
                hover:[&>li]:text-[var(--green-black)] hover:cursor-pointer"
        >
          <li onClick={() => router.push("/anuncio")}>Anuncie aqui</li>
          <li onClick={() => router.push("/favorites")}>Favoritos</li>
          <li onClick={() => router.push("/contato")}>Contato</li>
          {user ? (
            <li className="relative flex items-center">
              <span className="mr-1">
                Olá,{" "}
                {user.username
                  .trim()
                  .split(/\s+/)[0]
                  .charAt(0)
                  .toUpperCase() +
                  user.username
                    .trim()
                    .split(/\s+/)[0]
                    .slice(1)
                    .toLowerCase()}
                !
              </span>
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <p className="material-icons text-base">keyboard_arrow_down</p>
              </div>
              {showDropdown && (
                <ul
                  className="absolute right-0 top-full mt-2 bg-white text-black shadow-lg rounded-md py-2 w-48 z-20"
                  onClick={() => setShowDropdown(false)}
                >
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sair
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li onClick={() => router.push("/login")}>Fazer Login</li>
          )}
        </ol>
        {/* Ícone de menu para dispositivos móveis */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden absolute w-full z-20">
          <div className="bg-[--green-light] px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ol
              className="flex flex-col items-center justify-center text-white font-bold space-x-3 
                        hover:[&>li]:text-[var(--green-black)] hover:[&>li]:cursor-pointer"
            >
              <li onClick={() => router.push("/anuncio")}>Anuncie aqui</li>
              <li onClick={() => router.push("/favorites")}>Favoritos</li>
              <li onClick={() => router.push("/contato")}>Contato</li>
              {user ? (
                <li className="relative flex items-center">
                  <span className="mr-1">
                    Olá,{" "}
                    {user.username
                      .trim()
                      .split(/\s+/)[0]
                      .charAt(0)
                      .toUpperCase() +
                      user.username
                        .trim()
                        .split(/\s+/)[0]
                        .slice(1)
                        .toLowerCase()}
                    !
                  </span>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <p className="material-icons text-base">keyboard_arrow_down</p>
                  </div>
                  {showDropdown && (
                    <ul
                      className="absolute right-0 top-full mt-2 bg-white text-black shadow-lg rounded-md py-2 w-48 z-20"
                      onClick={() => setShowDropdown(false)}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Sair
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li onClick={() => router.push("/login")}>Fazer Login</li>
              )}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;