"use client";

import React from "react";

interface FormData {
  status: string;
  valor: number;
  frequenciaPagamento: string;
}

interface InformacoesComerciaisProps {
  formData: FormData;
  updateComerciais: (data: Partial<FormData>) => void;
}

const InformacoesComerciais: React.FC<InformacoesComerciaisProps> = ({ formData, updateComerciais }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateComerciais({ [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="status" className="block font-bold mb-2">
          Status do Imóvel
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Selecione...</option>
          <option value="aluguel">Para Aluguel</option>
          <option value="venda">Para Venda</option>
        </select>
      </div>

      <div>
        <label htmlFor="valor" className="block font-bold mb-2">
          Valor
        </label>
        <input
          id="valor"
          name="valor"
          type="number"
          value={formData.valor}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      {formData.status === "aluguel" && (
        <div>
          <label htmlFor="frequenciaPagamento" className="block font-bold mb-2">
            Frequência de Pagamento
          </label>
          <select
            id="frequenciaPagamento"
            name="frequenciaPagamento"
            value={formData.frequenciaPagamento}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Selecione...</option>
            <option value="mensal">Mensal</option>
            <option value="anual">Anual</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default InformacoesComerciais;
