"use state";

// import React, { useState } from "react";
import Button from "./Button";

interface ButtonGroupProps {
  selectedType: string | null; // Tipo selecionado
  onTypeSelect: (type: string | null) => void; // Callback para comunicar o tipo selecionado
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ selectedType, onTypeSelect }) => {
  const handleButtonClick = (type: string) => {
    // console.log(type)
    onTypeSelect(selectedType === type ? null : type); // Alterna o tipo selecionado
  };

  return (
    <div>
      <Button
        text="apartamento"
        isActive={selectedType === "apartamento"}
        onClick={() => handleButtonClick("apartamento")}
      />
      <Button
        text="casa"
        isActive={selectedType === "casa"}
        onClick={() => handleButtonClick("casa")}
      />
      <Button
        text="Quitinete"
        isActive={selectedType === "Quitinete"}
        onClick={() => handleButtonClick("Quitinete")}
      />
    </div>
  );
};

export default ButtonGroup;
