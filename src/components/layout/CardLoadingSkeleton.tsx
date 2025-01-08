const CardLoadingSkeleton: React.FC = () => {
    return (
        <div className="xl:w-[310px] lg:w-[260px] md:w-[200px] sm:w-[250px] xt:w-[175px] xs:w-[160px] 
                        h-auto bg-gray-300 rounded-xl animate-pulse">
            {/* Parte superior: imagem */}
            <div className="w-full h-24 sm:h-28 lg:h-40 bg-gray-400 rounded-t-lg"></div>
            {/* Parte inferior: conteúdo do card */}
            <div className="p-3 space-y-2">
                <div className="h-6 bg-gray-400 rounded"></div> {/* Título */}
                <div className="h-4 bg-gray-400 rounded w-3/4"></div> {/* Descrição */}
                <div className="h-4 bg-gray-400 rounded w-1/2"></div> {/* Texto adicional */}
            </div>
        </div>
    );
};

export default CardLoadingSkeleton;
