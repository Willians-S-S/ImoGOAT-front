import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center p-5 w-full h-auto bg-[--green-light] text-white mt-2">
                <div className='cursor-pointer hover:text-[--green-black]'>
                    Sobre nós
                </div>
                <div className="flex space-x-3 w-auto my-2">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 hover:text-[--white]" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 hover:text-[--white]" />
                    </a>
                </div>
                <div className='my-4 text-sm'>ImoGOAT © 2024</div>
            </div>
        </>
    )
}

export default Footer