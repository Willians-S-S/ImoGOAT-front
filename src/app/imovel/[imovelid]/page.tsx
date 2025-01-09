"use client";


import React, { useEffect, useState } from 'react';

import { fetchPropertyById } from "@/api/imovelService"
import { Property } from '@/interfaces/propertyTypes';

import ImageFundo from '@/components/layout/imageFundo';
import Galery from '@/components/layout/imovelPage/galery';
import MenuImovel from '@/components/layout/imovelPage/MenuImovel';
import VisaoGeral from '@/components/layout/imovelPage/VisaoGeral';
import Informacoes from '@/components/layout/imovelPage/Informacoes';

import LoadingSpinner from '@/components/layout/LoadingSpinner';


interface ImovelPageProps {
    params: {
        imovelId: string;
    };
}

const ImovelPage: React.FC<ImovelPageProps> = ({ params }) => {
    const [imovel, setImovel] = useState<Property | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const minLoadingTime = 500; // 2 segundos (tempo mínimo)

        // Promessa para carregar os dados do imóvel
        const loadData = fetchPropertyById(params.imovelId)
            .then(setImovel)
            .catch(err => {
                setError('Falha ao carregar os dados do imóvel.');
                console.error(err);
            });

        // Promessa para o tempo mínimo de carregamento
        const loadingDelay = new Promise<void>((resolve) =>
            setTimeout(resolve, minLoadingTime)
        );

        // Espera as duas promessas terminarem
        Promise.all([loadData, loadingDelay]).finally(() => {
            setLoading(false);
        });
    }, [params.imovelId]);

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="relative">
            <ImageFundo params={imovel?.images[0]?.url || ''} />
            <div className="relative z-10 p-0 mt-[-18%] xt:mt-[-18%] sm:mt-[-13%] md:mt-[-8%] w-full overflow-x-hidden">
                <aside className="w-full z-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white font-sans text-shadow mx-8 mb-10">
                    {imovel?.name}
                </aside>
                <Galery images={imovel?.images || []} />
            </div>
            <MenuImovel />
            <hr className="border-t border-gray-300 w-full my-2" />
            <VisaoGeral imovel={imovel!} />
            <Informacoes imovel={imovel!} />
            {/* <p>{JSON.stringify(imovel, null, 2)}</p> */}
        </div>
    );
};

export default ImovelPage