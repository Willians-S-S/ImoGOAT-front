"use client";

import React from "react";

interface ButtonAnuncioProps {
  type: string;
  icon: string;
  text: string;
  onClick?: () => void; // Função opcional para clique
}

const ButtonAnuncio: React.FC<ButtonAnuncioProps> = ({ type, icon, text, onClick }) => {
  return (
    <div
      className="md:my-3 px-6 xl:px-9 py-2 rounded-xl border-2 border-[--green-medium] bg-[--white] 
      hover:bg-[--green-medium] hover:text-[--white] hover:scale-105 transition-all duration-300 
      flex flex-col items-center cursor-pointer shadow-md"
      onClick={onClick}
    >
      <p className="material-icons text-6xl mb-2">{icon}</p>
      <h3 className="font-bold text-xl">{type}</h3>
      <p className="text-base text-center break-words max-w-28">{text}</p>
    </div>
  );
};

export default ButtonAnuncio;
