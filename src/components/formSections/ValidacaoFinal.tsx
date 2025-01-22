"use client";

import React from "react";

interface ValidacaoFinalProps {
  camposInvalidos: { etapa: number; mensagem: string }[];
  voltarParaEtapa: (etapa: number) => void;
}

const ValidacaoFinal: React.FC<ValidacaoFinalProps> = ({ camposInvalidos, voltarParaEtapa }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Quase pronto!</h1>
      <p className="text-gray-600 mb-6">
        Conclua a última parte antes de ativar o anúncio. Você precisa corrigir as seguintes etapas:
      </p>

      {camposInvalidos.map((etapa, index) => (
        <div key={index} className="mb-4">
          <a
            href="#"
            onClick={() => voltarParaEtapa(etapa.etapa)}
            className="text-blue-600 underline"
          >
            {etapa.mensagem}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ValidacaoFinal;