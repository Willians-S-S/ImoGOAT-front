"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import CardArea from "@/components/layout/CardArea";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const resultParam = searchParams.get("result"); // Obtém o parâmetro 'result'

  // Decodifica o parâmetro 'result' (JSON codificado)
  let parsedProperties = [];
  if (resultParam) {
    try {
      parsedProperties = JSON.parse(decodeURIComponent(resultParam));
    } catch (error) {
      console.error("Erro ao decodificar as propriedades:", error);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Resultados da Pesquisa</h1>
      {parsedProperties.length > 0 ? (
        <CardArea properties={parsedProperties} />
      ) : (
        <p className="text-gray-500">Nenhum imóvel encontrado.</p>
      )}
    </div>
  );
};

export default SearchResults;
