import Image from 'next/image';

import CardArea from "@/components/layout/CardArea"
import PesquisaArea from '@/components/layout/homepage/PesquisaArea';
import CardBairroArea from '@/components/layout/homepage/CardBairroArea';

export default function Home(){
    return (
        <div className="relative">
            <div className="z-0">
                <Image 
                    src="/img/fundo-home.png"
                    alt="fundo-home"
                    width={160} // Ajuste conforme necessário
                    height={50} // Ajuste conforme necessário
                    layout="responsive"
                />
            </div>
            <div className="relative z-10 p-0 mt-[-35%] xt:mt-[-35%] sm:mt-[-30%] md:mt-[-25%] w-full overflow-x-hidden">
                <aside className=" w-full z-10 
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold 
                text-white font-sans text-shadow mx-8 my-5">
                    Encontre facilmente <br /> onde ficar!
                </aside>
                <div className='my-5'>
                    <PesquisaArea />
                </div>
                <div className='my-5'>
                    <CardArea limit={5} />
                </div>
                <div>
                    <CardBairroArea />
                </div>
            </div>
        </div>
    )
}