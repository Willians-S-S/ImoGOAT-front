import { Property } from "@/interfaces/propertyTypes"

import Feedback from "./Feedback"

interface VisaoGeralProps {
    imovel: Property,
}

const VisaoGeral:React.FC<VisaoGeralProps> = ({ imovel }) => {
    const feedbacks = [4, 5, 3.5, 4, 4.5, 4,5];

    return(
        <div className="space-y-2" id="visao-geral">
            <h3 className="font-bold text-3xl">{imovel.name}, {imovel.bairro}</h3>
            <Feedback feedbacks={feedbacks} />
            <p>{imovel.description}</p>
        </div>
    )
}

export default VisaoGeral