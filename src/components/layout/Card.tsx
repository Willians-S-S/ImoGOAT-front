"use client";

import Image from 'next/image';
import HomeIcon from "@mui/icons-material/Home"
import { Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { CardProps } from '@/interfaces/propertyTypes';


const Card: React.FC<CardProps> = ({ property }) => {
    const router = useRouter();
    const [isFavorited, setIsFavorited] = useState(false); // Estado para controlar se foi favoritado

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited); // Alterna o estado de favorito
    };

    const toImovel = () => {
        console.log(`ID da propriedade antes do redirecionamento: ${property.id}`);
        router.push(`/imovel/${property.id}`);
    };

    return (
        <>
            <div className="xl:w-[310px] lg:w-[260px] md:w-[200px] sm:w-[250px] xt:w-[175px] xs:w-[160px] 
            h-auto bg-[--white] rounded-xl">
                {property.images && property.images.length > 0 && (
                    <div 
                    className='relative w-full h-24 sm:h-28  lg:h-40 overflow-hidden rounded-t-lg' 
                    onClick={toImovel}>
                        <Image 
                            src={property.images[0].url}
                            alt={property.name}
                            layout="fill"
                            objectFit="cover"
                            className='cursor-pointer'
                        />
                    </div>
                )}
                <div className='h-auto mx-3'>
                    <div className='flex flex-row items-start justify-between'>
                        <h1 className='font-semibold sm:text-2xl xt:text-xl cursor-pointer'
                        onClick={() => router.push('/imovel')}>
                            {property.name}
                        </h1>
                        <Favorite 
                            onClick={toggleFavorite} // Adicionando evento de clique
                            style={{ color: isFavorited ? "red" : "white" }} // Cor baseada no estado
                            sx={{
                                fontSize: 30, // Tamanho do ícone
                                '& path': {
                                    fill: 'currentcolor', // Preenchimento com a cor atual
                                    stroke: '#000', // Contorno preto
                                    strokeWidth: 1 // Espessura do contorno
                                }
                            }}
                            className='cursor-pointer'
                        />
                    </div>
                    <p className='flex flex-row items-center sm:text-sm xt:text-xs text-xs'>
                        <HomeIcon 
                            style={{ color: "white" }} 
                            sx={{
                                fontSize: 20, // Corresponde a 'opsz'
                                color: 'rgba(0, 0, 0, 0)', // Corresponde a 'FILL' 0
                                '& path': {
                                    fill: 'currentcolor', // Garante que o preenchimento usa a cor do ícone
                                    stroke: '#000', // Corresponde a aplicar uma cor de 'stroke'
                                    strokeWidth: 1 // Pode simular 'wght'
                                }
                            }}
                            className="mr-1"
                        />
                        {property.type}
                    </p>
                    {/* <div className="card-header"> */}
                        {/* <span>Score: {property.score}</span>  Mostrando o score */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Card