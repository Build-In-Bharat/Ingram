"use client";
import React, { useState } from "react";
import { DialogForm } from "../DialogForm";

const cardsData = [
  {
    imageSrc: "/Laptop1.avif",
    title: "Latitude 7455 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
  {
    imageSrc: "/Laptop2.avif",
    title: "Dell Latitude 5440 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
  {
    imageSrc: "/Laptop2.avif",
    title: "Dell Latitude 5440 Laptop",
    description: "Latitude's first Copilot+ PC powered by Snapdragon® X Series ushers in a new era of AI with game-changing performance and outstanding battery life",
    buttonText: "Send Enquiry",
  },
];

const Sixth: React.FC = () => {
  const [dialogStates, setDialogStates] = useState(cardsData.map(() => false));

  const toggleDialog = (index: number) => {
    setDialogStates(prevStates =>
      prevStates.map((state, i) => i === index ? !state : state)
    );
  };

  return (
    <section className="bg-[#010b1a] py-8 sm:py-12 md:py-14 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            To break new ground, you need ground-breaking devices. Windows 11 Pro
            devices can accelerate workflows and collaboration 50% on average.
            With experiences that elevate the potential of everyone on your team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-[#0a1929] p-4 sm:p-6 rounded-lg shadow-md">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-48 sm:h-56 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold text-lg sm:text-xl mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{card.description}</p>
              <DialogForm
                isDialogOpen={dialogStates[index]}
                toggleDialog={() => toggleDialog(index)}
                buttonText={card.buttonText}
                dialogTitle="Send Enquiry"
                buttonClassNames="w-full py-2 px-4 text-sm sm:text-base"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sixth;
