"use client";

import React from "react";

interface FormData {
  nome: string;
  tipo: string;
  quartos: number;
  banheiros: number;
  metragem: number;
}

interface InformacoesBasicasProps {
  formData: FormData;
  updateBasicInfo: (data: Partial<FormData>) => void;
}

const InformacoesBasicas: React.FC<InformacoesBasicasProps> = ({ formData, updateBasicInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const parsedValue = name === "quartos" || name === "banheiros" || name === "metragem"
      ? parseFloat(value) || 0
      : value;
    updateBasicInfo({ [name]: parsedValue });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="nome" className="block font-bold mb-2">
          Nome da Propriedade
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={formData.nome}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="tipo" className="block font-bold mb-2">
          Tipo de Imóvel
        </label>
        <select
          id="tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Selecione...</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="condominio">Condomínio</option>
        </select>
      </div>

      <div>
        <label htmlFor="quartos" className="block font-bold mb-2">
          Quantidade de Quartos
        </label>
        <input
          id="quartos"
          name="quartos"
          type="number"
          value={formData.quartos}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="banheiros" className="block font-bold mb-2">
          Quantidade de Banheiros
        </label>
        <input
          id="banheiros"
          name="banheiros"
          type="number"
          value={formData.banheiros}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="metragem" className="block font-bold mb-2">
          Metragem Quadrada
        </label>
        <input
          id="metragem"
          name="metragem"
          type="number"
          step="0.01"
          value={formData.metragem}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
};

export default InformacoesBasicas;
