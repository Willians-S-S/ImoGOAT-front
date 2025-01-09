"use client";

import React from "react";

interface FormData {
  maxHospedes: number;
  permiteFestas: boolean;
  aceitaAnimais: boolean;
  permiteFumar: boolean;
  outrasRegras: string;
}

interface RegrasRestricoesProps {
  formData: FormData;
  updateRegras: (data: Partial<FormData>) => void;
}

const RegrasRestricoes: React.FC<RegrasRestricoesProps> = ({ formData, updateRegras }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
    
        if (type === "checkbox") {
          const { checked } = e.target as HTMLInputElement; // Garantindo que o target é um HTMLInputElement
          updateRegras({ [name]: checked });
        } else {
          updateRegras({ [name]: value });
        }
    };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="maxHospedes" className="block font-bold mb-2">
          Número Máximo de Hóspedes
        </label>
        <input
          id="maxHospedes"
          name="maxHospedes"
          type="number"
          value={formData.maxHospedes}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="permiteFestas"
            checked={formData.permiteFestas}
            onChange={handleChange}
            className="mr-2"
          />
          Permite Festas?
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="aceitaAnimais"
            checked={formData.aceitaAnimais}
            onChange={handleChange}
            className="mr-2"
          />
          Aceita Animais de Estimação?
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="permiteFumar"
            checked={formData.permiteFumar}
            onChange={handleChange}
            className="mr-2"
          />
          Permite Fumar?
        </label>
      </div>

      <div>
        <label htmlFor="outrasRegras" className="block font-bold mb-2">
          Outras Regras
        </label>
        <textarea
          id="outrasRegras"
          name="outrasRegras"
          value={formData.outrasRegras}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Informe quaisquer outras regras específicas"
        ></textarea>
      </div>
    </div>
  );
};

export default RegrasRestricoes;
