"use client";

import React, { useState, useEffect } from "react";

import Card from "./Card";
import CardLoadingSkeleton from "./CardLoadingSkeleton";

import apiClient from "@/api/apiClient";

import { ScoredProperty } from "@/interfaces/propertyTypes"; // Usando a interface estendida
import { calculateScore } from "@/utils/calculateScore";

interface CardAreaProps {
  limit?: number; // Pode ser indefinido ou um número
  properties?: ScoredProperty[]; // Lista de propriedades opcional
}

const CardArea: React.FC<CardAreaProps> = ({ limit, properties }) => {
  const [imoveis, setImoveis] = useState<ScoredProperty[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImoveis = async () => {
      if (properties) {
        const scoredProperties = properties.map((imovel) => ({
          ...imovel,
          score: calculateScore(imovel),
        }));
        scoredProperties.sort((a, b) => b.score - a.score);
        setImoveis(limit ? scoredProperties.slice(0, limit) : scoredProperties);
        setLoading(false);
      } else {
        try {
          const response = await apiClient.get("/immobile");
          const data: ScoredProperty[] = response.data;
          const scoredImoveis = data.map((imovel) => ({
            ...imovel,
            score: calculateScore(imovel),
          }));
          scoredImoveis.sort((a, b) => b.score - a.score);
          setImoveis(limit ? scoredImoveis.slice(0, limit) : scoredImoveis);
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch imoveis:", error);
          setLoading(false);
        }
      }
    };

    fetchImoveis();
  }, [properties, limit]);

  if (loading) {
    return (
      <div className="flex justify-center w-full px-2 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Renderizando skeletons durante o carregamento */}
          {Array.from({ length: 6 }).map((_, index) => (
            <CardLoadingSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full px-2 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imoveis.map((imovel) => (
          <Card key={imovel.id} property={imovel} /> // Renderiza um Card para cada imóvel
        ))}
        <div className="xl:w-[310px] lg:w-[260px] md:w-[185px] sm:w-[250px] xt:w-[175px] xs:w-[160px] h-auto bg-gray-500 rounded-xl">
          Anúncio
        </div>
      </div>
    </div>
  );
};

export default CardArea;
