"use client";

import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import { Favorite } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import { ScoredProperty } from "@/interfaces/propertyTypes";
import { addFavorite, getFavorites, deleteFavorite } from "@/api/favoriteServices";

interface CardProps {
  property: ScoredProperty;
  isFavorited: boolean; // Indica se o imóvel está favoritado
  favoriteIdMapping?: { [key: number]: number }; // Mapeia immobileId para favoriteId
}

const Card: React.FC<CardProps> = ({
  property,
  isFavorited: initialFavorite,
  favoriteIdMapping,
}) => {
  const router = useRouter();
  const [isFavorited, setIsFavorited] = useState(initialFavorite); // Inicializado com a prop
  const { user, token } = useAuth();

  const toggleFavorite = async () => {
    if (!user?.id || !token) {
      alert("Você precisa estar logado para favoritar um imóvel.");
      return;
    }

    try {
      if (!isFavorited) {
        // Adicionar favorito
        setIsFavorited(true);
        await addFavorite(user.id, property.id, token);
        console.log("Favorito adicionado com sucesso!");
      } else {
        // Remover favorito
        const favoriteId =
          favoriteIdMapping?.[property.id] ??
          (await fetchFavoriteIdFromAPI(property.id)); // Busca o ID do favorito
        if (favoriteId) {
          setIsFavorited(false);
          await deleteFavorite(favoriteId, token);
          console.log("Favorito removido com sucesso!");
        } else {
          console.error("Favorito não encontrado para exclusão.");
        }
      }
    } catch (error) {
      console.error("Erro ao gerenciar favorito:", error);
      alert("Não foi possível atualizar o estado do favorito. Tente novamente.");
    }
  };

  const fetchFavoriteIdFromAPI = async (immobileId: number): Promise<number | null> => {
    try {
      const favorites = await getFavorites(user!.id, token!); // Obtemos todos os favoritos
      const matchingFavorite = favorites.find((fav) => fav.immobileId === immobileId);
      return matchingFavorite ? matchingFavorite.id : null;
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
      return null;
    }
  };

  const toImovel = () => {
    router.push(`/imovel/${property.id}`);
  };

  return (
    <div className="xl:w-[310px] lg:w-[260px] md:w-[200px] sm:w-[250px] xt:w-[175px] xs:w-[160px] h-auto bg-[--white] rounded-xl">
      {property.images && property.images.length > 0 && (
        <div
          className="relative w-full h-24 sm:h-28 lg:h-40 overflow-hidden rounded-t-lg"
          onClick={toImovel}
        >
          <Image
            src={property.images[0].url}
            alt={property.name}
            layout="fill"
            objectFit="cover"
            className="cursor-pointer"
          />
        </div>
      )}
      <div className="h-auto mx-3">
        <div className="flex flex-row items-start justify-between">
          <h1
            className="font-semibold sm:text-2xl xt:text-xl cursor-pointer"
            onClick={toImovel}
          >
            {property.name}
          </h1>
          <Favorite
            onClick={toggleFavorite}
            style={{ color: isFavorited ? "red" : "white" }}
            sx={{
              fontSize: 30,
              "& path": {
                fill: "currentcolor",
                stroke: "#000",
                strokeWidth: 1,
              },
            }}
            className="cursor-pointer"
          />
        </div>
        <p className="flex flex-row items-center sm:text-sm xt:text-xs text-xs">
          <HomeIcon
            sx={{
              fontSize: 20,
              color: "rgba(0, 0, 0, 0)",
              "& path": {
                fill: "currentcolor",
                stroke: "#000",
                strokeWidth: 1,
              },
            }}
            className="mr-1"
          />
          {property.type}
        </p>
      </div>
    </div>
  );
};

export default Card;