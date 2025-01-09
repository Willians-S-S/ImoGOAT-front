"use client";

import React from "react";

interface FormData {
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}

interface LocalizacaoProps {
  formData: FormData;
  updateLocalizacao: (data: Partial<FormData>) => void;
}

const Localizacao: React.FC<LocalizacaoProps> = ({ formData, updateLocalizacao }) => {
  const handleChange = (key: string, value: string) => {
    updateLocalizacao({ [key]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Localização do Imóvel</h2>

      <div>
        <label htmlFor="pais" className="block font-bold mb-2">
          País
        </label>
        <input
          id="pais"
          type="text"
          placeholder="Digite o país"
          value={formData.pais || ""}
          onChange={(e) => handleChange("pais", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="estado" className="block font-bold mb-2">
          Estado
        </label>
        <input
          id="estado"
          type="text"
          placeholder="Digite o estado"
          value={formData.estado || ""}
          onChange={(e) => handleChange("estado", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="cidade" className="block font-bold mb-2">
          Cidade
        </label>
        <input
          id="cidade"
          type="text"
          placeholder="Digite a cidade"
          value={formData.cidade || ""}
          onChange={(e) => handleChange("cidade", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="bairro" className="block font-bold mb-2">
          Bairro
        </label>
        <input
          id="bairro"
          type="text"
          placeholder="Digite o bairro"
          value={formData.bairro || ""}
          onChange={(e) => handleChange("bairro", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="rua" className="block font-bold mb-2">
          Rua
        </label>
        <input
          id="rua"
          type="text"
          placeholder="Digite a rua"
          value={formData.rua || ""}
          onChange={(e) => handleChange("rua", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="numero" className="block font-bold mb-2">
          Número
        </label>
        <input
          id="numero"
          type="text"
          placeholder="Digite o número"
          value={formData.numero || ""}
          onChange={(e) => handleChange("numero", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="complemento" className="block font-bold mb-2">
          Complemento (Opcional)
        </label>
        <input
          id="complemento"
          type="text"
          placeholder="Digite o complemento"
          value={formData.complemento || ""}
          onChange={(e) => handleChange("complemento", e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
};

export default Localizacao;
