// src/interfaces/propertyTypes.ts

export interface Proprietary {
    id: number;
    username: string;
    email: string;
    password: string;
    number: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export interface ImageProps {
    id: number;
    url: string;
    immobileId: number;
}

export interface Property {
    id: number;
    name: string;
    number: number;
    type: string;
    location: string;
    bairro: string;
    city: string;
    reference: string;
    value: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    garagem: boolean;
    description: string;
    proprietaryId: number;
    proprietary: Proprietary;
    feedbacks: number[];
    images: ImageProps[];
}

export interface ScoredProperty extends Property {
    score: number;
}

export interface CardProps {
    property: ScoredProperty;  // Agora 'property' inclui 'score' diretamente
}
