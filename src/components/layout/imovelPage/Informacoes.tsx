import { Property } from "@/interfaces/propertyTypes"


interface InformacoesProps {
    imovel: Property,
}

const Informacoes:React.FC<InformacoesProps> = ({ imovel }) => {
    return (
        <div id="informacoes" >
            <h3 className="font-semibold text-2xl">Informações sobre a propriedade</h3>
            <h2 className="font-semibold text-xl">Cômodos</h2>
            {imovel.numberOfBedrooms > 0 && (
                <div className="flex flex-row space-x-1">
                    <p className="material-icons">bed</p>
                    <p>{imovel.numberOfBedrooms} quartos</p>
                </div>
            )}
            {imovel.numberOfBathrooms > 0 && (
                <div className="flex flex-row space-x-1">
                    <p className="material-icons">shower</p>
                    <p>{imovel.numberOfBathrooms} banheiros</p>
                </div>
            )}
        </div>
    )
}

export default Informacoes