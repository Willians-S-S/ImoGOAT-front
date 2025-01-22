"use client";

import FavoritesArea from "@/components/layout/favoritesPage/FavoritesArea";

const Favorites = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Meus Favoritos</h1>
      <FavoritesArea />
    </div>
  );
};

export default Favorites;