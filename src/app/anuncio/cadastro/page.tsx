"use client";

import React, { useState } from "react";
import InformacoesBasicas from "@/components/formSections/InformacoesBasicas";
import FotosImovel from "@/components/formSections/FotosImovel";
import DescricaoDetalhada from "@/components/formSections/DescricaoDetalhada";
import RegrasRestricoes from "@/components/formSections/RegrasRestricoes";
import InformacoesComerciais from "@/components/formSections/InformacoesComerciais";
import TarifasAdicionais from "@/components/formSections/TarifasAdicionais";
import InformacoesProprietario from "@/components/formSections/InformacoesProprietario";
import InformacoesRegulatorias from "@/components/formSections/InformacoesRegulatorias";
import Acessibilidade from "@/components/formSections/Acessibilidade";
import PoliticasReservas from "@/components/formSections/PoliticasReservas";
import Localizacao from "@/components/formSections/Localizacao";

interface FormData {
  nome: string;
  tipo: string;
  quartos: number;
  banheiros: number;
  metragem: number;
  imagens: File[];
  descricao: string;
  maxHospedes: number;
  permiteFestas: boolean;
  aceitaAnimais: boolean;
  permiteFumar: boolean;
  outrasRegras: string;
  status: string;
  valor: number;
  frequenciaPagamento: string;
  tarifaLimpeza: number;
  outrasTarifas: string;
  nomeProprietario: string;
  contato: string;
  cpfCnpj: string;
  regulacoesLocais: string;
  acessibilidade: string[];
  politicaCancelamento: string;
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
  depositoSeguranca: string;
  valorDeposito: number;
  taxaAnimal: string;
  taxaAnimalValor: number;
  politicaFumantes: string;
  politicaFestas: string;
  taxaFestas: string;
  outrasPoliticas: string;
}

const CadastroImovel = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    tipo: "",
    quartos: 0,
    banheiros: 0,
    metragem: 0,
    imagens: [],
    descricao: "",
    maxHospedes: 0,
    permiteFestas: false,
    aceitaAnimais: false,
    permiteFumar: false,
    outrasRegras: "",
    status: "",
    valor: 0,
    frequenciaPagamento: "",
    tarifaLimpeza: 0,
    outrasTarifas: "",
    nomeProprietario: "",
    contato: "",
    cpfCnpj: "",
    regulacoesLocais: "",
    acessibilidade: [],
    politicaCancelamento: "",
    outrasPoliticas: "",
    pais: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    depositoSeguranca: "",
    valorDeposito: 0,
    taxaAnimal: "",
    taxaAnimalValor: 0,
    politicaFumantes: "",
    politicaFestas: "",
    taxaFestas: "",
  });

  const totalSteps = 11;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Cadastro de Imóveis</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {currentStep === 1 && (
          <InformacoesBasicas formData={formData} updateBasicInfo={updateFormData} />
        )}
        {currentStep === 2 && (
          <FotosImovel
            initialData={formData.imagens}
            updateImages={(images) => updateFormData({ imagens: images })}
          />
        )}
        {currentStep === 3 && (
          <Localizacao
            formData={formData}
            updateLocalizacao={nextStep}
          />
        )}
        {currentStep === 4 && (
          <DescricaoDetalhada formData={formData} updateDescricao={updateFormData} />
        )}
        {currentStep === 5 && (
          <RegrasRestricoes formData={formData} updateRegras={updateFormData} />
        )}
        {currentStep === 6 && (
          <InformacoesComerciais formData={formData} updateComerciais={updateFormData} />
        )}
        {currentStep === 7 && ( 
          <TarifasAdicionais formData={formData} updateTarifas={updateFormData} />
        )}
        {currentStep === 8 && (
          <InformacoesProprietario formData={formData} updateProprietario={updateFormData} />
        )}
        {currentStep === 9 && (
          <InformacoesRegulatorias formData={formData} updateRegulatorias={updateFormData} />
        )}
        {currentStep === 10 && (
          <Acessibilidade formData={formData} updateAcessibilidade={updateFormData} />
        )}
        {currentStep === 11 && (
          <PoliticasReservas formData={formData} updatePoliticas={updateFormData} />
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={previousStep}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default CadastroImovel;
