"use client";

import Image from 'next/image';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void =>{
        setisClick(!isClick)
    }

    return (
        <>
        <div className="flex items-center py-auto w-full h-5 bg-[--green-light] justify-between p-10">
            <div className="flex items-center w-1/6 hover:cursor-pointer">
                <div className="min-w-24 w-24 md:min-w-32 md:w-32 lg:min-w-40 lg:w-40" onClick={() => {router.push("/")}}>
                    <Image
                        src="/img/logo-branca-01.png"
                        alt="logo"
                        width={160} // Ajuste conforme necessário
                        height={80} // Ajuste conforme necessário
                        layout="responsive"
                    />
                </div>
            </div>
            {/* Menu para desktop */}
            <ol className="hidden md:flex text-white font-bold space-x-3 
                hover:[&>li]:text-[var(--green-black)] hover:cursor-pointer">
                <li onClick={() => {router.push("/anuncio")}}>Anuncie aqui</li>
                <li>Favoritos</li>
                <li onClick={() => {router.push("/contato")}}>Contato</li>
                <li>Fazer Login</li>
            </ol>
            {/* Ícone de menu para dispositivos móveis */}
            <div className="md:hidden">
                {/* <MenuIcon style={{ color: 'var(--white)', fontSize: '2rem' }} /> */}
                <button
                    className='inline-flex items-center justify-center p-2 rounded-md hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={toggleNavbar}
                >
                    {isClick ? (
                        <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor" >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg  className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    )}
                </button>
            </div>
        </div>
        {isClick && (
            <div className='md:hidden absolute w-full z-20' >
                <div className='bg-[--green-light] px-2 pt-2 pb-3 space-y-1 sm:px-3 '>
                    <ol className="flex flex-col items-center justify-center text-white font-bold space-x-3 
                        hover:[&>li]:text-[var(--green-black)] hover:[&>li]:cursor-pointer ">
                        <li>Anuncie aqui</li>
                        <li>Favoritos</li>
                        <li onClick={() => {router.push("/contato")}}>Contato</li>
                        <li>Fazer Login</li>
                    </ol>
                </div>
            </div>
        )}
    </>
    )
}

export default Header