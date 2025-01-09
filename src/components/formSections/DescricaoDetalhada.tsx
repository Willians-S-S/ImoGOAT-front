"use client";

import React from "react";

interface FormData {
  descricao: string;
}

interface DescricaoDetalhadaProps {
  formData: FormData;
  updateDescricao: (data: Partial<FormData>) => void;
}

const DescricaoDetalhada: React.FC<DescricaoDetalhadaProps> = ({ formData, updateDescricao }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateDescricao({ [name]: value });
  };

  return (
    <div>
      <label htmlFor="descricao" className="block font-bold mb-2">
        Descrição do Imóvel
      </label>
      <textarea
        id="descricao"
        name="descricao"
        value={formData.descricao}
        onChange={handleChange}
        rows={5}
        className="w-full px-4 py-2 border rounded-lg"
        placeholder="Descreva os pontos positivos e características únicas do imóvel"
      ></textarea>
    </div>
  );
};

export default DescricaoDetalhada;
