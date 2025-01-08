import OptionsMenu from "./OptionMenu"

const MenuImovel = () => {
    return (
        <div className="flex flex-row space-x-3 mt-3">
            <OptionsMenu text='Visão Geral' scrollToId="visao-geral" />
            <OptionsMenu text='Comodidades' />
            <OptionsMenu text='Informações' scrollToId="informacoes" />
            <OptionsMenu text='Acessibilidade' />
            <OptionsMenu text='Políticas' />
        </div>
    )
}

export default MenuImovel