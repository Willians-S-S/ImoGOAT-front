import Image from "next/image"

interface ParamsProps {
    params: string,
}


const ImageFundo: React.FC<ParamsProps> = ({ params }) => {
    return (
        <div className="flex items-center justify-center z-0 max-h-[400px] overflow-hidden">
            <Image 
                src={params}
                alt="fundo-home"
                width={160}
                height={50}
                layout="responsive"
            />
        </div>
    )
}


export default ImageFundo