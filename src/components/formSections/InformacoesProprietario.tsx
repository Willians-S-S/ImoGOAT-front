"use client";

import React from "react";

interface FormData {
  nomeProprietario: string;
  contato: string;
  cpfCnpj: string;
}

interface InformacoesProprietarioProps {
  formData: FormData;
  updateProprietario: (data: Partial<FormData>) => void;
}

const InformacoesProprietario: React.FC<InformacoesProprietarioProps> = ({ formData, updateProprietario }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateProprietario({ [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="nomeProprietario" className="block font-bold mb-2">
          Nome do Proprietário
        </label>
        <input
          id="nomeProprietario"
          name="nomeProprietario"
          type="text"
          value={formData.nomeProprietario}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="contato" className="block font-bold mb-2">
          Contato (Telefone/E-mail)
        </label>
        <input
          id="contato"
          name="contato"
          type="text"
          value={formData.contato}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="cpfCnpj" className="block font-bold mb-2">
          CPF ou CNPJ
        </label>
        <input
          id="cpfCnpj"
          name="cpfCnpj"
          type="text"
          value={formData.cpfCnpj}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
    </div>
  );
};

export default InformacoesProprietario;
