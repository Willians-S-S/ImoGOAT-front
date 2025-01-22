import { FormData } from "@/interfaces/propertyForm";

export const totalSteps = 13;

export const camposObrigatoriosPorEtapa: { [key: number]: string[] } = {
  1: ["nome", "tipo"],
  2: ["imagens"],
  3: ["pais", "estado", "cidade", "bairro", "rua", "numero"],
  4: ["descricao"],
  6: ["valor"],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
};

export const isStepComplete = (step: number, formData: FormData): boolean => {
  const camposObrigatorios: string[] = camposObrigatoriosPorEtapa[step] || [];
  return camposObrigatorios.every((campo) => {
    if (campo === "imagens") {
      return formData.imagens.length > 0;
    }
    return !!formData[campo as keyof FormData];
  });
};


/**
 * Função para validar os campos obrigatórios
 * @param formData - Os dados do formulário
 * @returns Array de objetos com as etapas que possuem campos inválidos
 */
export const validarCampos = (formData: FormData): { etapa: number; mensagem: string }[] => {
  const etapasFaltantes: { etapa: number; mensagem: string }[] = [];

  Object.entries(camposObrigatoriosPorEtapa).forEach(([etapa, campos]) => {
    const etapaTemErro = campos.some((campo) => {
      if (campo === "imagens") {
        // Valida o array de imagens
        return formData.imagens.length === 0;
      }
      return !formData[campo as keyof FormData]; // Verifica se o campo está vazio ou inválido
    });

    if (etapaTemErro) {
      etapasFaltantes.push({
        etapa: parseInt(etapa, 10),
        mensagem: `Preencha os campos obrigatórios da etapa ${etapa}.`,
      });
    }
  });

  return etapasFaltantes;
};