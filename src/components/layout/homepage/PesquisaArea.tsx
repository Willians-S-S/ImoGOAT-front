"use client";

import React, { useState } from "react";
import { fetchPropertyByBairro } from "@/api/imovelService";
import { useRouter } from "next/navigation";

import Input from "./Input";
import ButtonGroup from "./buttonGroup";

const PesquisaArea = () => {
    const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null); // Tipo selecionado (apartamento, casa, etc.)
//   const [properties, setProperties] = useState([]);

  const handleTypeSelect = (type: string | null) => {
    setSelectedType(type); // Atualiza o tipo selecionado
  };

  const handleSearch = async (bairro: string) => {
    try {
      const result = await fetchPropertyByBairro(bairro, selectedType);
    //   setProperties(result);
      console.log("Imóveis encontrados:", result);
      router.push(
        `/search?result=${encodeURIComponent(JSON.stringify(result))}`
      );
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[97%] sm:w-[93%] md:w-[90%] lg:w-[85%] h-auto bg-[--white] 
        px-2 md:px-8 py-2 md:py-5 rounded-md md:rounded-xl"
      >
        {/* Botões de filtro */}
        <div className="mb-6 xs:ml-2">
          <ButtonGroup selectedType={selectedType} onTypeSelect={handleTypeSelect} />
        </div>

        {/* Campo de pesquisa */}
        <div className="">
          <Input text="Bairro de interesse" onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default PesquisaArea;
