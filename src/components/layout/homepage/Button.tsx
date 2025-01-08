import React from "react";

// Definindo a interface para as props
interface ButtonProps {
  text: string;
  isActive: boolean; // Indica se o botão está ativo
  onClick: () => void; // Função para lidar com cliques
}

const Button: React.FC<ButtonProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase tracking-wider inline-block text-center font-bold relative shadow-lg
      transition-all duration-300 ease-in-out z-10 
      ${isActive ? "text-[--white] bg-[--green-light]" : "text-[--green-light]"} 
      hover:text-[--white] hover:bg-[--green-light] 
      text-sm py-1 sm:py-2 md:py-3 px-2 sm:px-3 md:px-4 border-2 sm:border-4 border-[--green-light] rounded-md  
      mx-0 sm:mx-1 md:mx-2 mr-2`}
    >
      {text}
    </button>
  );
};

export default Button;
