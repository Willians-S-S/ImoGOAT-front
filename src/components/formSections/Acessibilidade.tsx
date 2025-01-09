"use client";

import React from "react";

interface FormData {
  acessibilidade: string[];
}

interface AcessibilidadeProps {
  formData: FormData;
  updateAcessibilidade: (data: Partial<FormData>) => void;
}

const Acessibilidade: React.FC<AcessibilidadeProps> = ({ formData, updateAcessibilidade }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const updatedAcessibilidade = checked
      ? [...formData.acessibilidade, value]
      : formData.acessibilidade.filter((item) => item !== value);

    updateAcessibilidade({ acessibilidade: updatedAcessibilidade });
  };

  const commonOptions = [
    "Rampas de Acesso",
    "Corrimãos em Escadas e Corredores",
    "Interruptores e Tomadas em Alturas Acessíveis",
    "Portas Mais Largas",
    "Chuveiro sem Degraus (tipo walk-in)",
    "Barras de Apoio em Áreas Estratégicas",
    "Puxadores de Porta do Tipo Alavanca",
    "Iluminação Reforçada em Áreas de Trabalho",
    "Pisos Antiderrapantes",
    "Caminhos Livres de Obstáculos",
  ];

  const additionalConsiderations = [
    "Etiquetas de Identificação em Armários e Gavetas",
    "Controles de Temperatura com Indicadores Visuais e Táteis",
    "Assentos de Chuveiro Retráteis",
    "Thermostats de fácil acesso e operação",
    "Janelas de fácil operação",
    "Sistema de Intercomunicação Visual",
    "Alarmes de Incêndio com Sinalização Visual (luzes estroboscópicas)",
    "Prateleiras e Armazenamento em Alturas Acessíveis",
    "Caminhos e Passagens sem Tapetes Solto",
    "Botões de Emergência",
    "Sinalização Clara e de Alto Contraste",
    "Áreas de Descanso",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-bold mb-4">Opções Comuns de Acessibilidade</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {commonOptions.map((item, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                value={item}
                checked={formData.acessibilidade.includes(item)}
                onChange={handleChange}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Considerações Adicionais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {additionalConsiderations.map((item, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                value={item}
                checked={formData.acessibilidade.includes(item)}
                onChange={handleChange}
                className="mr-2"
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acessibilidade;
