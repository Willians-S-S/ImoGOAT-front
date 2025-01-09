"use client";

import React from "react";

interface FormData {
  regulacoesLocais: string;
}

interface InformacoesRegulatoriasProps {
  formData: FormData;
  updateRegulatorias: (data: Partial<FormData>) => void;
}

const InformacoesRegulatorias: React.FC<InformacoesRegulatoriasProps> = ({
  formData,
  updateRegulatorias,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateRegulatorias({ [name]: value });
  };

  return (
    <div>
      <label htmlFor="regulacoesLocais" className="block font-bold mb-2">
        Informações Regulatórias Locais
      </label>
      <textarea
        id="regulacoesLocais"
        name="regulacoesLocais"
        value={formData.regulacoesLocais}
        onChange={handleChange}
        rows={5}
        className="w-full px-4 py-2 border rounded-lg"
        placeholder="Informe quaisquer documentos ou informações específicas necessárias."
      ></textarea>
    </div>
  );
};

export default InformacoesRegulatorias;
