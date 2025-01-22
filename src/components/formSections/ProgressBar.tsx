import React from "react";
import { isStepComplete } from "@/utils/formHelpers";
import { FormData } from "@/interfaces/propertyForm"; // Importa a interface

interface ProgressBarProps {
  setStep: (step: number) => void;
  formData: FormData;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ setStep, formData }) => {
  const totalSteps = 13;

  return (
    <div className="flex gap-1 mb-8">
      {Array.from({ length: totalSteps - 2 }, (_, i) => i + 1).map((step) => {
        const isComplete = isStepComplete(step, formData);

        return (
          <div
            key={step}
            className={`flex-1 h-2 rounded-sm cursor-pointer ${
              isComplete ? "bg-[--green-medium]" : "bg-[--green-medium] opacity-50"
            }`}
            onClick={() => setStep(step)}
          ></div>
        );
      })}
    </div>
  );
};

export default ProgressBar;