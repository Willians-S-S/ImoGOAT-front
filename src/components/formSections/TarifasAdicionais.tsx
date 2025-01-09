"use client";

import React from "react";

interface FormData {
  tarifaLimpeza: number;
  outrasTarifas: string;
}

interface TarifasAdicionaisProps {
  formData: FormData;
  updateTarifas: (data: Partial<FormData>) => void;
}

const TarifasAdicionais: React.FC<TarifasAdicionaisProps> = ({ formData, updateTarifas }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const parsedValue = name === "tarifaLimpeza" ? parseFloat(value) || 0 : value;
    updateTarifas({ [name]: parsedValue });
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="tarifaLimpeza" className="block font-bold mb-2">
          Tarifa de Limpeza
        </label>
        <input
          id="tarifaLimpeza"
          name="tarifaLimpeza"
          type="number"
          value={formData.tarifaLimpeza}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="outrasTarifas" className="block font-bold mb-2">
          Outras Tarifas
        </label>
        <textarea
          id="outrasTarifas"
          name="outrasTarifas"
          value={formData.outrasTarifas}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Detalhe outras possíveis tarifas adicionais"
        ></textarea>
      </div>
    </div>
  );
};

export default TarifasAdicionais;
