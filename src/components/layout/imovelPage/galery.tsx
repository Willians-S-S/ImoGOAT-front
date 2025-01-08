import { useRouter } from "next/navigation"
// import Image from "next/image";
import { ImageProps } from "@/interfaces/propertyTypes";

import Carousel from "./carousel";

interface ImagesProps {
    images: ImageProps[],
}

const Galery: React.FC<ImagesProps> = ({ images }) => {
    const router = useRouter();

    const sharePage = async () => {
        const pageTitle = document.title; // Título da página
        const pageUrl = window.location.href; // URL atual da página
    
        if (navigator.share) {
          try {
            await navigator.share({
              title: pageTitle,
              text: "Confira esta página incrível!",
              url: pageUrl,
            });
            // alert("Página compartilhada com sucesso!");
          } catch (error) {
            console.error("Erro ao compartilhar:", error);
          }
        } else {
          // Caso a Web Share API não esteja disponível
          try {
            await navigator.clipboard.writeText(pageUrl);
            alert("Link copiado para a área de transferência!");
          } catch (error) {
            console.error("Erro ao copiar o link:", error);
            alert("Não foi possível compartilhar o link.");
          }
        }
      };

    return (
        <div className=" w-4/5 mx-auto">
            <div className="flex flex-row justify-between w-full px-5 mb-4">
                <i className="material-icons cursor-pointer text-[--green-medium]" onClick={() => router.back()}>arrow_back</i>
                <div className="flex flex-row space-x-8">
                    <i className="material-icons cursor-pointer text-[--green-medium]" onClick={sharePage}>send</i>
                    <div className="flex flex-row space-x-2 items-center">
                        <i
                            className="material-icons text-transparent "
                            style={{
                                WebkitTextStroke: "1px var(--green-medium)",
                                color: "transparent",
                        }}
                        >
                            favorite
                        </i>
                        <p className="text-base self-center">Favoritar</p>
                    </div>
                </div>
            </div>

            

            <Carousel images={images} />

        </div>
    )
}

export default Galery