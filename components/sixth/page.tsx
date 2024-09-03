import React from "react";

const cardsData = [
  {
    imageSrc: "/sixth_card.svg",
    title: "FPO Product Name",
    description: "Product spec, information, and details go here",
    buttonText: "Send Enquiry",
    buttonLink: "#",
  },
  {
    imageSrc: "/sixth_card.svg",
    title: "FPO Product Name",
    description: "Product spec, information, and details go here",
    buttonText: "Send Enquiry",
    buttonLink: "#",
  },
  {
    imageSrc: "/sixth_card.svg",
    title: "FPO Product Name",
    description: "Product spec, information, and details go here",
    buttonText: "Send Enquiry",
    buttonLink: "#",
  },
];

const Sixth: React.FC = () => {
  return (
    <section className="bg-[#0f172a] text-white py-10 container mx-auto min-w-full">
      <div className="container mx-auto text-center mb-12">
        <p className="text-lg md:text-lg max-w-3xl mx-auto">
          To break new ground, you need ground-breaking devices. Windows 11 Pro
          devices can accelerate workflows and collaboration 50% on average.
          With experiences that elevate the potential of everyone on your team.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {cardsData.map((card, index) => (
          <div key={index} className="p-6 max-w-xs text-start">
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-auto object-contain mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300 mb-6">{card.description}</p>
            <a
              href={card.buttonLink}
              className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-all"
            >
              {card.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sixth;
