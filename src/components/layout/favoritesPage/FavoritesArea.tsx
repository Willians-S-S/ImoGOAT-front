"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Card from "@/components/layout/Card";
import CardLoadingSkeleton from "@/components/layout/CardLoadingSkeleton";

import { getFavorites } from "@/api/favoriteServices";
import { fetchPropertyById } from "@/api/imovelService";
import { ScoredProperty } from "@/interfaces/propertyTypes";

const FavoritesArea: React.FC = () => {
  const { user, token } = useAuth();
  const [favorites, setFavorites] = useState<ScoredProperty[]>([]);
  const [favoriteMapping, setFavoriteMapping] = useState<{ [key: number]: number }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user?.id || !token) {
        setError("Usuário não autenticado.");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);

        const favoriteResponse = await getFavorites(user.id, token);

        const favoriteImmobiles = await Promise.all(
          favoriteResponse.map(async (favorite) => {
            const immobile = await fetchPropertyById(favorite.immobileId);
            return { ...immobile, isFavorited: true }; // Marcar como favoritado
          })
        );

        const mapping = favoriteResponse.reduce((acc, favorite) => {
          acc[favorite.immobileId] = favorite.id;
          return acc;
        }, {} as { [key: number]: number });

        setFavorites(favoriteImmobiles);
        setFavoriteMapping(mapping);
      } catch (err) {
        console.error("Erro ao buscar favoritos:", err);
        setError("Não foi possível carregar os imóveis favoritos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [user?.id, token]);

  if (isLoading) {
    return (
      <div className="flex justify-center w-full px-2 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardLoadingSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex justify-center w-full px-2 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {favorites.length > 0 ? (
          favorites.map((property) => (
            <Card
              key={property.id}
              property={property}
              isFavorited={true}
              favoriteIdMapping={favoriteMapping}
            />
          ))
        ) : (
          <p className="text-gray-500">Nenhum imóvel favorito encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesArea;