import Image from "next/image"

interface CardBairroProps {
    img: string,
    bairro: string,
    city: string,
}

const CardBairro = ({img, bairro, city}: CardBairroProps) => {
    return (
        <div className="bg-white w-24 xs:w-32 sm:w-40 lg:w-44 xl:w-52 h-auto rounded-md sm:rounded-xl shadow-lg overflow-hidden flex flex-col">
            {img && (
                <div className="flex-grow w-full h-14 xs:h-[75px] sm:h-24 lg:h-28 xl:h-36 relative">
                    <Image 
                        src={img}
                        alt={`Imagem do bairro ${bairro}`}
                        layout="fill"
                        objectFit="cover"
                        className='cursor-pointer'
                    />
                </div>
            )}
            <p className="px-3 font-semibold text-base sm:text-lg">
                {bairro}
            </p>
            <p className="px-3 text-xs sm:text-sm">
                {city}
            </p>
        </div>
    )
}

export default CardBairro