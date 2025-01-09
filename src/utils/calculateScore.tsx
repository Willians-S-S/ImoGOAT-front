import { Property } from '@/interfaces/propertyTypes';

const calculateDateScore = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const daysDifference = (today.getTime() - date.getTime()) / (1000 * 3600 * 24);
    return Math.max(100 - daysDifference, 0); // Subtrai um ponto por dia, até um máximo de 100 dias
};

export const calculateScore = (imovel: Property) => {
    const imageScore = imovel.images.length * 20; // Cada imagem adiciona 10 pontos
    const detailScore = (imovel.numberOfBedrooms + imovel.numberOfBathrooms + (imovel.garagem ? 1 : 0)) * 5;
    const dateScore = calculateDateScore(imovel.proprietary.createdAt); /// MUDAR ESSA DATA
    return imageScore + detailScore + dateScore;
};