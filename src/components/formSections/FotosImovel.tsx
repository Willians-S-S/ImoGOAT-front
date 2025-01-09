"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FotosImovelProps {
  initialData: File[];
  updateImages: (images: File[]) => void;
}

const FotosImovel: React.FC<FotosImovelProps> = ({ initialData, updateImages }) => {
  const [images, setImages] = useState<File[]>(initialData || []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedImages = Array.from(event.target.files);
      const updatedImages = [...images, ...uploadedImages];
      setImages(updatedImages);
      updateImages(updatedImages); // Atualiza o estado global
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    updateImages(updatedImages); // Atualiza o estado global
  };

  return (
    <div>
      <label htmlFor="imagens" className="block font-bold mb-2">
        Upload de Imagens
      </label>
      <input
        id="imagens"
        type="file"
        multiple
        accept="image/*"
        className="w-full px-4 py-2 border rounded-lg"
        onChange={handleImageUpload}
      />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-32 overflow-hidden rounded-lg border">
            <Image
              src={URL.createObjectURL(image)} // Gera uma URL temporária para o arquivo carregado
              alt={`Imagem ${index + 1}`}
              layout="fill" // Ocupa todo o espaço do contêiner
              objectFit="cover" // Ajusta a imagem para cobrir o contêiner
              className="rounded-lg"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-xs"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FotosImovel;
