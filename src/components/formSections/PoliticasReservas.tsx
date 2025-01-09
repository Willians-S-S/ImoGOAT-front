"use client";

import React, { useState } from "react";

interface FormData {
  depositoSeguranca: string;
  valorDeposito: number;
  taxaAnimal: string;
  taxaAnimalValor: number;
  politicaFumantes: string;
  politicaFestas: string;
  taxaFestas: string;
  outrasPoliticas: string;
}

interface PoliticasReservasProps {
  formData: FormData;
  updatePoliticas: (data: Partial<FormData>) => void;
}

const PoliticasReservas: React.FC<PoliticasReservasProps> = ({ formData, updatePoliticas }) => {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [tooltipIcon, setTooltipIcon] = useState<HTMLSpanElement | null>(null);

  const handleTooltip = (explanation: string | null, icon: HTMLSpanElement | null) => {
    setTooltip(explanation);
    setTooltipIcon(icon);
  };  

  const handleChange = (key: string, value: string | number) => {
    updatePoliticas({ [key]: value });
  };

  return (
    <div className="space-y-6 relative">
      {/* Depósito de Segurança */}
      <div className="relative">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          Depósito de Segurança
          <span
            className="material-icons text-gray-600 cursor-help relative"
            onMouseEnter={(e) =>
              handleTooltip("Defina se é necessário um depósito e o valor correspondente.", e.currentTarget)
            }
            onMouseLeave={() => handleTooltip(null, null)}
          >
            help_outline
          </span>
        </h3>
        <div className="grid gap-2">
          {["nenhum", "fixo", "percentual", "duração"].map((option) => (
            <div key={option} className="flex items-center gap-2">
              <input
                type="radio"
                id={`deposito-${option}`}
                name="depositoSeguranca"
                value={option}
                checked={formData.depositoSeguranca === option}
                onChange={() => handleChange("depositoSeguranca", option)}
                className="cursor-pointer"
              />
              <label htmlFor={`deposito-${option}`} className="cursor-pointer capitalize">
                {option.replace(/_/g, " ")}
              </label>
            </div>
          ))}
        </div>
        {(formData.depositoSeguranca === "fixo" || formData.depositoSeguranca === "percentual") && (
          <input
            type="number"
            id="valorDeposito"
            placeholder="Insira o valor"
            value={formData.valorDeposito || ""}
            onChange={(e) => handleChange("valorDeposito", parseFloat(e.target.value) || 0)}
            className="w-full px-4 py-2 border rounded-lg mt-4"
          />
        )}
      </div>

      {/* Tooltip */}
      {tooltip && tooltipIcon && (
        <div
          className="absolute bg-gray-700 text-white text-sm px-3 py-2 rounded-lg shadow-md z-10"
          style={{
            top: tooltipIcon.offsetTop + 30,
            left: tooltipIcon.offsetLeft - 10,
          }}
        >
          {tooltip}
        </div>
      )}

    <h3 className="font-bold mb-4 flex items-center gap-2">
        Aceitação de Animais de Estimação
        <span
        className="material-icons text-gray-600 cursor-help relative"
        onMouseEnter={(e) =>
            handleTooltip(
            "Defina se são permitidos animais e, se aplicável, a taxa correspondente.",
            e.currentTarget
            )
        }
        onMouseLeave={() => handleTooltip(null, null)}
        >
        help_outline
        </span>
    </h3>
    <div className="grid gap-2">
        {["não Permite", "sem Custo", "com Taxa"].map((option) => (
        <div key={option} className="flex items-center gap-2">
            <input
            type="radio"
            id={`taxaAnimal-${option}`}
            name="taxaAnimal"
            value={option}
            checked={formData.taxaAnimal === option}
            onChange={() => handleChange("taxaAnimal", option)}
            className="cursor-pointer"
            />
            <label htmlFor={`taxaAnimal-${option}`} className="cursor-pointer capitalize">
            {option.replace(/_/g, " ")}
            </label>
        </div>
        ))}
    </div>
    {formData.taxaAnimal === "comTaxa" && (
        <input
        type="number"
        id="taxaAnimalValor"
        placeholder="Valor da taxa"
        value={formData.taxaAnimalValor || ""}
        onChange={(e) => handleChange("taxaAnimalValor", parseFloat(e.target.value) || 0)}
        className="w-full px-4 py-2 border rounded-lg mt-2"
        />
    )}

        <h3 className="font-bold mb-4 flex items-center gap-2">
            Política para Fumantes
            <span
            className="material-icons text-gray-600 cursor-help relative"
            onMouseEnter={(e) =>
                handleTooltip("Defina se é permitido fumar na propriedade e em quais áreas.", e.currentTarget)
            }
            onMouseLeave={() => handleTooltip(null, null)}
            >
            help_outline
            </span>
        </h3>
        <div className="grid gap-2">
            {["não Permitido", "áreas Designadas", "todo Imovel"].map((option) => (
            <div key={option} className="flex items-center gap-2">
                <input
                type="radio"
                id={`fumantes-${option}`}
                name="politicaFumantes"
                value={option}
                checked={formData.politicaFumantes === option}
                onChange={() => handleChange("politicaFumantes", option)}
                className="cursor-pointer"
                />
                <label htmlFor={`fumantes-${option}`} className="cursor-pointer capitalize">
                {option.replace(/_/g, " ")}
                </label>
            </div>
            ))}
        </div>


        {/* Outras Políticas */}
        <h3 className="font-bold mb-4 flex items-center gap-2">
            Outras Políticas
            <span
            className="material-icons text-gray-600 cursor-help relative"
            onMouseEnter={(e) =>
                handleTooltip(
                "Adicione qualquer outra política ou informação importante sobre o imóvel.",
                e.currentTarget
                )
            }
            onMouseLeave={() => handleTooltip(null, null)}
            >
            help_outline
            </span>
        </h3>
        <textarea
            id="outrasPoliticas"
            name="outrasPoliticas"
            placeholder="Digite aqui as políticas adicionais do imóvel."
            value={formData.outrasPoliticas || ""}
            onChange={(e) => handleChange("outrasPoliticas", e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mt-2"
            rows={5}
        />
    </div>
  );
};

export default PoliticasReservas;
