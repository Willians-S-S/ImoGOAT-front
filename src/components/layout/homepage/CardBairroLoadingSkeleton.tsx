const CardBairroLoadingSkeleton: React.FC = () => {
    return (
        <div className="bg-gray-300 w-24 xs:w-32 sm:w-40 lg:w-44 xl:w-52 h-auto rounded-md sm:rounded-xl shadow-lg overflow-hidden flex flex-col animate-pulse">
            {/* Simula a imagem */}
            <div className="flex-grow w-full h-14 xs:h-[75px] sm:h-24 lg:h-28 xl:h-36 bg-gray-400"></div>
            {/* Simula o nome do bairro */}
            <div className="px-3 mt-2 h-4 bg-gray-400 rounded w-3/4"></div>
            {/* Simula o nome da cidade */}
            <div className="px-3 mt-2 h-3 bg-gray-400 rounded w-1/2"></div>
        </div>
    );
};

export default CardBairroLoadingSkeleton;