"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import ButtonAnuncio from "@/components/layout/anuncioPage/button";

const AnuncioPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detecta o tamanho da tela apenas no cliente
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // 640px é o breakpoint `sm` no Tailwind
    };

    // Configura o estado inicial e escuta as mudanças de tamanho da tela
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // Função para redirecionar ao clicar no botão
  const handleImovelClick = () => {
    router.push(`${pathname}/cadastro`);
  };
    
  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen items-center py-8">
      {/* Seção da Imagem */}
      <div 
        className="w-full md:w-2/5 px-4 max-w-96"
      >
        <Image
          src="/img/image-anuncio-page.png"
          alt="fundo-home"
          width={160}
          height={50}
          className="w-full h-auto rounded-xl rounded-tl-[120px] rounded-br-[120px] 
          lg:rounded-tl-[200px] lg:rounded-br-[200px]"
          style={{ boxShadow: "20px 20px 10px var(--green-black)" }}
        />
      </div>

      {/* Seção do Texto */}
      <div className="flex flex-col items-center w-full md:items-start md:w-3/5 my-2.5">
        <p className="text-xl font-semibold mb-4 text-center md:text-left text-gray-700">
          Anuncie seu imóvel no <strong>ImoGOAT</strong> e alcance inquilinos que valorizam seu
          espaço. A inscrição é simples, rápida e gratuita, e nós conectamos você a quem está
          procurando o lar ideal. Deixe que o <strong>ImoGOAT</strong> faça seu imóvel se destacar!
        </p>

        <div 
          className="bg-white p-6 sm:rounded-lg shadow-lg w-full"
          style={{
            boxShadow: isSmallScreen
              ? "0px 5px 10px var(--green-black), 0px -5px 10px var(--green-black)" // Sombra para telas pequenas
              : "20px 20px 10px var(--green-black)", // Sombra para telas maiores
          }}
        >
          <h2 className="text-3xl text-center md:text-left font-bold text-[--green-medium] mb-4">
            O que você gostaria de anunciar hoje?
          </h2>

          <div className="flex flex-wrap justify-center md:justify-between lg:px-16 xl:px-28 gap-4 items-stretch">
            <ButtonAnuncio icon="apartment" type="Imóvel" text="Se você é proprietário" onClick={handleImovelClick} />
            <ButtonAnuncio icon="safety_divider" type="Vaga" text="Se deseja dividir contas" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnuncioPage;
